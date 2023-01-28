import React,{useState} from "react";




const Login =()=>{

    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // perform login logic here
    console.log(`Username: ${username}, Password: ${password}`);
    // reset form fields
    setUsername('');
    setPassword('');
  }

    return(
        <div className="form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Login</h2>
          <label className="form-label">
            <span className="label-text">Username:</span>
            <input
              className="input-field"
              type="text"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
          </label>
          <br />
          <label className="form-label">
            <span className="label-text">Password:</span>
            <input
              className="input-field"
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </label>
          <br />
          <button className="login-button" type="submit">Login</button>
        </form>
      </div>
    );
}
export default Login