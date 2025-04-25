import {SortType} from '../../const.ts';
import {useState} from 'react';
import { useAppSelector} from '../../hooks';

type SortingOptionsProps = {
  onSortChange: (sortType: SortType) => void;
};

export default function SortingOptions({onSortChange}: SortingOptionsProps) {
  const [isActive, setIsActive] = useState(false);
  const selectedSortType = useAppSelector((state) => state.sort);

  const toggleActive = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleSortTypeChange = (sortType: SortType) => {
    onSortChange(sortType);
    setIsActive(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption" onClick={toggleActive}>Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleActive}>
        {selectedSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isActive ? 'places__options--opened' : '' }`}>
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
