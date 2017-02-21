var bugData = [{ id: 1, priority: 'P1', status: 'Open', owner: 'Ravan', title: 'App crashes on open' }, { id: 2, priority: 'P2', status: 'New', owner: 'Eddie', title: 'Misaligned border on panel' }];

class BugList extends React.Component {
  constructor() {
    super();
    this.state = {
      bugs: bugData
    };
    this.testNewBug = this.testNewBug.bind(this);
  }
  render() {
    console.log("Rendering bug list, num items: ", this.state.bugs.length);
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        'Bug list loads in here.'
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Bug Tracker'
        ),
        React.createElement(BugFilter, null),
        React.createElement('hr', null),
        React.createElement(BugTable, { bugs: this.state.bugs }),
        ' // state accessible here',
        React.createElement(
          'button',
          { onClick: this.testNewBug },
          'Add Bug'
        ),
        React.createElement('hr', null),
        React.createElement(BugAdd, null)
      )
    );
  }

  testNewBug() {
    var nextId = this.state.bugs.length + 1;
    this.addBug({
      id: nextId,
      priority: 'P2',
      status: 'New',
      owner: 'Pieta',
      title: 'Warning on console'
    });
  }

  addBug(bug) {
    console.log("Adding bug: ", bug);
    // Make a copy of state to rewrite since its immutable
    var bugsModified = this.state.bugs.slice();
    bugsModified.push(bug);
    this.setState({ bugs: bugsModified });
  }
}

class BugRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Rendering BugRow: ", this.props.bug);
    return React.createElement(
      'tr',
      null,
      React.createElement(
        'td',
        null,
        this.props.bug.id
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.status
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.priority
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.owner
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.title
      )
    );
  }
}

class BugFilter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Rendering BugFilter");
    return React.createElement(
      'div',
      null,
      'Filter bugs in this section.'
    );
  }
}

class BugTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Rendering bug table, num items: ", this.props.bugs.length);
    var bugRows = this.props.bugs.map(function (bug) {
      return React.createElement(BugRow, { key: bug.id, bug: bug });
    });
    return React.createElement(
      'table',
      null,
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            null,
            'ID'
          ),
          React.createElement(
            'th',
            null,
            'Status'
          ),
          React.createElement(
            'th',
            null,
            'Priority'
          ),
          React.createElement(
            'th',
            null,
            'Owner'
          ),
          React.createElement(
            'th',
            null,
            'Title'
          )
        )
      ),
      React.createElement(
        'tbody',
        null,
        bugRows
      )
    );
  }
}

class BugAdd extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Rendering BugAdd");
    return React.createElement(
      'div',
      null,
      'Use this form to add a bug.'
    );
  }
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));