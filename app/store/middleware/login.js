import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
const loginMiddleware = (store) => (next) => async (action) => {
  /*
   * Redux Middleware used for authenticating users to firebase
   */
  if (action.type !== 'auth/login') {
    return next(action);
  }

  const { email, password } = action.payload;
  console.log(email, password, 'middleware');
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    action.payload = { response: response.user.email };
  } catch (error) {
    action.payload = { error };
    next(action);
  }

  next(action);
};
export default loginMiddleware;
