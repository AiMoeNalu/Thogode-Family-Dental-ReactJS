import './Home.scss';
import { React, Component } from 'react';

class HomePage extends Component {
    render(){
        return(
            <div className="page">
                <div className="header">
                    HEADER
                </div>
                <div className="content">
                    CONTENT
                </div>
                <div className="footer">
                    FOOTER
                </div>
            </div>
        )
    }
};

export default HomePage;
