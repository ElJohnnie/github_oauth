import { useContext } from 'react';
import styles from './styles.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';
import { SearchContext } from '../../contexts/search';

export function SearchedUserStarred() {
  const { userStarred } = useContext(SearchContext);
  console.log(userStarred);
  return (
    <div className={styles.searchedStarredWrapper}>
      {userStarred?.map((element: any) => {
        console.log(element);
        return (
          <a target='_blank' href={element?.html_url}>
            <div className={styles.searchedStarredWrapper__repoBox}>
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
