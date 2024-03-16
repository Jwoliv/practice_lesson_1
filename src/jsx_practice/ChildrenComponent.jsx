import PropTypes from "prop-types";

const ChildrenComponent = ({children}) => {
    return <div>{children}</div>
}

ChildrenComponent.propTypes = {
    children: PropTypes.any
}

export default ChildrenComponent;