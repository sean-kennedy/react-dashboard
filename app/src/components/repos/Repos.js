import React from 'react';
import { Link } from 'react-router';

const Repos = React.createClass({
    render() {
        return(
            <div>
                <h1>Repos</h1>
                <ul>
                  <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
                  <li><Link to="/repos/facebook/react">React</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
});

export default Repos;