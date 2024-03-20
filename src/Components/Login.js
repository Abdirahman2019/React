import './style.css';
function Login(){
    return(
<div className='form1'>
     <div className="Form-body">
    <label for="LOGIN FORM">LOGIN FORM</label>
        
        <div className="email">
            <label for="firstName">Email:</label>
            <input type="text" name="lname" placeholder="email"></input>
        </div>
        <div className="password">
            <label  for="firstName">password:</label>
            <input type="password" name="lname" placeholder="password"></input>
        </div><br/>
        <div className="footer">
            <button type="submit" class="btn">Login</button>
        </div>
</div>
</div>
    );
}
export default Login;