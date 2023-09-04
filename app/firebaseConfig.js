import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDYZKujjByiESNTKGOlvewHWjtlsyiLpx0',
  authDomain: 'bus-routes-1c7da.firebaseapp.com',
  projectId: 'bus-routes-1c7da',
  storageBucket: 'bus-routes-1c7da.appspot.com',
  messagingSenderId: '829477148266',
  appId: '1:829477148266:web:59155ea97847c21dc11c13',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
