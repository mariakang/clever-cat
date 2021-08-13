class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mode: "loading",
      name: "",
      username: "",
      authToken: "",
      userLists: [],
      publicLists: [],
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
    this.handlePublic = this.handlePublic.bind(this);
  }
  componentDidMount() {
    let userPool = this.props.userPool;

    let cognitoUser = userPool.getCurrentUser();

    if (cognitoUser) {
      cognitoUser.getSession((err, session) => {
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
          let username = cognitoUser.getUsername();
          console.log("Username: " + username);
          cognitoUser.getUserAttributes((err, attributes) => {
            this.setState({
              name: attributes.find(x => x.Name == "name").Value,
              username: username,
              authToken: session.getIdToken().getJwtToken()
            });
            console.log("name changed to " + this.state.name + ", username changed to " + this.state.username + ", authToken changed to " + this.state.authToken);
            $.ajax({
              method: "POST",
              url: this.props.apiUrl + "/lists",
              headers: {
                Authorization: this.state.authToken,
              },
              data: JSON.stringify({
                username: username
              }),
              contentType: 'application/json',
              success: (response) => {
                console.log(response);
                this.setState({
                  mode: "home",
                  userLists: response.usernameLists,
                  publicLists: response.publicLists
                });
                console.log("mode changed to " + this.state.mode + ", user lists changed to " + this.state.userLists + ", public lists changed to " + this.state.publicLists);
                console.log('Successfully fetched lists');
              },
              error: (jqXHR, textStatus, errorThrown) => {
                this.setState({
                  mode: "error",
                });
                console.log("mode changed to " + this.state.mode);
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
        "Authorization": this.state.authToken
      },
      body: JSON.stringify({
        "ListId": this.state.activeList.id
      })
    }).then((response) => {
        console.log('Successfully deleted list');
        console.log(JSON.stringify(response));
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error('Error deleting list');
        console.error(JSON.stringify(error));
        alert('An error occured when deleting your list');
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
  handlePublic(event) {
    this.setState({
      mode: "public"
    });
    console.log("mode changed to " + this.state.mode);
  }

  render() {
    let message = this.state.mode == "loading"
        ? "Loading lists..."
        : this.state.mode == "error"
          ? "An error occurred"
          : "You haven't created any lists yet";
    let lists = (<div className="description">{message}</div>);
    const userLists = this.state.userLists;
    if (userLists.length > 0) {
      lists = userLists.map(x => (
        <ContentsRow record={x}
          onGo={this.handleViewList}
          onDelete={this.handleDeleteList} />
      ));
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
        <button onClick={this.handlePublic}>See public lists</button>
      </div>
    );
    if (this.state.mode == "login") {
      content = (
        <Login userPool={this.props.userPool} />
      );
    } else if (this.state.mode == "public") {
      lists = (<div className="description">"There aren't any public lists yet"</div>);
      const publicLists = this.state.publicLists;
      if (publicLists.length > 0) {
        lists = publicLists.map(x => (
          <ContentsRow record={x}
            onGo={this.handleViewList}
            onDelete={this.handleDeleteList} />
        ));
      }
      let content = (
        <div className="container">
          <h1>"Public lists"</h1>
          <div className="row tableHeading">
            <h2>Public lists</h2>
            <div></div>
          </div>
          <div className="table tableBody">
            {lists}
          </div>
          <div className="tableEnding"></div>
          <button onClick={this.handleHome}>Home <i className="fa fa-home"></i></button>
        </div>
      );
    } else if (this.state.mode == "create") {
      const newRecord = {
        id: "",
        username: this.props.username,
        title: "",
        column1: "",
        column2: "",
        items: [["",""]],
        public: false
      };
      content = (
        <div className="container">
          <ListForm record={newRecord}
            authToken={this.state.authToken}
            apiUrl={this.props.apiUrl}
            username={this.state.username} />
          <button onClick={this.handleCancelCreate}>Cancel</button>
        </div>
      );
    } else if (this.state.mode == "view") {
      content = (
        <div className="container">
          <List record={this.state.activeList} />
          <button onClick={this.handleLaunchTest} className="test">Test me!</button>
          <button onClick={this.handleEdit} disabled={this.state.username != this.state.activeList.username}>Edit <i className="fa fa-edit"></i></button>
          <button onClick={this.handleHome}>Home <i className="fa fa-home"></i></button>
        </div>
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
            authToken={this.state.authToken}
            apiUrl={this.props.apiUrl}
            username={this.state.username} />
          <button onClick={this.handleCancelEdit}>Cancel</button>
        </div>
      );
    } else if (this.state.mode == "delete") {
      let message = "Are you sure you want to delete \"" + this.state.activeList.title + "\"?";
      let disallowed = this.state.username != this.state.activeList.username;
      if (disallowed) {
        message = "You cannot delete \"" + this.state.activeList.title + "\", as you didn't create it";
      }
      content = (
        <div className="container">
          <h2>{message}</h2>
          <button onClick={this.handleConfirmDelete} disabled={disallowed} tabIndex="-1">Delete <i className="fa fa-trash"></i></button>
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
