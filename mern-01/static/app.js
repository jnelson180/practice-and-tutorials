class BugList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'div',
      null,
      'Placeholder text'
    );
  }
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));