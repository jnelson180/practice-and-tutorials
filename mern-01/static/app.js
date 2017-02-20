class BugList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        "Bug list loads in here."
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Bug Tracker"
        ),
        React.createElement(BugFilter, null),
        React.createElement("hr", null),
        React.createElement(BugTable, null),
        React.createElement("hr", null),
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
      "tr",
      null,
      React.createElement(
        "td",
        null,
        this.props.id
      ),
      React.createElement(
        "td",
        null,
        this.props.status
      ),
      React.createElement(
        "td",
        null,
        this.props.priority
      ),
      React.createElement(
        "td",
        null,
        this.props.owner
      ),
      React.createElement(
        "td",
        null,
        this.props.title
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
      "div",
      null,
      "Filter bugs in this section."
    );
  }
}

class BugTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(
      "table",
      null,
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "ID"
          ),
          React.createElement(
            "th",
            null,
            "Status"
          ),
          React.createElement(
            "th",
            null,
            "Priority"
          ),
          React.createElement(
            "th",
            null,
            "Owner"
          ),
          React.createElement(
            "th",
            null,
            "Title"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        React.createElement(BugRow, { id: 1, priority: "P1", status: "Open", owner: "Ravan", title: "App crashes on open" }),
        React.createElement(BugRow, { id: 2, priority: "P2", status: "New", owner: "Eddie", title: "Misaligned border on panel" })
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
      "div",
      null,
      "Use this form to add a bug."
    );
  }
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));