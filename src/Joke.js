import React from 'react';
import { JokeStyle } from './Components/Joke.style';

const Joke = ({ joke }) => {
  if (!joke) {
    return (
      <JokeStyle>
        <p>
          Chuck Norris solved the Travelling Salesman problem in O(1) time.
          Here's the pseudo-code: Break salesman into N pieces. Kick each piece
          to a different city.
        </p>
      </JokeStyle>
    );
  } else {
    return (
      <JokeStyle>
        <p>{joke.value.joke}</p>
      </JokeStyle>
    );
  }
};

export default Joke;
