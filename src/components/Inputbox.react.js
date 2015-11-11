var React    = require('react');

var Inputbox = React.createClass({

  _onKeyPress: function (e) {
    var ENTER = 13;
    if (e.charCode == ENTER ) {
      this.props._onAddItem(e);
    }
  },

  _onChange: function (e) {
    this.props._onChange(e.target.value)
  },

  render: function() {
    return (
      <div className="inputbox">
        <input type="text"
               value={this.props.posted_data}
               placeholder="What do you want to build?"
               onChange={this._onChange}
               onKeyPress={this._onKeyPress}
               autofocus />
        <p>Please hit Enter after typing</p>
      </div>
    );
  }
});

module.exports = Inputbox;
