import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {AppBar, IconButton, FlatButton} from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const Header = ({titleName}) => (
    <AppBar
        title="블로그 DEMO"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
)


export default Header;