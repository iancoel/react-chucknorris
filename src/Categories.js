import React from 'react';
import Joke from './Joke';
import { DivCategories } from './Components/DivCategories.style';

const Categories = () => {
  const [joke, setJoke] = React.useState(null);

  let categorie;

  async function handleFetch() {
    if (!categorie) {
      const response = await fetch('http://api.icndb.com/jokes/random');
      const json = await response.json();
      setJoke(json);
    } else {
      const response = await fetch(
        `http://api.icndb.com/jokes/random?limitTo=${categorie}`,
      );
      const json = await response.json();
      setJoke(json);
    }
  }

  function handleCategorie({ target }) {
    const text = target.innerText;
    if (text === 'Nerdy') return (categorie = ['nerdy']);
    if (text === 'Explicit') return (categorie = ['explicit']);
    toggleButtonsColors(target);
    return (categorie = ['nerdy', 'explicit']);
  }

  function toggleButtonsColors(target) {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach((button) => button.classList.remove('active'));
    target.classList.add('active');
  }

  return (
    <DivCategories>
      <div>
        <div className={'buttons'}>
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
