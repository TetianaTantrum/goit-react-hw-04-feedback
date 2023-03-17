import React from 'react';
import { ButtonList, Button } from './FeedbackOptions.styled';
import {
  BsEmojiHeartEyes,
  BsEmojiNeutral,
  BsEmojiFrown,
  BsEmojiSunglasses,
} from 'react-icons/bs';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const renderEmoji = option => {
    console.log(option);
    switch (option) {
      case 'good':
        return <BsEmojiHeartEyes />;
      case 'neutral':
        return <BsEmojiNeutral />;
      case 'bad':
        return <BsEmojiFrown />;
      default:
        return <BsEmojiSunglasses />;
    }
  };
  return (
    <ButtonList>
      {options.map(option => (
        <li key={option}>
          <Button
            type="button"
            label={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
            {renderEmoji(option)}
          </Button>
        </li>
      ))}
    </ButtonList>
  );
};

export default FeedbackOptions;
