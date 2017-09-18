import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextField} from 'material-ui';
class Form extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TextField
                    hintText="재목"
                    fullWidth={true}
                />
            </div>
        );
    }
}

Form.propTypes = {};

Form.defaultProps = {};

export default Form;