var React = require('react')
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Redirect = require('react-router').Redirect;
var BugList = require('./BugList');
var HashRoute = require('react-router-dom').HashRouter;

var NoMatch = React.createClass({
  render: function() {
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url(http://jnelson180.github.io/misc/cat-404.jpg)';
    body.style.backgroundSize = 'cover';
    return (
      <div>
        <h1>404</h1>
        <h3>File not found-- please check your URL and try again!</h3>
      </div>
    );
  }
});

ReactDOM.render(
  (
    <HashRoute>
    <div>
      <Route path="/bugs" component={BugList} />
      <Redirect from="/" to="/bugs" />
      <Route path="*" component={NoMatch} />
    </div>
    </HashRoute>
  ),
  document.getElementById('main')
);
