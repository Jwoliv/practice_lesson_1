import PropTypes from "prop-types";

const GameStatus = ({ result }) => <h4>{result}</h4>;

GameStatus.propTypes = {
    result: PropTypes.string.isRequired,
};

export default GameStatus;