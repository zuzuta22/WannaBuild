var React = require('react');

var Inputbox  = require('./Inputbox.react');
var WannaList = require('./WannaList.react');

var WannaItem = React.createClass({

  getInitialState: function () {
    return {
      posted_data: "",
      items: []
        // title: "", status: ""
        // status: {0: active, 1: done, 9: uninterested}
    }
  },

  _onAddItem: function(e) {
    var posted_data = this.state.posted_data;
    var items = this.state.items;
    // console.log(posted_data);

    items.push({title: e.target.value, status: 0});
    this.setState({
       posted_data: "",
       items: items
    });
  },

  _onChange: function(value) {
    this.setState({posted_data: value});
    // console.log(value + " in _onChange");
  },

  _getItemDone: function(index) {
    var item = this.state.items[index];
    item.status = 1;
    this.setState({
      item: item
    });
  },

  _getItemUninterested: function(index) {
    var item = this.state.items[index];
    item.status = 9;
    this.setState({
      item: item
    });
  },

  render: function () {
    return (
      <div className="WannaItem">
        <Inputbox posted_data={this.state.posted_data}
                  _onChange={this._onChange}
                  _onAddItem={this._onAddItem} />
        <WannaList wannaItems={this.state.items}
                   _getItemDone={this._getItemDone}
                   _getItemUninterested={this._getItemUninterested} />
      </div>
    );
  }
});

module.exports = WannaItem;
