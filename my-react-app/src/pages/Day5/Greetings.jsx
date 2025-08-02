import React, { useState } from 'react';
import { Wrapper, Message, InputBox } from './StyledComponents';

function Greetings() {
  const [name, setName] = useState('Harshada');

  const hour = new Date().getHours();
  let greeting = '';
  let color = '';

  if (hour < 12) {
    greeting = 'Good Morning';
    color = '#ff9933';
  } else if (hour < 17) {
    greeting = 'Good Afternoon';
    color = '#3399ff';
  } else {
    greeting = 'Good Evening';
    color = '#cc66ff';
  }

  return (
    <Wrapper>
      <Message color={color}>
        {greeting}, {name}! 
      </Message>
      <InputBox
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
    </Wrapper>
  );
}

export default Greetings;