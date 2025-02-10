import { useContext } from 'react';
import styles from './styles.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';
import { SearchContext } from '../../contexts/search';

export function SearchedUserRepos() {
  const { userRepo } = useContext(SearchContext);
  console.log(userRepo);
  return (
    <div className={styles.searchedReposWrapper}>
      {userRepo?.map((element: any) => {
        console.log(element);
        return (
          <a target='_blank' href={element?.html_url}>
            <div className={styles.searchedReposWrapper__repoBox}>
              <span className={styles.userGithub}>
                <VscGithubInverted size={46}></VscGithubInverted>
              </span>
              <p>{element?.name}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
