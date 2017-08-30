import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import fetchSongs from '../queries/fetchSongs';
import { Link, hashHistory } from 'react-router';

class SongCreate extends Component {
  state = {
    title: ''
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { title } = this.state;

    this.props.mutate({
      variables: { title },
      refetchQueries: [{ query: fetchSongs }]
    }).then(() => hashHistory.push('/'));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmitForm}>
          <label>Song Title:</label>
          <input
            onChange={e => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
