import React from 'react';
import Header from "./component/layout/header/Header";
import Footer from "./component/layout/footer/Footer";
import Content from "./component/content/Content";
import ContentWrap from "./component/content/ContentWrap";


class App extends React.Component {



    render(){
        return (
            <div>
                <Header/>
                <ContentWrap/>
                <Footer/>
            </div>
        );
    }
}

export default App;

