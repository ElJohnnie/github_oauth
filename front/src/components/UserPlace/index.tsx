import { useContext, useState, FormEvent } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';

import styles from './styles.module.scss';

export function UserPlace() {
  const { user, signOut } = useContext(AuthContext);
  return (
    <div className={styles.userPlaceWrapper}>
      <button onClick={signOut} className={styles.signOutButton}>
        <VscSignOut size={32}></VscSignOut>
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImg}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size={16}></VscGithubInverted>
          {user?.login}
        </span>
      </header>
    </div>
  );
}
