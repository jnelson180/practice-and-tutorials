class BugList extends React.Component {
  constructor(props) {
    super(props);
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
        React.createElement(BugTable, null),
        React.createElement('hr', null),
        React.createElement(BugAdd, null)
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
    return React.createElement(
      'div',
      null,
      'This will be a filtered list / table of the bugs.'
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