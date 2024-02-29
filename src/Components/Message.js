import { Component } from "react";
// exaple of class component
const name = "Abdirahman"
class Message extends Component{
    render(){
        return <h1>This is class component {this.props.messageCode}</h1>
    }
}
export default Message;