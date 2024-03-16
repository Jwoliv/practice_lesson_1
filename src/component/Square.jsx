import PropTypes from "prop-types";

const Square = ({ value, onClick }) => (
  <div
    style={{
      border: "1px solid #000000",
      height: "50px",
      width: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    onClick={onClick}
  >
    {value}
  </div>
);

Square.propTypes = {
  value: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Square;
