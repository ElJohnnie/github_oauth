import { useContext, useState, FormEvent } from 'react';
import { SearchContext } from '../../contexts/search';

import styles from './styles.module.scss';

export function SearchForm() {
  const { search, setSearch, handleSearch } = useContext(SearchContext);
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSearch} className={styles.formWrapper__form}>
        <input
          className={styles.form__input}
          type='text'
          name='search'
          placeholder='Pesquise um usuário'
          onChange={(event) => setSearch(event.target.value)}
          value={search}
        />
        <button className={styles.form__button} type='submit'>
          Pesquisar usuário
        </button>
      </form>
    </div>
  );
}
