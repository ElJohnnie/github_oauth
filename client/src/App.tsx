import { useContext } from 'react';
import styles from './App.module.scss';
import { LoginBox } from './components/LoginBox';
import { SearchComponent } from './components/SearchComponent';

import { UserPlace } from './components/UserPlace';
import { AuthContext } from './contexts/auth';

export function App() {
  const { user } = useContext(AuthContext);
  return (
    <main className={styles.contentWrapper}>
      {!!user ? <SearchComponent></SearchComponent> : ''}
      {!!user ? <UserPlace></UserPlace> : <LoginBox></LoginBox>}
    </main>
  );
}
