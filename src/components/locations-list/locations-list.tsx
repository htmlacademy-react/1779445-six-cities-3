import cn from 'classnames';
import { FC, memo } from 'react';
import { CityName } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrentCity } from '../../store/slices/offers-slice/offers-selectors.ts';
import { setCity } from '../../store/slices/offers-slice/offers-slice.ts';

const LocationsList: FC = () => {
  const dispatch = useAppDispatch();
  const city = useAppSelector(getCurrentCity);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(CityName).map((value) => (
          <li className="locations__item" key={value} onClick={() => dispatch(setCity(value))}>
            <a
              className={cn('locations__item-link tabs__item', {
                'tabs__item--active': city === value,
              })}
              href="#"
            >
              <span>{value}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

const MemoizedLocationsList = memo(LocationsList);
MemoizedLocationsList.displayName = 'LocationsList';

export default MemoizedLocationsList;
