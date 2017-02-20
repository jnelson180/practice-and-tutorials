var bugData = [
  {id: 1, priority: 'P1', status:'Open', owner:'Ravan', title:'App crashes on open'},
  {id: 2, priority: 'P2', status: 'New', owner:'Eddie', title:'Misaligned border on panel'},
];

class BugList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bugs: bugData,
    }
  }
  render() {
    console.log("Rendering bug list, num items: ", this.state.bugs.length);
    return (
      <div>
      <div>Bug list loads in here.</div>
      <div>
        <h1>Bug Tracker</h1>
        <BugFilter />
        <hr />
        <BugTable bugs={this.state.bugs}/>
        <button onClick={this.testNewBug}>Add Bug</button>
        <hr />
        <BugAdd />
      </div>
      </div>
    );
  }

  testNewBug() {
    var nextId = this.state.bugs.length + 1;
    this.addBug({
      id: nextId,
      priority: 'P2',
      status:'New',
      owner:'Pieta',
      title:'Warning on console'
    })
  }

  addBug(bug) {
    console.log("Adding bug: ", bug);
    // Make a copy of state to rewrite since its immutable
    var bugsModified = this.state.bugs.slice();
    bugsModified.push(bug);
    this.setState({bugs: bugsModified});
  }
}

class BugRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Rendering BugRow: ", this.props.bug);
    return (
    <tr>
      <td>{this.props.bug.id}</td>
      <td>{this.props.bug.status}</td>
      <td>{this.props.bug.priority}</td>
      <td>{this.props.bug.owner}</td>
      <td>{this.props.bug.title}</td>
    </tr>
  );
  }
}

class BugFilter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Rendering BugFilter");
    return (
      <div>Filter bugs in this section.</div>
    );
  }
}

class BugTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Rendering bug table, num items: ", this.props.bugs.length);
    var bugRows=this.props.bugs.map(function(bug) {
      return <BugRow key={bug.id} bug={bug} />
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
}

class BugAdd extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Rendering BugAdd");
    return (
      <div>Use this form to add a bug.</div>
    );
  }
}

ReactDOM.render(
  <BugList />,
  document.getElementById('main')
);
