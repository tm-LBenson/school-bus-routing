import styles from './page.module.css';
import Auth from '@/app/Auth';
import store from './store';
export default function Home() {
  {
    console.log(store.getState().authSlice);
  }
  const { isloggedIn, user, error } = store.getState().authSlice;
  return (
  <main className={styles.main}>
    {isloggedIn && <Auth />}
    {!isloggedIn && <Auth/>}
  </main>)
}
