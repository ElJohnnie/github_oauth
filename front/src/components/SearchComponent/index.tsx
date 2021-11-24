import { useContext } from 'react';
import { SearchContext } from '../../contexts/search';
import styles from './styles.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { SearchForm } from '../SearchForm';
import { SearchedUser } from '../SearchedUser';
import { SearchedUserRepos } from '../SearchedUserRepos';
import { SearchedUserStarred } from '../SearchedUserStarred';

export function SearchComponent() {
  const { user } = useContext(SearchContext);
  return (
    <div className={styles.searchComponentWrapper}>
      <SearchForm></SearchForm>
      <Router>
        {!!user ? (
          <div className={styles.searchComponentWrapper__navbar}>
            <NavLink
              className={styles.navbar__navlink}
              to='/repos'
              activeClassName={styles.navlink__selected}
            >
              Repositórios
            </NavLink>
            <NavLink
              className={styles.navbar__navlink}
              to='/starred'
              activeClassName={styles.navlink__selected}
            >
              Favoritos
            </NavLink>
          </div>
        ) : (
          ''
        )}
        {!!user ? (
          <>
            <SearchedUser />
            <Switch>
              <Route path='/repos'>
                <SearchedUserRepos />
              </Route>
              <Route path='/starred'>
                <SearchedUserStarred />
              </Route>
            </Switch>
          </>
        ) : (
          ''
        )}
      </Router>
    </div>
  );
}
