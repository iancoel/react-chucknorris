import React from 'react';
import Joke from './Joke';
import { DivCategories } from './Components/DivCategories.style';

const Categories = () => {
  const [joke, setJoke] = React.useState(null);

  let categorie;

  function handleFetch() {
    if (!categorie) {
      fetch('http://api.icndb.com/jokes/random')
        .then((r) => r.json())
        .then((json) => setJoke(json));
    } else {
      fetch(`http://api.icndb.com/jokes/random?limitTo=${categorie}`)
        .then((r) => r.json())
        .then((json) => setJoke(json));
    }
  }

  function handleCategorie({ target }) {
    const text = target.innerText;
    if (text === 'Nerdy') return (categorie = ['nerdy']);
    if (text === 'Explicit') return (categorie = ['explicit']);
    return (categorie = ['nerdy', 'explicit']);
  }

  return (
    <DivCategories>
      <div>
        <div>
          <span>Categories:</span>
          <button onClick={handleCategorie}>Nerdy</button>
          <button onClick={handleCategorie}>Explicit</button>
          <button onClick={handleCategorie}>Both</button>
        </div>
        <button onClick={handleFetch}>Fetch</button>
      </div>
      <Joke joke={joke} />
    </DivCategories>
  );
};

export default Categories;
