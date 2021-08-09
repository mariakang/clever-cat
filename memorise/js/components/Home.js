class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mode: "loading",
      name: "",
      authToken: "",
      array: [],
      activeList: {}
    };
    this.handleNewList = this.handleNewList.bind(this);
    this.handleViewList = this.handleViewList.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);
    this.handleCancelDelete = this.handleCancelDelete.bind(this);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
    this.handleCancelCreate = this.handleCancelCreate.bind(this);
    this.handleLaunchTest = this.handleLaunchTest.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.handleLaunchDemoTest = this.handleLaunchDemoTest.bind(this);
  }
  componentDidMount() {
    let userPool = this.props.userPool;

    let cognitoUser = userPool.getCurrentUser();

    if (cognitoUser) {
      cognitoUser.getSession(function sessionCallback(err, session) {
        if (err) {
          console.log("Error getting user session");
          this.setState({
            mode: "login"
          });
          console.log("mode changed to " + this.state.mode);
        } else if (!session.isValid()) {
          console.log("User session is not valid");
          this.setState({
            mode: "login"
          });
          console.log("mode changed to " + this.state.mode);
        } else {
          cognitoUser.getUserAttributes(function attributesCallback(err, attributes) {
            this.setState({
              name: attributes.find(x -> x.Name == "name").Value,
              authToken: session.getIdToken().getJwtToken()
            });
            console.log("name changed to " + this.state.name + ", authToken changed to " + this.state.authToken);
            fetch(this.props.apiUrl + "/lists", {
              method: 'POST',
              headers: {
                Authorization: this.state.authToken
              },
              contentType: 'application/json',
              success: function storeLists(err, data) {
                this.setState({
                  mode: "home",
                  array: data
                });
                console.log("mode changed to " + this.state.mode + ", array changed to " + this.state.array);
              }
              error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error fetching lists: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when fetching your lists:\n' + jqXHR.responseText);
              }
            });
          });
        }
      });
    } else {
      console.log("No user found");
      this.setState({
        mode: "login"
      });
      console.log("mode changed to " + this.state.mode);
    }
  }
  handleNewList(event) {
    this.setState({
      mode: "create"
    });
    console.log("mode changed to " + this.state.mode);
  }
  handleViewList(event, record) {
    this.setState({
      mode: "view",
      activeList: record
    });
    console.log("mode changed to " + this.state.mode + ", activeList changed to " + this.state.activeList);
  }
  handleDeleteList(event, record) {
    this.setState({
      mode: "delete",
      activeList: record
    });
    console.log("mode changed to " + this.state.mode + ", activeList changed to " + this.state.activeList);
  }
  handleCancelDelete(event) {
    this.setState({
      mode: "home"
    });
    console.log("mode changed to " + this.state.mode);
  }
  handleConfirmDelete(event) {
    fetch(this.props.apiUrl + "/delete", {
      method: 'POST',
      headers: {
        Authorization: this.state.authToken
      },
      contentType: 'application/json',
      data: JSON.stringify({
        ListId: this.state.activeList.listId
      }),
      success: function ListDeleted(err, data) {
        console.log('Successfully deleted list');
        window.location.href = 'index.html';
      }
      error: function ajaxError(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching lists: ', textStatus, ', Details: ', errorThrown);
        console.error('Response: ', jqXHR.responseText);
        alert('An error occured when fetching your lists:\n' + jqXHR.responseText);
      }
    });
  }
  handleEdit(event) {
    this.setState({
      mode: "edit"
    });
    console.log("mode changed to " + this.state.mode);
  }
  handleHome(event) {
    this.setState({
      mode: "home",
      activeList: {}
    });
    console.log("mode changed to " + this.state.mode + ", activeRecord changed to " + this.state.activeRecord);
  }
  handleCancelEdit(event) {
    this.setState({
      mode: "view"
    });
    console.log("mode changed to " + this.state.mode);
  }
  handleCancelCreate(event) {
    this.setState({
      mode: "home",
      activeList: {}
    });
    console.log("mode changed to " + this.state.mode + ", activeRecord changed to " + this.state.activeRecord);
  }
  handleLaunchTest(event) {
    this.setState({
      mode: "test"
    });
    console.log("mode changed to " + this.state.mode);
  }
  handleDemo(event) {
    this.setState({
      mode: "demo"
    });
    console.log("mode changed to " + this.state.mode);
  }
  handleLaunchDemoTest(event, record) {
    this.setState({
      activeList: record,
      mode: "test"
    });
    console.log("mode changed to " + this.state.mode + ", activeRecord changed to " + this.state.activeRecord);
  }
  render() {
    let message = this.state.mode == "loading"
        ? "Loading lists..."
        : this.state.mode == "error"
          ? "An error occurred"
          : "You haven't created any lists yet";
    let lists = (<div className="description">{message}</div>);
    const array = this.state.array;
    let titles = [];
    if (array.length > 0) {
      lists = array.map(x => (
        <ContentsRow record={x}
          onGo={this.handleViewList}
          onDelete={this.handleDeleteList} />
      ));
      titles = array.map(x => x.title);
    }
    let content = (
      <div className="container">
        <h1>{"Hello " + this.state.name}</h1>
        <div className="row tableHeading">
          <h2>My lists</h2>
          <div></div>
        </div>
        <div className="table tableBody">
          {lists}
        </div>
        <div className="tableEnding"></div>
        <button onClick={this.handleNewList}>New list</button>
        <button onClick={this.handleDemo}>See example list</button>
      </div>
    );
    if (this.state.mode == "login") {
      content = (
        <div className="container">
          <Login userPool={this.props.userPool} />
        </div>
      );
    } else if (this.state.mode == "create") {
      const newRecord = {
        username: this.props.username,
        title: "",
        column1: "",
        column2: "",
        items: [["",""]],
        _id: "new"
      };
      content = (
        <div className="container">
          <ListForm record={newRecord}
            username={this.props.username}
            name={this.state.name}
            titles={titles} />
          <button onClick={this.handleCancelCreate}>Cancel</button>
        </div>
      );
    } else if (this.state.mode == "view") {
      content = (
        <div className="container">
          <List record={this.state.activeList} />
          <button onClick={this.handleLaunchTest} className="test">Test me!</button>
          <button onClick={this.handleEdit}>Edit <i className="fa fa-edit"></i></button>
          <button onClick={this.handleHome}>Home <i className="fa fa-home"></i></button>
        </div>
      );
    } else if (this.state.mode == "demo") {
      content = (
        <DemoList onTest={this.handleLaunchDemoTest}
            onHome={this.handleHome}/>
      );
    } else if (this.state.mode == "test") {
      content = (
        <div className="container">
          <Test record={this.state.activeList} />
          <button onClick={this.handleHome}>Home <i className="fa fa-home"></i></button>
        </div>
      );
    } else if (this.state.mode == "edit") {
      content = (
        <div className="container">
          <ListForm record={this.state.activeList}
            username={this.props.username}
            name={this.state.name}
            titles={titles.filter(x => x != this.state.activeList.title)} />
          <button onClick={this.handleCancelEdit}>Cancel</button>
        </div>
      );
    } else if (this.state.mode == "delete") {
      let message = "Are you sure you want to delete \"" + record.title + "\"?";
      content = (
        <div className="container">
          <h2>{message}</h2>
          <button onClick={this.handleConfirmDelete} tabIndex="-1">Delete <i className="fa fa-trash"></i></button>
          <button onClick={this.handleCancelDelete}>Cancel</button>
        </div>
      );
    }
    let title = this.state.activeList.title
      ? this.state.activeList.title
      : this.state.mode == "login"
        ? "Login / Register"
        : "";
    return (
      <div className="main">
        <div className="header">
          <div className="headerSection-left">
            <div className="headerItem">Memorise!</div>
          </div>
          <div className="headerSection-right">
            <div className="headerItem">{this.state.name}</div>
            <div className="headerItem">{title}</div>
          </div>
        </div>
        {content}
      </div>
    );
  }
}
