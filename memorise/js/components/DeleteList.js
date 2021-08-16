class DeleteList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isDeleting: false
    };
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);

  handleConfirmDelete(event) {
    this.setState({
      isDeleting: true
    });
    console.log("isDeleting set to " + this.state.isDeleting);
    $.ajax({
      method: "POST",
      url: this.props.apiUrl + "/delete",
      headers: {
        Authorization: this.props.authToken,
      },
      data: JSON.stringify({
        listId: this.props.listId,
      }),
      contentType: 'application/json',
      success: (response) => {
        console.log(response);
        console.log('Successfully deleted list');
        window.location.href = 'index.html';
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.error('Error deleting list: ', textStatus, ', Details: ', errorThrown);
        console.error('Response: ', jqXHR.responseText);
        alert('An error occured when deleting this list:\n' + jqXHR.responseText);
        this.setState({
          isDeleting: false
        });
        console.log("isDeleting set to " + this.state.isDeleting);
      }
    });
  }

  render() {
  }
}
