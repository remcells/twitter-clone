import React, { useState } from 'react';
import './TweetBox.css';
import axios from 'axios';

const TweetBox = () => {
  const [input, setInput] = useState([
    {
      id: '',
      content: '',
    },
  ]);
  // const handleChange = (event) => {
  //   setInput(event.target.value);
  // };

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   console.log(input);
  //   setInput('');
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(input);

    axios.post('http://localhost:3001/chika', input);
    setTimeout(location.reload(), 1000);
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <img
            className="avatar"
            src="https://pbs.twimg.com/profile_images/1151503905194483712/HuFh1yhR_bigger.jpg"
            alt="Rem"
          />

          <input
            autocomplete="off"
            name="content"
            value={input.value}
            onChange={handleChange}
            placeholder="What's happening?"
            type="text"
          />
        </div>
      </form>
      <button onClick={handleClick} className="feed-btn-tweet">
        Tweet
      </button>
    </div>
  );
};

export default TweetBox;
