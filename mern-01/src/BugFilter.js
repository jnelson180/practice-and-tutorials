var React = require('react');
var ReactDOM = require('react-dom');

module.exports = class BugFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {priority: "", status: ""};
    this.submit = this.submit.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
  }
  submit(e) {
    e.preventDefault();
    this.props.submitHandler({
      priority: this.state.priority,
      status: this.state.status
    });
  }
  onChangeStatus(event) {
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
      Status:
        <select name="priority" value={this.state.priority} onChange={ this.onChangeStatus }>
          <option value=""> </option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
        </select>
        <br />
        Priority:
        <select name="status" value={this.state.status} onChange={ this.onChangeStatus }>
          <option value=""> </option>
          <option value="New">New</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
        <br />
        <button onClick={this.submit}>Apply</button>
      </div>
    );
  }
};
