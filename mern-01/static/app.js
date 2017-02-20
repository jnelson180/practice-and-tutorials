var bugData = [{ id: 1, priority: 'P1', status: 'Open', owner: 'Ravan', title: 'App crashes on open' }, { id: 2, priority: 'P2', status: 'New', owner: 'Eddie', title: 'Misaligned border on panel' }];

class BugList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bugs: bugData
    };
  }
  render() {
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
        React.createElement('hr', null),
        React.createElement(BugAdd, null)
      )
    );
  }
}

class BugRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
    return React.createElement(
      'div',
      null,
      'Use this form to add a bug.'
    );
  }
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));