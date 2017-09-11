import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Content from "./Content";
import SubMenu from "./SubMenu";
import {Grid, Container} from 'semantic-ui-react'

class ContentWrap extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Container textAlign='justified'>
                <SubMenu/>
                <Content/>
            </Container>
        );
    }
}

ContentWrap.propTypes = {};

ContentWrap.defaultProps = {};

export default ContentWrap;