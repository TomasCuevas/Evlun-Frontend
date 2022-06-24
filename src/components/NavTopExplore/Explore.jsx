/**
 * @styles
 */
import { useForm } from '../../hooks/useForm';
import styles from './explore.module.scss';

export const Explore = () => {
  const { search, handleInputChange } = useForm({
    search: ''
  })

  return (
    <div className={styles.explore__search_container}>
      <form autoComplete='off'>
        <input 
          type="text" 
          className={styles.search__input} 
          name='search'
          value={ search }
          onChange={ handleInputChange }
          placeholder='Buscar en Evlun'
        />
      </form>
    </div>
  )
}