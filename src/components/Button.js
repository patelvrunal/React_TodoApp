import PropTypes from "prop-types";
import styled from "styled-components";
import {Button as AntdButton} from "antd"

const CustomButton = styled(AntdButton)`
  color: red;
`

export const Button = (props) => {
    return (
        <CustomButton onClick={props.onClick}>{props.buttonTitle}</CustomButton>
    // <li>{props.buttonTitle}</li>
    )
}

Button.propTypes = {
    buttonTitle: PropTypes.string,
    onClick: PropTypes.func
}