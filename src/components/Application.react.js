var React = require('react');

var WannaItem = require('./WannaItem.react');

var Application = React.createClass({
  render: function () {
    return (
      <div>
        <WannaItem />
      </div>
    );
  }
});

module.exports = Application;
