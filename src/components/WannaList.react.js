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
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <tbody>
            {
              this.props.wannaItems.map(function(e,i){
                return (
                    <tr key={i}>
                      <td className="mdl-data-table__cell--non-numeric">
                        {e.title}
                      </td>
                      <td>{e.status}</td>
                      <td>
                        <i className="material-icons" onClick={this.getItemDone.bind(this,i)}>done</i>
                      </td>
                      <td>
                        <i className="material-icons" onClick={this.getItemUninterested.bind(this, i)}>thumb_down</i>
                      </td>
                    </tr>
                )
              }, this)
            }
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = WannaList;
