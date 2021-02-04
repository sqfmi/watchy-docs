import React, { Component } from 'react';

class Post extends Component {
    render(){
        return(
            <div className="col col--3">
                <center>
                <blockquote className="instagram-media" data-instgrm-permalink={this.props.url} data-instgrm-version="13"></blockquote>
                </center>
            </div>
        )
    }
}

export default Post; // Don’t forget to use export default!