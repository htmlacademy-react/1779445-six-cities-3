import { MockOffersTypes } from '../../components/place-card/place-card-offer-types.tsx';

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

const getFavoriteOffer = (offers: MockOffersTypes) => offers.filter((offer) => offer.isFavorite);

export { getFavoriteOffer, groupOffersByCity };
