import React,{useState} from "react";




const Register =()=>{

    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // perform Register logic here
    console.log(`Username: ${username}, Password: ${password}`);
    // reset form fields
    setUsername('');
    setPassword('');
  }

    return(
        <div className="form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Register</h2>
          <label className="form-label">
            <span className="label-text">Fullname:</span>
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
          <br/>
          <label className="form-label">
            <span className="label-text">Username:</span>
            <input
              className="input-field"
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </label>
          <br />
          <button className="login-button" type="submit">Register</button>
        </form>
      </div>
    );
}
export default Register