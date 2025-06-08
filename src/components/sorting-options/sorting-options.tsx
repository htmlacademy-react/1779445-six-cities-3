import { useState } from 'react';
import { SortType } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrentSort } from '../../store/slices/offers-slice/offers-selectors.ts';
import { setSort } from '../../store/slices/offers-slice/offers-slice.ts';

export default function SortingOptions() {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useAppDispatch();
  const selectedSortType = useAppSelector(getCurrentSort);

  const toggleActive = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleSortTypeChange = (sortType: SortType) => {
    dispatch(setSort(sortType));
    setIsActive(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption" onClick={toggleActive}>
        Sort by{' '}
      </span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleActive}>
        {selectedSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isActive ? 'places__options--opened' : ''}`}
      >
        {Object.values(SortType).map((sortType) => (
          <li
            key={sortType}
            className={`places__option ${selectedSortType === String(sortType) ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleSortTypeChange(sortType)}
          >
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
}
