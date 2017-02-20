class BugList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <div>Bug list loads in here.</div>
      <div>
        <h1>Bug Tracker</h1>
        <BugFilter />
        <hr />
        <BugTable />
        <hr />
        <BugAdd />
      </div>
      </div>
    );
  }
}

class BugRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <tr>
      <td>{this.props.id}</td>
      <td>{this.props.status}</td>
      <td>{this.props.priority}</td>
      <td>{this.props.owner}</td>
      <td>{this.props.title}</td>
    </tr>
  );
  }
}

class BugFilter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
          <BugRow id={1} priority="P1" status="Open"owner="Ravan" title="App crashes on open" />
          <BugRow id={2} priority="P2" status="New" owner="Eddie" title="Misaligned border on panel" />
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
    return (
      <div>Use this form to add a bug.</div>
    );
  }
}

ReactDOM.render(
  <BugList />,
  document.getElementById('main')
);
