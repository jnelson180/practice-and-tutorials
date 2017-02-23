class BugFilter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Rendering BugFilter");
    return React.createElement(
      "div",
      null,
      "Filter bugs in this section."
    );
  }
}

class BugRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Rendering BugRow: ", this.props.bug);
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        this.props.bug.id
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.status
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.priority
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.owner
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.title
      )
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
        bugRows
      )
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
    return React.createElement(
      "div",
      null,
      React.createElement(
        "form",
        { name: "bugAdd" },
        React.createElement("input", { type: "text", name: "owner", placeholder: "Owner" }),
        React.createElement("input", { type: "text", name: "title", placeholder: "Title" }),
        React.createElement(
          "button",
          { onClick: this.handleSubmit },
          "Add Bug"
        )
      )
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
    form.owner.value = "";form.title.value = "";
  }
}

class BugList extends React.Component {
  constructor() {
    super();
    this.addBug = this.addBug.bind(this);
    this.state = {
      bugs: []
    };
  }
  render() {
    console.log("Rendering bug list, num items: ", this.state.bugs.length);
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Bug Tracker"
      ),
      React.createElement(BugFilter, null),
      React.createElement("hr", null),
      React.createElement(BugTable, { bugs: this.state.bugs }),
      React.createElement("hr", null),
      React.createElement(BugAdd, { addBug: this.addBug })
    );
  }
  componentDidMount() {
    $.ajax('/api/bugs').done(function (data) {
      var jsonData = data;
      this.setState({ bugs: jsonData });
    }.bind(this));
  }
  addBug(bug) {
    console.log("Adding bug: ", bug);
    // Make a copy of state to rewrite since its immutable
    $.ajax({
      type: 'POST', url: '/api/bugs',
      contentType: 'application/json',
      data: JSON.stringify(bug),
      success: function (data) {
        var bug = data;
        var bugsModified = this.state.bugs.concat(bug);
        this.setState({ bugs: bugsModified });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log("Error adding bug: ", err);
      }
    });
  }
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));