import React, { Component } from 'react';
import Post from './Post';
import urls from './instagramPosts';

class PostsList extends Component {

    renderRows(){
        let rows = [];
        let postsList = [];
        urls.forEach((url, index) => {
            rows.push(<Post key={index} url={url} />);

            if((index+1) % 4 == 0){
                postsList.push(<div key={index} className="row row--no-gutters">{rows}</div>);
                rows = [];
            }
        });
        return postsList;
    }

    render(){
        return(
            <div className="col">
                {this.renderRows()}
            </div>
        )
    }
}

export default PostsList

