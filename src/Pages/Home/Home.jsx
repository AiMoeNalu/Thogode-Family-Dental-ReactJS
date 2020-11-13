import './Home.scss';
import { React, Component } from 'react';

class HomePage extends Component {
    render(){
        return(
            <div className="page">
                <div className="header developing-border">
                    HEADER
                </div>
                <div className="content developing-border">
                    CONTENT
                </div>
                <div className="footer developing-border">
                    FOOTER
                </div>
            </div>
        )
    }
};

export default HomePage;
