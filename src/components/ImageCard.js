import React from 'react';

class Imagecard extends React.Components {
  render() {
    return (
      <div>
        <img
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        />
      </div>
    );
  }
}
export default ImageCard;
