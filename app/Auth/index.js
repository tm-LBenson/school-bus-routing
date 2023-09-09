import store from '../store';
import { login } from '../store/authSlice';

export default function Login() {
  async function handleLogin(formData) {
    'use server';
    const email = formData.get('email');
    const password = formData.get('password');
    store.dispatch(login({ email, password }));
  }
  
  return (
    <form action={handleLogin}>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
