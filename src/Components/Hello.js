//exmaple of functional component
const name = "abdirahman"

const DisplayMessage = () =>{
    return "i need help"
}

function welcome(){
    return (
        <h1>The message is: {DisplayMessage()}</h1>
    );

}
export default welcome;