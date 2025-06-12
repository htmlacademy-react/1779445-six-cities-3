import { AuthorizationStatus, NameSpace } from '../../../const.ts';
import { State } from '../../../types/state.ts';
import { getCurrentAuthStatus, getUserEmail } from './user-selectors.ts';

describe('User selectors', () => {
  const state = {
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.Auth,
      userEmail: 'user@test.com',
    },
  } as State;

  it('should return current authorization status', () => {
    expect(getCurrentAuthStatus(state)).toBe(AuthorizationStatus.Auth);
  });

  it('should return user email', () => {
    expect(getUserEmail(state)).toBe('user@test.com');
  });
});
