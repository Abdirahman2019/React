import React from 'react'

class Test2 extends React.Component {
    constructor (){
        super();
        this.state = { dispplayBio : true }
    }
    render(){
        const bio = this.state.dispplayBio ?(
            <div>
                <h1>
                    welcome to stateful component
                </h1>
            </div>
        ): null;
        return (
            <div>
              <h2>This is </h2>
              {bio}
            </div>
          );

    } 
}
/*class first extends React.Component{
    render(){
        return(
            <h3>Sudents Details</h3>
        );
    }
}*/

export default Test2
