import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextField} from 'material-ui';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, RaisedButton} from 'material-ui';
import {Link} from 'react-router-dom';
class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject : '',
            content : ''
        };
    }

    sjChange (e) {
        this.setState({
            subject : e.target.value
        });
        console.log(this.state);
    }

    ctChange(e) {
        this.setState({
            content : e.target.value
        });
        console.log(this.state);
    }


    render() {
        return (
            <Card>
                <CardTitle>
                    <TextField
                        hintText="제목"
                        fullWidth={true}
                        floatingLabelText="제목"
                        value={this.state.subject}
                        onChange={this.sjChange.bind(this)}
                    />
                </CardTitle>
                <CardText>
                    <TextField
                        hintText="내용"
                        floatingLabelText="내용"
                        multiLine={true}
                        rows={40}
                        fullWidth={true}
                        value={this.state.content}
                        onChange={this.ctChange.bind(this)}
                    />
                </CardText>
                <CardActions>
                    <RaisedButton label="등록" primary={true} />
                    <Link to="/content"><RaisedButton label="취소" secondary={true} /></Link>
                </CardActions>
            </Card>
        );
    }
}

Form.propTypes = {};

Form.defaultProps = {};

export default Form;