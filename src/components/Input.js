import PropTypes from "prop-types"

export const InputVeiw = (props) => {
    return (
        <input
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onchange}/>
    )

}

InputVeiw.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onchange: PropTypes.func
}