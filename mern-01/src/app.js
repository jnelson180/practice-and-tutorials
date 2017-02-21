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
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    console.log("Rendering BugAdd");
    console.log(this.props);
    return (
      <div>
        <form name="bugAdd">
          <input type="text" name="owner" placeholder="Owner" />
          <input type="text" name="title" placeholder="Title" />
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
    this.props.addBug({
      owner: form.owner.value,
      title: form.title.value,
      status: 'New',
      priority: 'P1'
    });
    // clear form for next input
    form.owner.value = ""; form.title.value = "";
  }
}

var bugData = [
  {id: 1, priority: 'P1', status:'Open', owner:'Ravan', title:'App crashes on open'},
  {id: 2, priority: 'P2', status: 'New', owner:'Eddie', title:'Misaligned border on panel'},
];

class BugList extends React.Component {
  constructor() {
    super();
    this.addBug = this.addBug.bind(this);
    this.state = {
      bugs: bugData,
    }
  }
  render() {
    console.log("Rendering bug list, num items: ", this.state.bugs.length);
    return (
      <div>
        <h1>Bug Tracker</h1>
        <BugFilter />
        <hr />
        <BugTable bugs={this.state.bugs}/>
        <hr />
        <BugAdd addBug={this.addBug} />
      </div>
    );
  }

  addBug(bug) {
    console.log("Adding bug: ", bug);
    // Make a copy of state to rewrite since its immutable
    var bugsModified = this.state.bugs.slice();
    bug.id = this.state.bugs.length + 1;
    bugsModified.push(bug);
    this.setState({bugs: bugsModified});
  }
}

ReactDOM.render(
  <BugList />,
  document.getElementById('main')
);
