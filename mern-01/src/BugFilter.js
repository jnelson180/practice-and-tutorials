var React = require('react');
var ReactDOM = require('react-dom');

module.exports = class BugFilter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Rendering BugFilter..:");
    return (
      <div>Filter bugs in this section.</div>
    );
  }
};
