import {MockOffersTypes, PropertyType} from '../components/place-card/place-card-offer-types.ts';

const mocksOffers: MockOffersTypes = [
  {
    'id': '578e2aa4-5b38-4425-982d-a4b89ea28014',
    'title': 'House in countryside',
    type: PropertyType.House,
    'price': 659,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.3
  },
  {
    'id': '9a63a446-a4ff-41bf-97db-173013a75efd',
    'title': 'Beautiful & luxurious apartment at great location',
    type: PropertyType.Hotel,
    'price': 131,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4
  },
  {
    'id': '836d7eb5-d7b0-4b0f-85f3-fa6bec26fd95',
    'title': 'The house among olive ',
    type: PropertyType.Hotel,
    'price': 135,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.8
  },
  {
    'id': 'dec06f41-8351-4b75-9387-07e6c565791a',
    'title': 'Waterfront with extraordinary view',
    type: PropertyType.House,
    'price': 585,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
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
    'isFavorite': false,
    'isPremium': false,
    'rating': 3
  },
  {
    'id': '3cfe69e4-dbcc-4da5-afd2-57a050fe9a57',
    'title': 'Wood and stone place',
    type: PropertyType.House,
    'price': 869,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87561,
      'longitude': 2.375499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.7
  },
  {
    'id': '1ccb1c70-729b-4a4c-812d-450d14e69c93',
    'title': 'Loft Studio in the Central Area',
    type: PropertyType.Room,
    'price': 296,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87961000000001,
      'longitude': 2.353499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.8
  },
  {
    'id': '7d497a16-8fff-41d8-851c-639ec689397c',
    'title': 'The Joshua Tree House',
    type: PropertyType.House,
    'price': 624,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.8
  },
  {
    'id': '69de74a6-8ee4-44fe-8be0-d8720d4fa154',
    'title': 'The Pondhouse - A Magical Place',
    type: PropertyType.Apartment,
    'price': 143,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.3454990000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.8
  },
  {
    'id': '4a98e422-1e5a-4f9f-aaaf-dccd509b9c72',
    'title': 'The Pondhouse - A Magical Place',
    type: PropertyType.House,
    'price': 283,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84761,
      'longitude': 2.356499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': '4d6e7d3f-9048-4ac1-bcf2-3aa75efc9455',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    type: PropertyType.House,
    'price': 780,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.862610000000004,
      'longitude': 2.369499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.6
  },
  {
    'id': '47d2c484-1e6d-485e-9937-ee0f570a25c9',
    'title': 'Waterfront with extraordinary view',
    type: PropertyType.Apartment,
    'price': 112,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.83861,
      'longitude': 2.350499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4
  },
  {
    'id': 'c55dc2cd-0a91-4ec0-b300-2dea8b0d8950',
    'title': 'The Pondhouse - A Magical Place',
    type: PropertyType.Apartment,
    'price': 420,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.861610000000006,
      'longitude': 2.340499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.2
  },
  {
    'id': 'dad547f8-0762-423e-9b59-5b613ba20f58',
    'title': 'The house among olive ',
    type: PropertyType.House,
    'price': 236,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87861,
      'longitude': 2.357499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': '76f3cdf4-a00e-4241-8107-097d62229a66',
    'title': 'Amazing and Extremely Central Flat',
    type: PropertyType.Room,
    'price': 278,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
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
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.9
  },
  {
    'id': '1e4a16ba-8b8a-45de-b563-6370b1ec9ec8',
    'title': 'Nice, cozy, warm big bed apartment',
    type: PropertyType.Apartment,
    'price': 414,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.83961,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.2
  },
  {
    'id': 'f45bd2c9-a267-47f4-a12b-020d7110cf46',
    'title': 'The Pondhouse - A Magical Place',
    type: PropertyType.Hotel,
    'price': 236,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.865610000000004,
      'longitude': 2.350499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4
  },
  {
    'id': '9e1cef15-2a8c-4cb2-a33f-75f7f98ac993',
    'title': 'Wood and stone place',
    type: PropertyType.Hotel,
    'price': 456,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.846610000000005,
      'longitude': 2.374499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': '94326408-75bd-46f6-85e9-6e1a2edfca09',
    'title': 'Wood and stone place',
    type: PropertyType.Apartment,
    'price': 441,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': 'ff2fd881-f026-4a7d-9e89-9513932bb893',
    'title': 'Tile House',
    type: PropertyType.Room,
    'price': 160,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.843610000000005,
      'longitude': 2.338499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.1
  },
  {
    'id': '4f21c586-aed4-4034-bc63-c077486a0688',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    type: PropertyType.Hotel,
    'price': 179,
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
      'latitude': 48.84461,
      'longitude': 2.374499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.5
  },
  {
    'id': '733166ba-c918-4d47-880f-4c7c74286a2e',
    'title': 'House in countryside',
    type: PropertyType.Room,
    'price': 187,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.950361,
      'longitude': 6.961974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4
  },
  {
    'id': 'c5eac0e1-221d-4332-95d3-c98e10fca054',
    'title': 'The house among olive ',
    type: PropertyType.Hotel,
    'price': 206,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': '83ee1e45-7ce9-46b9-be9a-648a56c7b007',
    'title': 'Perfectly located Castro',
    type: PropertyType.Room,
    'price': 127,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.934361,
      'longitude': 6.943974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.1
  },
  {
    'id': '344bf1fd-2b6e-4716-a6d5-f72ce0c1f0b9',
    'title': 'Canal View Prinsengracht',
    type: PropertyType.Hotel,
    'price': 164,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.947361,
      'longitude': 6.9799739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.9
  },
  {
    'id': '59eab0d3-af95-4eb7-963e-14e173065f87',
    'title': 'Tile House',
    type: PropertyType.House,
    'price': 368,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.960361,
      'longitude': 6.967974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.8
  },
  {
    'id': '1106c040-8abf-452e-b62a-7e549fca71d4',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    type: PropertyType.House,
    'price': 482,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.941361,
      'longitude': 6.956974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9
  },
  {
    'id': 'e92c6fff-6b65-4263-8459-e01bdf0c4fb4',
    'title': 'House in countryside',
    type: PropertyType.Hotel,
    'price': 222,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.916361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3
  },
  {
    'id': 'aeb00327-a2bb-4ce8-ac4e-43404f9adefb',
    'title': 'Tile House',
    type: PropertyType.Room,
    'price': 175,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.949361,
      'longitude': 6.976974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': '58dec48a-8683-40de-9e0f-f41719b6984d',
    'title': 'Beautiful & luxurious apartment at great location',
    type: PropertyType.Room,
    'price': 234,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.913361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.6
  },
  {
    'id': 'cf3a9bcc-1940-4081-8084-01004e9b8c09',
    'title': 'The Pondhouse - A Magical Place',
    type: PropertyType.Apartment,
    'price': 269,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.930361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.2
  },
  {
    'id': '3a8536b1-de4c-4bc0-8d7a-83ea69fa0725',
    'title': 'Loft Studio in the Central Area',
    type: PropertyType.House,
    'price': 145,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.960361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': 'c3f55dd5-603d-4581-8310-501fff4fc231',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    type: PropertyType.Room,
    'price': 126,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.918461,
      'longitude': 6.969974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.8
  },
  {
    'id': '27f14542-9d96-48a4-a009-c3c87426efc7',
    'title': 'The Joshua Tree House',
    type: PropertyType.Hotel,
    'price': 416,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.957361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.5
  },
  {
    'id': '8831ef37-17eb-4e68-8e4c-e2e1dd9e4f94',
    'title': 'Amazing and Extremely Central Flat',
    type: PropertyType.Hotel,
    'price': 358,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.951361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.4
  },
  {
    'id': '3f7f0864-23b8-42ad-a856-d9ea2251e177',
    'title': 'Tile House',
    type: PropertyType.Hotel,
    'price': 358,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.959361,
      'longitude': 6.978974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.4
  },
  {
    'id': 'ceef425c-744d-4212-9b06-754ddd6a6d5a',
    'title': 'Nice, cozy, warm big bed apartment',
    type: PropertyType.Hotel,
    'price': 102,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.960974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.8
  },
  {
    'id': 'a8295ce4-b222-4ae1-8a0d-d8cb25cff4eb',
    'title': 'The Pondhouse - A Magical Place',
    type: PropertyType.Hotel,
    'price': 297,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.954361,
      'longitude': 6.982974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.1
  },
  {
    'id': '325cc4ce-1d8f-4c87-9213-31ece97fc146',
    'title': 'Beautiful & luxurious apartment at great location',
    type: PropertyType.House,
    'price': 717,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.945361,
      'longitude': 6.962974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4
  },
  {
    'id': 'a7d185ea-9978-4f1b-a95c-19a15a58e0ff',
    'title': 'Nice, cozy, warm big bed apartment',
    type: PropertyType.House,
    'price': 944,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.917361,
      'longitude': 6.977974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4
  },
  {
    'id': '5e9ef811-4c06-4cae-bbc8-1ee437528719',
    'title': 'House in countryside',
    type: PropertyType.Room,
    'price': 106,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.945361,
      'longitude': 6.935974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.3
  },
  {
    'id': '05793b97-fd5b-497f-86f4-e872c04a1f77',
    'title': 'Amazing and Extremely Central Flat',
    type: PropertyType.Apartment,
    'price': 330,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.854557,
      'longitude': 4.364697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2
  },
  {
    'id': '4d587ae3-8132-4f02-b1b1-dbc881cb5932',
    'title': 'House in countryside',
    type: PropertyType.Apartment,
    'price': 326,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.371696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.2
  },
  {
    'id': 'ccb1f2ec-9f2f-410b-b68a-4101621a0dd1',
    'title': 'The Pondhouse - A Magical Place',
    type: PropertyType.Apartment,
    'price': 134,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.827557,
      'longitude': 4.336697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.2
  },
  {
    'id': '1a027515-2be2-47b1-9d7f-5a1554056d11',
    'title': 'Waterfront with extraordinary view',
    type: PropertyType.Apartment,
    'price': 196,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
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
    'rating': 3.4
  },
  {
    'id': '3698e578-5ae9-4cd2-b7ce-22b59303a464',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    type: PropertyType.Hotel,
    'price': 389,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.837557,
      'longitude': 4.339697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': 'ded01e9d-2467-4c1a-bd4b-f4d9136c4561',
    'title': 'Perfectly located Castro',
    type: PropertyType.House,
    'price': 264,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.849557,
      'longitude': 4.374696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': 'e94e3382-157c-4b9b-924e-0fd9fbd70d5d',
    'title': 'The house among olive ',
    type: PropertyType.House,
    'price': 398,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.852557,
      'longitude': 4.3376969999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.2
  },
  {
    'id': '9f15aaba-0004-4691-8cf7-58e005e6f704',
    'title': 'Amazing and Extremely Central Flat',
    type: PropertyType.Hotel,
    'price': 237,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.828556999999996,
      'longitude': 4.362697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3
  },
  {
    'id': '1f0582d3-33ea-43c2-bf24-cf99bfbb89f8',
    'title': 'Canal View Prinsengracht',
    type: PropertyType.Apartment,
    'price': 378,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.835556999999994,
      'longitude': 4.354697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3
  },
  {
    'id': 'f7435865-321e-4e57-a188-7e0509e1ac7b',
    'title': 'Nice, cozy, warm big bed apartment',
    type: PropertyType.Hotel,
    'price': 355,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.339697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.1
  },
  {
    'id': '5cb24f4b-af4f-494c-9c9d-350f56eaeea2',
    'title': 'Waterfront with extraordinary view',
    type: PropertyType.Room,
    'price': 120,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.839557,
      'longitude': 4.346697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.5
  },
  {
    'id': '74f39146-2103-4e45-bb23-22216f4413ec',
    'title': 'The house among olive ',
    type: PropertyType.Apartment,
    'price': 365,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.844556999999995,
      'longitude': 4.346697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.8
  },
  {
    'id': '47e3b0af-b311-477c-8a4a-a096d0beec8a',
    'title': 'Waterfront with extraordinary view',
    type: PropertyType.Apartment,
    'price': 159,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.865556999999995,
      'longitude': 4.371696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': '74207d91-9482-404d-812b-fe773dfa80ea',
    'title': 'Wood and stone place',
    type: PropertyType.Apartment,
    'price': 394,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.869557,
      'longitude': 4.332697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.4
  },
  {
    'id': 'bf8df982-176f-4446-87f2-892552b22e92',
    'title': 'Nice, cozy, warm big bed apartment',
    type: PropertyType.Apartment,
    'price': 269,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.860557,
      'longitude': 4.376697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.8
  },
  {
    'id': 'b3d3c85a-730f-4feb-8a67-4e51dbdd10d2',
    'title': 'Perfectly located Castro',
    type: PropertyType.House,
    'price': 974,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.862556999999995,
      'longitude': 4.375697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.7
  },
  {
    'id': 'b10d045b-ccc1-4a70-8d29-8673c1848f31',
    'title': 'Perfectly located Castro',
    type: PropertyType.Hotel,
    'price': 479,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842557,
      'longitude': 4.3536969999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9
  },
  {
    'id': '03039cd2-2b1f-473d-8252-2f6e8271b43e',
    'title': 'Nice, cozy, warm big bed apartment',
    type: PropertyType.House,
    'price': 671,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.822556999999996,
      'longitude': 4.347697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.4
  },
  {
    'id': '80f16b12-1966-42f9-ac5d-99660cfdb059',
    'title': 'Canal View Prinsengracht',
    type: PropertyType.House,
    'price': 858,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.357697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.4
  },
  {
    'id': '9c5ff7e0-5240-4c76-ad36-271cb6aa2c6b',
    'title': 'The Pondhouse - A Magical Place',
    type: PropertyType.House,
    'price': 746,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842557,
      'longitude': 4.363696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1
  },
  {
    'id': 'd6433e22-2ab8-4a19-8c8b-4e756dac6c26',
    'title': 'The house among olive ',
    type: PropertyType.House,
    'price': 346,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36554,
      'longitude': 4.911976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9
  },
  {
    'id': '1e46d8fe-ceff-45b2-9d85-347ad158c346',
    'title': 'Wood and stone place',
    type: PropertyType.Room,
    'price': 109,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.902976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.9
  },
  {
    'id': '1b0fb135-4a4f-48e9-b235-d0dcfbee6ecb',
    'title': 'Amazing and Extremely Central Flat',
    type: PropertyType.Room,
    'price': 183,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.397540000000006,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': 'a5fcb7f1-5857-4e6f-9b1c-0d3535c759dd',
    'title': 'House in countryside',
    type: PropertyType.Apartment,
    'price': 494,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
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
    'rating': 3
  },
  {
    'id': '9fa7682e-8275-48a2-9b09-71671c9cdd8d',
    'title': 'Amazing and Extremely Central Flat',
    type: PropertyType.Room,
    'price': 175,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.367540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4
  },
  {
    'id': '31ee236a-5d65-4b80-bf18-f0c93be58b6c',
    'title': 'Amazing and Extremely Central Flat',
    type: PropertyType.Apartment,
    'price': 117,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.361540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.4
  },
  {
    'id': '648277e0-5344-46a4-bef2-f41eca22c627',
    'title': 'Beautiful & luxurious apartment at great location',
    type: PropertyType.Hotel,
    'price': 161,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.35754,
      'longitude': 4.9179759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9
  },
  {
    'id': '915f3812-04f7-456b-b61c-92a65c296fa2',
    'title': 'The Joshua Tree House',
    type: PropertyType.House,
    'price': 496,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37854,
      'longitude': 4.894976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.7
  },
  {
    'id': '54893cfa-5baa-4dfa-b95f-64e48136aaea',
    'title': 'House in countryside',
    type: PropertyType.Hotel,
    'price': 372,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36854,
      'longitude': 4.887976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.2
  },
  {
    'id': 'a5bd829e-a03b-478c-8e4e-fc60e4425bf3',
    'title': 'House in countryside',
    type: PropertyType.Room,
    'price': 213,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.370540000000005,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.9
  },
  {
    'id': 'eac29342-c3f6-408c-a4cc-dd124198a03d',
    'title': 'Canal View Prinsengracht',
    type: PropertyType.Apartment,
    'price': 162,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.389540000000004,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.2
  },
  {
    'id': 'cd2fb9b1-b135-4b54-bbde-941ef760dc36',
    'title': 'The Joshua Tree House',
    type: PropertyType.House,
    'price': 769,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.35054,
      'longitude': 4.908976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.3
  },
  {
    'id': '6ddd1efd-4b9e-4f34-b186-fe82413f0178',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    type: PropertyType.House,
    'price': 617,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37154,
      'longitude': 4.889976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.3
  },
  {
    'id': '8c275266-8f82-4cd0-bfb6-8fe556946ced',
    'title': 'Amazing and Extremely Central Flat',
    type: PropertyType.Room,
    'price': 164,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.364540000000005,
      'longitude': 4.9019759999999994,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.2
  },
  {
    'id': '3180f091-4560-4282-b71e-23fa2507b5ba',
    'title': 'The Pondhouse - A Magical Place',
    type: PropertyType.House,
    'price': 761,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36354,
      'longitude': 4.911976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.7
  },
  {
    'id': '824c9b2c-fec3-4314-9d88-fadbc1a80b57',
    'title': 'Wood and stone place',
    type: PropertyType.Room,
    'price': 162,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36354,
      'longitude': 4.889976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.4
  },
  {
    'id': '3e2e91f8-67fd-43dd-abb7-264041364e26',
    'title': 'Nice, cozy, warm big bed apartment',
    type: PropertyType.Apartment,
    'price': 423,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.388540000000006,
      'longitude': 4.899976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.3
  },
  {
    'id': '9aa14b77-d72e-4813-be00-7017eaeefbd3',
    'title': 'Perfectly located Castro',
    type: PropertyType.Apartment,
    'price': 306,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36954,
      'longitude': 4.914976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.4
  },
  {
    'id': 'bd285bb1-cea8-4120-94ad-9d06ec76961f',
    'title': 'Beautiful & luxurious apartment at great location',
    type: PropertyType.Apartment,
    'price': 368,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37554,
      'longitude': 4.9019759999999994,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.6
  },
  {
    'id': '2929b76e-b03d-4e71-a8ae-5a62154808a7',
    'title': 'House in countryside',
    type: PropertyType.Apartment,
    'price': 116,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.886976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': 'a8c6f149-b76e-4a7b-907e-27ca4d7b2dce',
    'title': 'Canal View Prinsengracht',
    type: PropertyType.House,
    'price': 503,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.528341000000005,
      'longitude': 10.018654000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.6
  },
  {
    'id': '7465caab-f95f-48a5-badb-185618e6750d',
    'title': 'Waterfront with extraordinary view',
    type: PropertyType.House,
    'price': 348,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.538341,
      'longitude': 9.976654000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.7
  },
  {
    'id': '217d4859-b0aa-49c6-97de-7738ecdcdb4e',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    type: PropertyType.House,
    'price': 920,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.563341,
      'longitude': 10.019654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.1
  },
  {
    'id': '06d638d2-d6a3-4dbc-a554-8fb58df3411a',
    'title': 'Canal View Prinsengracht',
    type: PropertyType.Hotel,
    'price': 113,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.529341,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': '643600f3-d6c8-47d6-8bef-1b6dd906eecd',
    'title': 'The Pondhouse - A Magical Place',
    type: PropertyType.Room,
    'price': 107,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
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
    'rating': 2.4
  },
  {
    'id': '459a462f-3e8a-432e-bbe5-5eb130fd77a9',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    type: PropertyType.Room,
    'price': 185,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.546341000000005,
      'longitude': 10.022654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.9
  },
  {
    'id': '3bbb2c20-bb6b-40ae-b85c-03aca1ee9a6c',
    'title': 'Tile House',
    type: PropertyType.Apartment,
    'price': 447,
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
      'latitude': 53.565341000000004,
      'longitude': 9.978654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': '9ada93ab-c2ac-4e82-944b-1a20219b6780',
    'title': 'House in countryside',
    type: PropertyType.Hotel,
    'price': 368,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.570341000000006,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.7
  },
  {
    'id': 'ece56d1d-9dd3-4533-b75c-03b5c4096726',
    'title': 'The Joshua Tree House',
    type: PropertyType.Hotel,
    'price': 453,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.558341000000006,
      'longitude': 10.001654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2
  },
  {
    'id': 'ae1e1800-f914-430b-93d5-637b5db61be0',
    'title': 'Tile House',
    type: PropertyType.House,
    'price': 682,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 10.009654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.1
  },
  {
    'id': '8c76eccb-13a0-4273-8164-24f990bf5ff5',
    'title': 'Tile House',
    type: PropertyType.House,
    'price': 400,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 9.994654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.1
  },
  {
    'id': '44e5f130-131d-4fab-b439-3efe2f81330f',
    'title': 'Loft Studio in the Central Area',
    type: PropertyType.Apartment,
    'price': 480,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.528341000000005,
      'longitude': 9.982654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1
  },
  {
    'id': '78e8da2a-28e2-4346-8cfb-058f8b567ba5',
    'title': 'The Joshua Tree House',
    type: PropertyType.House,
    'price': 332,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.540341000000005,
      'longitude': 10.025654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6
  },
  {
    'id': '8d13e66e-dc40-4f6e-9a70-258baea8d32c',
    'title': 'Beautiful & luxurious apartment at great location',
    type: PropertyType.Apartment,
    'price': 469,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.555341000000006,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1
  },
  {
    'id': '54ae8e47-cb3a-45e3-9af0-e89dcaaa0e23',
    'title': 'The Pondhouse - A Magical Place',
    type: PropertyType.Room,
    'price': 240,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.534341000000005,
      'longitude': 9.998654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9
  },
  {
    'id': '4ab894e9-fdf6-4740-abc6-c3e4d6b45585',
    'title': 'House in countryside',
    type: PropertyType.House,
    'price': 880,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.563341,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1
  },
  {
    'id': '0f6cfd76-0c46-45f3-bf77-9bdbf894ce43',
    'title': 'Beautiful & luxurious apartment at great location',
    type: PropertyType.House,
    'price': 786,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.574341000000004,
      'longitude': 10.022654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': '9daf2388-c24f-4b8e-9625-3675d1707fc0',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    type: PropertyType.House,
    'price': 833,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 10.025654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.2
  },
  {
    'id': '75a25364-c0ed-4b5f-a51b-33e11cd88e07',
    'title': 'Waterfront with extraordinary view',
    type: PropertyType.Apartment,
    'price': 170,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.550341,
      'longitude': 9.980654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1
  },
  {
    'id': '38e59034-d62b-4371-aab5-cafe92b54a94',
    'title': 'The Joshua Tree House',
    type: PropertyType.Room,
    'price': 124,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.558341000000006,
      'longitude': 9.999654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': '9fd977c9-c042-43fd-b678-3994532e9f91',
    'title': 'The Pondhouse - A Magical Place',
    type: PropertyType.Hotel,
    'price': 314,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.236402000000005,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.8
  },
  {
    'id': 'a2169793-bc1b-4719-893e-44a12be78e2f',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    type: PropertyType.Hotel,
    'price': 176,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.210402,
      'longitude': 6.798314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.6
  },
  {
    'id': '38d3063f-5935-4452-9c78-87ac046c3107',
    'title': 'Loft Studio in the Central Area',
    type: PropertyType.Room,
    'price': 247,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.211402,
      'longitude': 6.756314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.7
  },
  {
    'id': 'fe8bc65c-cdd0-4685-b2d9-59e7306fd640',
    'title': 'Perfectly located Castro',
    type: PropertyType.Apartment,
    'price': 476,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
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
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': '141c504f-2748-4127-8903-f0204bb376e1',
    'title': 'Loft Studio in the Central Area',
    type: PropertyType.Room,
    'price': 254,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.204402,
      'longitude': 6.7773140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9
  },
  {
    'id': 'f7ece75b-78d6-4481-ad0c-f6a929f20d1d',
    'title': 'House in countryside',
    type: PropertyType.House,
    'price': 473,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.217402,
      'longitude': 6.7693140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.6
  },
  {
    'id': '5da46223-6303-4f68-982f-5537c56056dd',
    'title': 'The house among olive ',
    type: PropertyType.Room,
    'price': 169,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.241402,
      'longitude': 6.782314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.1
  },
  {
    'id': '086d9fae-7224-4f35-b2c7-f13a02c37324',
    'title': 'Beautiful & luxurious apartment at great location',
    type: PropertyType.Hotel,
    'price': 172,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.235402,
      'longitude': 6.800314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.8
  },
  {
    'id': 'e9555954-4dee-41f1-a4a0-d0445dff58d6',
    'title': 'The Pondhouse - A Magical Place',
    type: PropertyType.Room,
    'price': 262,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.237402,
      'longitude': 6.779314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.3
  },
  {
    'id': '904b9789-90c9-465d-a9ab-eea3fe00517c',
    'title': 'Tile House',
    type: PropertyType.Room,
    'price': 103,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.237402,
      'longitude': 6.797314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.8
  },
  {
    'id': 'f4aadabc-9bc4-4e2c-932d-8ee60290ce9b',
    'title': 'Beautiful & luxurious apartment at great location',
    type: PropertyType.Room,
    'price': 123,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.222402,
      'longitude': 6.786314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9
  },
  {
    'id': '62af8069-fa33-4a72-b9d3-26fee53509d3',
    'title': 'House in countryside',
    type: PropertyType.Apartment,
    'price': 161,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.232402,
      'longitude': 6.800314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1
  },
  {
    'id': '31c7a32a-d327-44d7-a062-ac42d85fc414',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    type: PropertyType.Room,
    'price': 241,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.216402,
      'longitude': 6.758314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3
  },
  {
    'id': '5437af53-bfe3-4fce-82b2-2d6c752f41c1',
    'title': 'The Pondhouse - A Magical Place',
    type: PropertyType.House,
    'price': 278,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.205402,
      'longitude': 6.7613140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.1
  },
  {
    'id': '50628f11-afed-4488-92c4-f6529aa6edc8',
    'title': 'House in countryside',
    type: PropertyType.Hotel,
    'price': 323,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.248402000000006,
      'longitude': 6.763314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.7
  },
  {
    'id': '2feb5383-8f43-49a4-b1a1-36ff45dcc8df',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    type: PropertyType.House,
    'price': 324,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.250402,
      'longitude': 6.7853140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.2
  },
  {
    'id': 'c6afc8ab-bb3b-4be5-a7f1-9401d6458273',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    type: PropertyType.Hotel,
    'price': 413,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.239402000000005,
      'longitude': 6.756314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': 'e8667592-b9f1-4e72-9797-916c894a755b',
    'title': 'The Pondhouse - A Magical Place',
    type: PropertyType.Hotel,
    'price': 182,
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
      'latitude': 51.243402,
      'longitude': 6.791314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 5
  },
  {
    'id': '6123b3ea-bab7-4701-9d30-a0f85b39dcf7',
    'title': 'Nice, cozy, warm big bed apartment',
    type: PropertyType.Room,
    'price': 259,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.214402,
      'longitude': 6.764314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9
  },
  {
    'id': '52fa900a-3afc-41a2-864c-010c4d928ded',
    'title': 'Beautiful & luxurious apartment at great location',
    type: PropertyType.Apartment,
    'price': 118,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
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
    'isPremium': false,
    'rating': 2.9
  }
];

export default mocksOffers;
