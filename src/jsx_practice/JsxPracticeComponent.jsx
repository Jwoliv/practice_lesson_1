import PropTypes from "prop-types";

const JsxPracticeComponent = ({ type, typeElement }) => {
  if (typeElement === "type_element") {
    const Tag = FormElements[type];
    return <Tag />;
  } else if (typeElement === "several_elements") {
    const elements = Array(3).fill(20);
    const child = elements.map((value, index) => (
      <div key={index}>{value}</div>
    ));
    return <>{child}</>;
  }
};

const FormElements = {
  Input() {
    return <input />;
  },
  Button() {
    return <button>Example of the button</button>;
  },
};

JsxPracticeComponent.propTypes = {
  type: PropTypes.string,
  typeElement: PropTypes.string,
};

export default JsxPracticeComponent;
