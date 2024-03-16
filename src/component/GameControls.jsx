import PropTypes from "prop-types";

const GameControls = ({ onClear }) => (
  <div>
    <button onClick={onClear}>Clear all fields</button>
    <hr />
  </div>
);

GameControls.propTypes = {
  onClear: PropTypes.func.isRequired,
};

export default GameControls;
