import { useState } from "react";

const useGameLogicHook = () => {
  const [elements, setElements] = useState(Array(9).fill(null));
  const [currentState, setCurrentState] = useState("X");
  const [result, setResult] = useState("");

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const CHAR_X = "X";
  const CHAR_O = "O";

  const changeElement = (index) => {
    if (elements[index] === null && !result) {
      const updatedElements = [...elements];
      updatedElements[index] = currentState;
      setElements(updatedElements);
      const winner = checkWinner(updatedElements);
      if (winner) {
        setResult(`Winner: ${winner}`);
      } else if (updatedElements.every((x) => x !== null)) {
        setResult("Draw");
      } else {
        setCurrentState(determineCurrentStep());
      }
    }
  };

  const checkWinner = (elements) => {
    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (
        elements[a] &&
        elements[a] === elements[b] &&
        elements[a] === elements[c]
      ) {
        return elements[a];
      }
    }
    return null;
  };

  const determineCurrentStep = () =>
    currentState === CHAR_X ? CHAR_O : CHAR_X;

  const clearAllPoints = () => {
    setElements(Array(9).fill(null));
    setCurrentState(CHAR_X);
    setResult("");
  };

  return {
    elements,
    result,
    clearAllPoints,
    changeElement,
  };
};

export default useGameLogicHook;
