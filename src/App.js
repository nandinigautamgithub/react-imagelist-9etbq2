import React from 'react';
import SearchBar from './SearchBar';
import unsplash from './api/unsplash';
import ImageList from './components/ImageList';

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    console.log('term', term);
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    console.log('here', response.data.results);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;