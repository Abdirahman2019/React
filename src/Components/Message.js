import { Component } from "react";
// exaple of class component
const name = "Abdirahman"
class Message extends Component{
    render(){
        return <h1>Welcome to our service our dear {name}</h1>
    }
}
export default Message;