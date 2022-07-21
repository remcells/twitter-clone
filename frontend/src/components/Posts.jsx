import React, { useState, useEffect } from 'react';
import './Posts.css';
import comment from '../icons/comment';
import like from '../icons/like';
import retweet from '../icons/retweet';

const Posts = ({ content, id, deleteTweet }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <img
          src="https://pbs.twimg.com/profile_images/1151503905194483712/HuFh1yhR_bigger.jpg"
          alt="Rem"
        />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Remcel <span className="post__headerSpecial">@Remcells</span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p> {content}</p>
          </div>
        </div>

        <div className="post__footer">
          {comment} {retweet} {like}{' '}
          <button className="delete-button" onClick={() => deleteTweet(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
