// TODO
var list = ['Cheese', 'Milk', 'Cucumber', 'Kale', 'Fettuccine'];

var App = () => (
  <div>
    <h1>My Grocery List</h1>
    <GroceryList list={ list } />
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.list.map(item => 
      <GroceryListItem item={ item } />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crossOut: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      crossOut: !this.state.crossOut
    });
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    // console.log('rendering');
    var style = {
      textDecoration: this.state.crossOut ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal' 
    };
    return (<li style={style} onMouseOver={this.onListItemHover.bind(this)} onMouseOut={this.onListItemHover.bind(this)} onClick={this.onListItemClick.bind(this)}>{ this.props.item }</li>);
  }
}



ReactDOM.render(<App />, document.getElementById('app'));