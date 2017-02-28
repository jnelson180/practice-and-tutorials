var React = require('react');
var ReactDOM = require('react-dom');

module.exports = class BugFilter extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    console.log('this is: ');
    console.log(this);
    this.props.submitHandler({priority: "P1"});
  }
  render() {
    console.log("Rendering BugFilter..:");
    console.log(this.props);
    return (
      <div>
        <button onClick={this.submit}>Test Filter</button>
      </div>
    );
  }
};
