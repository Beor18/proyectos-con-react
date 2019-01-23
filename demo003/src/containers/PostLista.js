import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { borrarNota } from '../actions';

function PostLista({ posts, onDelete }) {
  return (
    <div>
      {posts.map(post => {
        return (
          <Post post={ post } onDelete={ onDelete } key={ post.id } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(borrarNota(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostLista);