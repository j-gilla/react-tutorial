var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox">

        </div>
    );
  }
});

var CommentList = React.createClass ({
  render: function () {
    return (
      <div className="commentForm">
        Hello! I'm a commentForm.
      </div>
    );
  }
});

var CommentForm = React.createClass ({
  render: function () {
    return (
      <div className="commentForm">
        Hello! I'm a commentForm.
        </div>
    );
  }
});













ReactDOM.render(
<h1>CommentBox</h1>,
  document.getElementById('app')
);