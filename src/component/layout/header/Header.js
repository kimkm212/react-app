import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {AppBar, IconButton, FlatButton} from 'material-ui';
import { connect } from 'react-redux';

const Header = ({titleName}) => (
    <AppBar
        title={titleName}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
)

const stateToProps = (state) => ({
    titleName : state.content.subject
});

export default connect(stateToProps,null)(Header);