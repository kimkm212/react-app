import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Menu,Input } from 'semantic-ui-react'

class Header extends Component {

    constructor(props) {
        super(props);
    }

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu pointing>
                <Menu.Item
                    name='editorials'
                    active={activeItem === 'editorials'}
                    onClick={this.handleItemClick}
                >
                    Editorials
                </Menu.Item>
                <Menu.Item
                    name='reviews'
                    active={activeItem === 'reviews'}
                    onClick={this.handleItemClick}
                >
                    Reviews
                </Menu.Item>
                <Menu.Item
                    name='upcomingEvents'
                    active={activeItem === 'upcomingEvents'}
                    onClick={this.handleItemClick}
                >
                    Upcoming Events
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

Header.propTypes = {

};

Header.defaultProps = {

};

export default Header;