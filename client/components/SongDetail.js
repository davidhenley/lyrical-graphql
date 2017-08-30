import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { fetchSong } from '../queries';

class SongDetail extends Component {
  render() {
    return (
      <div>
        <h3>Song Detail</h3>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id }})
})(SongDetail);
