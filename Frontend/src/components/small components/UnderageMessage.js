import React from 'react';
import '../../style/component-style/UnderageMessage.css'; // Import the message styles

const UnderageMessage = () => {
  return (
    <div className="underage-message">
      <h2>You didn't reach 18 years old. Come back when you are older.</h2>
    </div>
  );
};

export default UnderageMessage;
