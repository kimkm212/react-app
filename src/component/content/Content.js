import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {FlatButton, RaisedButton, Divider} from 'material-ui';
import './Content.css';

const Content = ({content, contentNext, contentPrev}) => {

    return (
        <Card>
{/*            <CardHeader
                title="제목제목제목제목"
                subtitle="서브타이틀서브타이틀"
            />*/}
            <CardActions>
                <RaisedButton label="이전" primary={true} onClick={contentPrev}/>
                <RaisedButton label="다음" primary={true} onClick={contentNext}/>
            </CardActions>
            <CardTitle title={content.subject} subtitle={content.regDate} />
            <Divider />
            <CardText className="content-area">
                {content.content}
            </CardText>
        </Card>
    )
};

Content.propTypes = {};

Content.defaultProps = {};

export default Content;