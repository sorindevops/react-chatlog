import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const filledHeart = '❤️';
const emptyHeart = '🤍';

const ChatEntry = (props) => {
  const heartOrNot = props.liked ? filledHeart : emptyHeart;
  const className = props.sender === 'Estragon' ? 'remote' : 'local';

  const handleClick = (id) => {
    props.handleLike(id);
  };
  return (
    <div className={`chat-entry ${className}`}>
      <h2 className="entry-name"> {props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{props.timeStamp}</p>
        <button className="like" onClick={() => handleClick(props.id)}>
          {heartOrNot}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
