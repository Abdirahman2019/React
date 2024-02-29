import React, { Component } from 'react';
class Profile extends Component {
state = {
    count: 1,
    tags: []
};
renderTags() {
    if (this.state.tags.length === 0) return <p>There is no Tags!!</p>;

    return <ul>{this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}</ul>
}
render(){
    return(
        <div>
            {this.renderTags()}
            </div>
    );
    
}

}
export default Profile;
