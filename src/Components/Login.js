import './style.css';
function LoginForm(){
    return(
<div className='form'>
     <div className="Form-body">
    <label className="form__form1" for="LOGIN FORM">LOGIN FORM</label>
        
        <div className="email">
            <label className="form__label" for="firstName">Email:</label>
            <input type="text" name="lname" placeholder="email"></input>
        </div>
        <div className="password">
            <label className="form__label" for="firstName">password:</label>
            <input type="password" name="lname" placeholder="password"></input>
        </div><br/>
        <div className="footer">
            <button type="submit" class="btn">Login</button>
        </div>
</div>
</div>
    );
}
export default LoginForm;