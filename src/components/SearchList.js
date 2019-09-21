import React, { Component } from "react";

class SearchList extends Component {
  render() {
    //console.log(this.props);
    const list = this.props.showList.map((item, i) => {
      return <div key = {i} style={{color: 'blue', padding: '5px 0px', borderBottom: '1px solid green'  }}>{item.name}</div>;
    });
    return this.props.showList.length > 0 ? <div style = {{padding: '20px', background: 'grey', fontSize: '20px', lineHeight: '24px'}}>{list}</div> : null
  }
}

export default SearchList;
