import React, { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Posts from '../Posts';
import axios from 'axios';

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  const fetchAllTweets = async () => {
    const { data } = await axios.get('http://localhost:3001/chika');

    setTweets(data);
  };

  useEffect(() => {
    fetchAllTweets();
  }, []);

  const deleteTweet = (id) => {
    axios.delete(`http://localhost:3001/chika/` + id);
    setTimeout(location.reload(), 1000);
  };

  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
        <TweetBox />

        <section>
          {tweets.map((tweetsnew) => (
            <Posts
              key={tweetsnew._id}
              id={tweetsnew._id}
              content={tweetsnew.content}
              date={tweetsnew.date}
              deleteTweet={deleteTweet}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Feed;
