import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
function LoginForm(): JSX.Element {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you can handle the login logic, e.g., send data to an API
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Name:', name);
        // Reset form fields
        setEmail('');
        setPassword('');
        setName('');
    };

    return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px', border: '1px solid #aaa', padding: '20px' }}>
      <h3>Login Form</h3>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          style={{ marginLeft: '10px' }}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          style={{ marginLeft: '10px' }}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Name:</label>
        <input 
        type="text"
        value = {name}
        onChange={handleNameChange}
        required
        style={{marginLeft: '10px' }} />
      </div>

      <button type="submit" style={{ marginTop: '15px' }}>Login</button>
    </form>
  );

}; 

export default LoginForm;