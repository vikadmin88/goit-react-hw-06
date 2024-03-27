import css from './SearchBox.module.css'

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchBox}>
      <label className={css.label}>Find contacts by name
        <input className={css.field} type="text"
          name="name"
          value={value}
          onChange={e => { onFilter(e.target.value) }}
        />
      </label>
    </div>
  )
}

export default SearchBox