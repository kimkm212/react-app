import React from 'react';
import {Route} from 'react-router-dom'
import Header from "./component/layout/header/Header";
import Footer from "./component/layout/footer/Footer";
import Content from "./component/content/Content";
import ContentWrap from "./component/content/ContentWrap";
import SubMenu from "./component/layout/subMenu/SubMenu";


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <Header titleName="하하"/>
                <ContentWrap/>
                <Footer/>
            </div>
        );
    }
}

export default App;

