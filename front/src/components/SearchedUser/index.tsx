import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { SearchContext } from '../../contexts/search';

import styles from './styles.module.scss';

export function SearchedUser() {
  const { user } = useContext(SearchContext);
  return (
    <div className={styles.userWrapper}>
      <div className={styles.userWrapper__information}>
        <div className={styles.information__userImg}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className={styles.information__userName}>{user?.name}</strong>
        <span className={styles.information__userGithub}>
          <VscGithubInverted size={16}></VscGithubInverted>
          {user?.login}
        </span>
        <div className={styles.information__connect}>
          <p className={styles.connect__follow}>
            Seguidores: {user?.followers}
          </p>
          <p className={styles.connect__follow}>Seguindo: {user?.following}</p>
        </div>
      </div>
    </div>
  );
}
