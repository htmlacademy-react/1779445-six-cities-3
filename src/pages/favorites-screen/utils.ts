import {MockOffersTypes} from '../../components/place-card/place-card-offer-types.ts';

// Функция для сортировки офферов по городам
function groupOffersByCity (offers: MockOffersTypes){
  return (offers.reduce((acc: { [key: string]: MockOffersTypes }, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {})
  );
}

const getFavoriteOffer = (offers: MockOffersTypes) => offers.filter((offer) => offer.isFavorite);

export { groupOffersByCity, getFavoriteOffer };

