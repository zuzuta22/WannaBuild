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
        <div className="mdl-textfield mdl-js-textfield">
          <input type="text"
                 className="mdl-textfield__input"
                 id="item-textfield"
                 value={this.props.posted_data}
                 onChange={this._onChange}
                 onKeyPress={this._onKeyPress}
                 autofocus />
               <label className="mdl-textfield__label" classFor="item-textfield">Fill what do you wanna build...</label>
        </div>
      </div>
    );
  }
});

module.exports = Inputbox;
