import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Content from "./Content";
import * as action from '../../action/content';
import SubMenu from "./SubMenu";

const ContentWrap = ({content,contentNext,contentPrev}) => {

    return (
        <div>

          {/*  <SubMenu/>*/}
            <Content
                content={content}
                contentNext={contentNext}
                contentPrev={contentPrev}
            />
        </div>
    );
}

ContentWrap.propTypes = {};

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