import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import SearchList from './SearchList';

class App extends Component {

  state = {
    ShowSearchContent: [],
  }


searchContent =  async (newText) => {
  const response = await axios.get("https://demo.dataverse.org/api/search", {
    params: {
      q: newText
    }
  })

  this.setState({
    ShowSearchContent: response.data.data.items
  })

}


  render() {
    return (
      <div>
        <SearchBar parentToChild = {this.searchContent} />
        <SearchList showList = {this.state.ShowSearchContent} />
      </div>
    )
  }
}

export default App
