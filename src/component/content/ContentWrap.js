import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import axios from 'axios';
import Content from "./Content";
import Form from './Form';
import * as action from '../../action/content';
import SubMenu from "../layout/subMenu/SubMenu";


class ContentWrap extends Component {

    constructor(props) {
        super(props);
    }

/*    componentDidMount(){
        axios.get('http://localhost:8080/content/list/1').then(t => {
            console.log(t.data);
        });
    }*/

    render() {
        const { content, contentNext, contentPrev} = this.props;
        const ContentComp = () => (
            <Content
                content={content}
                contentNext={contentNext}
                contentPrev={contentPrev}
            />
        );
        return (
            <div>
                <Route path="/content" component={ContentComp}/>
                <Route path="/form" component={Form}/>
            </div>
        )
    }
}

ContentWrap.propTypes = {
    content : PropTypes.object
};

ContentWrap.defaultProps = {};

//컨테이너 컴포넌트에서 프레젠테이션 컴포넌트로 전달하는 state
const contentStateToProps = (state) => ({
    content : state.content
});

//컨테이너 컴포넌트에서 프레젠테이션 컴포넌트로 액션을 보내는 함수
const contentDispatchToProps = (dispatch) => ({
    contentNext : () => dispatch(action.contentNext()),
    contentPrev : () => dispatch(action.contentPrev())
});

//연결
export default connect(contentStateToProps,contentDispatchToProps)(ContentWrap);