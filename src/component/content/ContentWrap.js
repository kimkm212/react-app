import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Content from "./Content";
import SubMenu from "./SubMenu";

class ContentWrap extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

              {/*  <SubMenu/>*/}
                <Content/>
            </div>
        );
    }
}

ContentWrap.propTypes = {};

ContentWrap.defaultProps = {};

export default ContentWrap;