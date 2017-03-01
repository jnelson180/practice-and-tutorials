var React = require('react');
var ReactDOM = require('react-dom');

module.exports = class BugFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {priority: "", status: ""};
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  submit(e) {
    this.props.submitHandler({
      priority: this.state.priority,
      status: this.state.status
    });
  }
  handleChange(event) {
    event.persist();
    if (event.target.name == 'priority') {
    this.setState({priority: event.target.value});
    }
    else if (event.target.name == 'status') {
    this.setState({status: event.target.value});
    }
    // console.log(this.state); state isn't right here
    // it's updated after render
  }
  render() {
    // console.log("Rendering BugFilter..:");
    console.log(this.state);
    return (
      <div>
      <form>
        <select name="priority" value={this.state.priority} onChange={this.handleChange}>
          <option value=""> </option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
        <select name="status" value={this.state.status} onChange={this.handleChange}>
          <option value=""> </option>
          <option value="New">New</option>
          <option value="Open">Open</option>
        </select>
        <button onClick={this.submit}>Test Filter</button>
      </form>
      </div>
    );
  }
};
