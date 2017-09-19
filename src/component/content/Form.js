import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextField} from 'material-ui';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui';
class Form extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardTitle>
                    <TextField
                        hintText="재목"
                        fullWidth={true}
                    />
                </CardTitle>
                <CardText>
                </CardText>
            </Card>
        );
    }
}

Form.propTypes = {};

Form.defaultProps = {};

export default Form;