import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    inputVal: "Search your content..."
  };

  onHandleInput = e => {
    this.setState({
      inputVal: e.target.value
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.parentToChild(this.state.inputVal)
    //console.log(this.state.inputVal)
  }

  render() {
    return (
      <div style={{ width: "100%", padding: "20px", boxSizing: "border-box" }}>
        <form onSubmit = {this.onHandleSubmit}>
          <input
            type="text"
            value={this.state.inputVal}
            placeholder={this.state.inputVal}
            onChange={this.onHandleInput}
            style={{
              width: "100%",
              height: "45px",
              lineHeight: "45px",
              fontSize: "16px",
              padding: "0 10px"
            }}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
