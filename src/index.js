import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './App';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';


class Main extends React.Component {
    render() {
        return (
            <div className = "wrapper">
                <div className = "inner">
                    <Navigation />
                </div>
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();