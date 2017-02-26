var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var BugFilter = require('./BugFilter');
var BugAdd = require('./BugAdd');

module.exports = class BugList extends React.Component {
  constructor() {
    super();
    this.addBug = this
      .addBug
      .bind(this);
    this.state = {
      bugs: []
    }
  }
  render() {
    console.log("Rendering bug list, num items:", this.state.bugs.length);
    return (
      <div>
        <h1>Bug Tracker</h1>
        <BugFilter/>
        <hr/>
        <BugTable bugs={this.state.bugs}/>
        <hr/>
        <BugAdd addBug={this.addBug}/>
      </div>
    );
  }
  componentDidMount() {
    $
      .ajax('/api/bugs')
      .done(function(data) {
        var jsonData = data;
        this.setState({bugs: jsonData});
      }.bind(this));
  }
  addBug(bug) {
    console.log("Adding bug: ", bug);
    // Make a copy of state to rewrite since its immutable
    $.ajax({
      type: 'POST',
      url: '/api/bugs',
      contentType: 'application/json',
      data: JSON.stringify(bug),
      success: function(data) {
        var bug = data;
        var bugsModified = this
          .state
          .bugs
          .concat(bug);
        this.setState({bugs: bugsModified});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("Error adding bug: ", err);
      }
    })
  }
};

class BugRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Rendering BugRow:", this.props.bug);
    return (
      <tr>
        <td>{this.props.bug._id}</td>
        <td>{this.props.bug.status}</td>
        <td>{this.props.bug.priority}</td>
        <td>{this.props.bug.owner}</td>
        <td>{this.props.bug.title}</td>
      </tr>
    );
  }
};

class BugTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Rendering bug table, num items: ", this.props.bugs.length);
    var bugRows = this
      .props
      .bugs
      .map(function(bug) {
        return <BugRow key={bug._id} bug={bug}/>
      });
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Owner</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {bugRows}
        </tbody>
      </table>
    );
  }
};
