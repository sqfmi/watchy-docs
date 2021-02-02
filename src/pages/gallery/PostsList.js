import React, { Component } from 'react';
import Post from './Post';

class PostsList extends Component {

    renderRows(){
        let rows = [];
        let posts = [];
        this.props.posts.forEach((post, index) => {
            rows.push(<Post key={index} url={post} />);

            if((index+1) % 3 == 0){
                posts.push(<div key={index} className="row row--no-gutters">{rows}</div>);
                rows = [];
            }
        });
        return posts;
    }

    render(){
        return(
            <div className="col col--6">
                {this.renderRows()}
            </div>
        )
    }
}

export default PostsList

