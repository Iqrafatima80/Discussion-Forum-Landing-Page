import React from 'react';

const Question = ({ title, content, votes, answers, views, tags }) => {
  // Function to truncate text to a specified character limit
  const truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.substring(0, limit) + '...';
  };

  return (
    <div className="question">
      <div className="question-votes">
        <div className="votes">{votes} Votes</div>
        <div className="answers">
          {answers > 0 && <span>&#10004; </span>}
          {answers} Answers
        </div>
        <div className="views">{views} Views</div>
      </div>
      <div className="question-details">
        <h2 className="title">{truncateText(title, 55)}</h2>
        <p>{truncateText(content, 110)}</p>
        <div className="tags">
          {tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
