import Hello from './Components/Hello';
import LoginForm from './Components/Login';
import Message from './Components/Message';

function App() {
  return (
    <div className='App'>
         <Hello/>
         <Message messageCode= "100" messageContent="This is props based class component"/>
         <LoginForm/>
        
       </div>
  ); 
}

export default App;