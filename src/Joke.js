import React from 'react';

const Joke = ({ joke }) => {
  if (!joke) {
    return (
      <div>
        <p>
          Chuck Norris solved the Travelling Salesman problem in O(1) time.
          Here's the pseudo-code: Break salesman into N pieces. Kick each piece
          to a different city.
        </p>
      </div>
    );
  } else {
    return <p>{joke.value.joke}</p>;
  }
};

export default Joke;
