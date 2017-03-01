var React = require('react');
var ReactDOM = require('react-dom');

module.exports = class BugAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }
  render() {
    // console.log("Rendering BugAdd");
    // console.log(this.props);
    return (
      <div>
        <form name="bugAdd">
          <input type="text" name="owner" placeholder="Owner"/>
          <input type="text" name="title" placeholder="Title"/>
          <button onClick={this.handleSubmit}>Add Bug</button>
        </form>
      </div>
    );
  }
  handleSubmit(e) {
    console.log("this.props is:");
    console.log(this.props);
    e.preventDefault();
    var form = document.forms.bugAdd;
    this
      .props
      .addBug({owner: form.owner.value, title: form.title.value, status: 'New', priority: 'P1'});
    // clear form for next input
    form.owner.value = "";
    form.title.value = "";
  }
};
