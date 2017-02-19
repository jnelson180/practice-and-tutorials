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
      <div>This will be a filtered list / table of the bugs.</div>
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
