import { CityName } from '../../const';
import { MouseEvent } from 'react';
import cn from 'classnames';
import {setCity} from '../../store/slices/offers-slice/offers-slice.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getCurrentCity} from '../../store/slices/offers-slice/offers-selectors.ts';


export default function LocationsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const city = useAppSelector(getCurrentCity);
  const handleCityChange = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    dispatch(setCity((evt.currentTarget.innerText as CityName)));
  };

  return (
    <section className='locations container'>
      <ul className='locations__list tabs__list'>
        {Object.entries(CityName).map(([key, value]: [string, CityName]) => (
          <li className='locations__item' key={key} onClick={handleCityChange}>
            <a className={cn(
              'locations__item-link tabs__item',
              {'tabs__item--active': city === value},
            )} href='#'
            >
              <span>{value}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
