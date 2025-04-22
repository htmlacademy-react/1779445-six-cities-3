import { CityName } from '../../const';
import { MouseEvent } from 'react';
import cn from 'classnames';

type cityProps = {
  city: CityName;
  onCityChange: (city: CityName) => void;
}

export default function LocationsList({city, onCityChange}: cityProps): JSX.Element {

  const handleCityChange = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    onCityChange(evt.currentTarget.innerText as CityName);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.entries(CityName).map(([key, value]) => (
          <li className="locations__item" key={key} onClick={handleCityChange}>
            <a className={cn(
              'locations__item-link tabs__item',
              {'tabs__item--active': city === value},
            )} href="#"
            >
              <span>{value}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
