import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { fetchSong } from '../queries';

class LyricCreate extends Component {
  state = {
    content: ''
  }

  onSubmitForm = e => {
    e.preventDefault();

    const { content } = this.state;
    const { songId } = this.props;

    this.props.mutate({
      variables: { content, songId },
      refetchQueries: [{ query: fetchSong, variables: { id: songId }}]
    }).then(() => this.setState({ content: '' }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <label>Add a Lyric</label>
        <input
          onChange={e => this.setState({ content: e.target.value })}
          value={this.state.content}
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation addLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
