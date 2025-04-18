import {MockOffersTypes, PropertyType} from '../types/offer.ts';

const mocksOffers: MockOffersTypes = [
  {
    'id': '3bfe052e-c7c8-45a0-a75a-3321c90f8109',
    'title': 'Wood and stone place',
    'type': PropertyType.Hotel,
    'price': 630,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 3
  },
  {
    'id': 'b7598856-b931-4155-9b4c-cd159b0b0715',
    'title': 'Waterfront with extraordinary view',
    'type': PropertyType.Apartment,
    'price': 378,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.833557,
      'longitude': 4.374696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': '182e92ce-de61-474c-b79d-a14f120c2408',
    'title': 'Loft Studio in the Central Area',
    'type': PropertyType.Hotel,
    'price': 167,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37454,
      'longitude': 4.881976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.8
  },
  {
    'id': '5a60e0e3-bde6-4306-8066-2a9e6f3be098',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': PropertyType.Hotel,
    'price': 385,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.565341,
      'longitude': 9.980654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.1
  },
  {
    'id': '821e208c-b922-4b2f-b9ae-5887e104c79a',
    'title': 'The house among olive ',
    'type': PropertyType.Room,
    'price': 183,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.877610000000004,
      'longitude': 2.333499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 1.3
  },
  {
    'id': '380a86c1-3959-4390-b1c3-5f4650a7d098',
    'title': 'The Pondhouse - A Magical Place',
    'type': PropertyType.House,
    'price': 679,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.225402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.8
  },
  {
    'id': '69d72be4-e0b6-4a3b-89c2-9216701bae81',
    'title': 'The Pondhouse - A Magical Place',
    'type': PropertyType.Hotel,
    'price': 471,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.228402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 3.6
  },
];

export default mocksOffers;
