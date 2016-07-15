var CommentBox = React.createClass({
  loadCommentsFromServer: function () {
    $.ajax({
        url:this.props.url,
        dataType: 'json',
        cache: false,
        success: function (data) {
          this.setState({data: data})
        }.bind(this),
        error: function (xhr, status, err){
          console.error(this.props.url, status, err.toString());
        }
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function () {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass ({
  render: function () {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
        return (
          <div className="commentList">
            {commentNodes}
      </div>
    );
}
});
var CommentForm = React.createClass ({
  render: function () {
    return (
      <div className="commentForm"></div>
    );
  }
});

var Comment = React.createClass ({
  render: function () {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
          </h2>
        {this.props.children}
        </div>
    );
  }
});
ReactDOM. render(
<CommentBox url="https://northcoders-comment-box-server.herokuapp.com/api/comments" pollInterval={2000} />,
  document.getElementById('app')
);