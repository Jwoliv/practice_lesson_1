import Square from "./Square.jsx";
import GameStatus from "./GameStatus.jsx";
import GameControls from "./GameControls.jsx";
import useGameLogicHook from "../hook/useGameLogicHook.jsx";

const GameField = () => {
  const { elements, result, clearAllPoints, changeElement } =
    useGameLogicHook();

  return (
    <div>
      <GameControls onClear={clearAllPoints} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "5px",
        }}
      >
        {elements.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => changeElement(index)}
          />
        ))}
      </div>
      <GameStatus result={result} />
    </div>
  );
};

export default GameField;
