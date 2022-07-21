import React from 'react';
import './Widget.css';

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <p>Trending in Philippines</p>
        <div className="trends">
          <div className="trending">
            <h4>Fake News</h4>
            <p>43,000 Tweets</p>
          </div>
          <div className="trending">
            <h4>Adobo</h4>
            <p>40,000 Tweets</p>
          </div>
          <div className="trending">
            <h4>Apples</h4>
            <p>20,000 Tweets</p>
          </div>
          <div className="trending">
            <h4>Janno Lang</h4>
            <p>8,000 Tweets</p>
          </div>
          <div className="trending">
            <h4>JANNO GIBBS</h4>
            <p>4,500 Tweets</p>
          </div>
          <div className="trending">
            <h4>Cong Tv</h4>
            <p>4,000 Tweets</p>
          </div>
          <div className="trending">
            <h4>Foobar</h4>
            <p>3,000 Tweets</p>
          </div>
          <div className="trending">
            <h4>Justin Bieber</h4>
            <p>4 Tweets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
