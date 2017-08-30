import React, { Component } from 'react';

class LyricList extends Component {
  renderLyrics() {
    return this.props.lyrics.map(lyric => (
      <li className="collection-item" key={lyric.id}>
        {lyric.content}
      </li>
    ));
  }

  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

export default LyricList;
