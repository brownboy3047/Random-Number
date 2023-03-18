import { useState } from "react";

import "./Random.css";

const Random = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [inputNumber, setInputNumber] = useState(null);

  const getRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * `${inputNumber}`));
  };

  const handleChange = (e) => {
    setInputNumber(e.target.value);
  };

  return (
    <div className="random">
      <p>Random Number: {randomNumber}</p>
      <p>
        A random number will be generated between 0 and the number you entered
        below
      </p>
      <input
        type="text"
        onChange={handleChange}
        value={inputNumber}
        placeholder="enter number"
      />
      <button onClick={getRandomNumber} className="generate">
        Random Number
      </button>
    </div>
  );
};

export default Random;
