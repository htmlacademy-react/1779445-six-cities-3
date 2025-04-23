import { CommentsType } from '../components/comment/comment-type.ts';

const mockComments: CommentsType[] = [
  {
    'id': 'b67ddfd5-b953-4a30-8c8d-bd083cd6b10a',
    'date': '2019-09-08T14:13:56.569Z',
    'user': {
      'name': 'Oliver Conner',
      'avatarUrl': 'markup/img/avatar-max.jpg',
      'isPro': false
    },
    'comment': 'Easy peasy lemon squeezy .',
    'rating': 4
  },
  {
    'id': 'b67ddfd5-b953-4a30-8c8d-bd083cd6b13a',
    'date': '2019-08-08T14:13:56.569Z',
    'user': {
      'name': 'Samanta Brown',
      'avatarUrl': 'markup/img/avatar-angelina.jpg',
      'isPro': false
    },
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'rating': 1
  },
  {
    'id': 'b67ddfd5-b953-4a30-8c8d-bd034cd6b62a',
    'date': '2019-02-08T14:13:56.569Z',
    'user': {
      'name': 'Elon Mosque',
      'avatarUrl': 'markup/img/avatar-max.jpg',
      'isPro': false
    },
    'comment': 'All good.',
    'rating': 2
  },
  {
    'id': 'b67ddfd5-b953-4a30-8c8d-bd083cd6b85a',
    'date': '2019-10-22T14:13:56.569Z',
    'user': {
      'name': 'Max Verstappen',
      'avatarUrl': 'markup/img/avatar.svg',
      'isPro': false
    },
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'rating': 5
  }
];

export default mockComments;
