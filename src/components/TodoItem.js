import PropTypes from "prop-types";
// import styled from "styled-components";

// const CustomList = styled.li`
//   color: blue;
// `

export const TodoItem = (props) => {
    return (
        <li>{props.value}</li>
    )
}

TodoItem.propTypes = {
    value: PropTypes.string
}