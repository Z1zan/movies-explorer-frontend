import './SearchForm.css';

function SearchForm() {
  return(
    <div className='searchForm'>
      <div className='searchForm__container'>
        <input className='searchForm__input' placeholder='Фильм' />
        <div className='searchForm__buttons'>
          <button className='searchForm__search-btn' type='button' />
          <div className='searchForm__checkBox-container'>
            <label className='searchForm__checkBox'>
              <input className='checkBox__input' type='checkbox' />
              <p className='checkBox__description'>Короткометражки</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SearchForm;
