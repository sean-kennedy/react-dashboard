import React from 'react';

const Repo = React.createClass({
    render() {
        return(
            <div>
                <h2>{this.props.params.repoName}</h2>
            </div>
        )
    }
});

export default Repo;