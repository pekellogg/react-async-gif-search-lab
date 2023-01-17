import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

class GifListContainer extends Component {

  state = {
    gifs: [],
  };

  componentDidMount() {
    this.fetchGIFs();
  };

  fetchGIFs = ( query = "dolphins" ) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=GTEGxkTWjLEXDxmlS1JKYTwAn5gQnGa1&rating=g&limit=3`)
      .then((response) => response.json())
      .then(({ data }) => {
        this.setState({ gifs: data.map((gif) => { 
          return { url: gif.images.original.url }
        })
      });
    });
  };

  render() {
    return (
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  };
  
};

export default GifListContainer;