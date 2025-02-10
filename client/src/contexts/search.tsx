import {
  createContext,
  FormEvent,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { searchApi } from '../services/searchApi';

type SearchContextData = {
  search: string;
  setSearch: (prev: string) => void;
  handleSearch: (e: FormEvent) => void;
  user: any;
  userRepo: any;
  userStarred: any;
};

export const SearchContext = createContext({} as SearchContextData);

type SearchProvider = {
  children: ReactNode;
};

export const SearchProvider = (props: SearchProvider) => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(null);
  const [userRepo, setUserRepo] = useState(null);
  const [userStarred, setUserStarred] = useState(null);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    console.log(search);
    const userApi = await searchApi.get(`users/${search}`);
    const userReposApi = await searchApi.get(`users/${search}/repos`);
    const userStarredApi = await searchApi.get(`users/${search}/starred`);
    setUser(userApi.data);
    setUserRepo(userReposApi.data);
    setUserStarred(userStarredApi.data);
  };

  return (
    <SearchContext.Provider
      value={{ search, setSearch, handleSearch, user, userRepo, userStarred }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
