var React = require('react');

var WannaList = React.createClass({
  getItemDone: function (i) {
    this.props._getItemDone(i);
  },

  getItemUninterested: function (i) {
    this.props._getItemUninterested(i);
  },

  render: function () {
    return (
      <div className="wannaBuild">
        <ul>
          {
            this.props.wannaItems.map(function(e,i){
              return (
                <div key={i}>
                  <li>
                    {e.title} # {e.status} &nbsp;
                    <span onClick={this.getItemDone.bind(this,i)}>Done</span>
                    <span onClick={this.getItemUninterested.bind(this, i)}>Uninterested</span>
                  </li>
                </div>
              )
            }, this)
          }
        </ul>
      </div>
    );
  }
});

module.exports = WannaList;
