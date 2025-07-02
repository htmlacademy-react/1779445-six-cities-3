import { MockOffersTypes } from '../../types/place-card-offer-types.ts';

// Функция для сортировки офферов по городам
function groupOffersByCity(offers: MockOffersTypes) {
  return offers.reduce((accumulator: { [key: string]: MockOffersTypes }, offer) => {
    const city = offer.city.name;
    if (!accumulator[city]) {
      accumulator[city] = [];
    }
    accumulator[city].push(offer);
    return accumulator;
  }, {});
}

export { groupOffersByCity };
