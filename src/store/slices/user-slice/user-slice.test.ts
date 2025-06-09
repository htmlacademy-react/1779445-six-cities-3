import { AuthorizationStatus } from '../../../const.ts';
import { checkAuthAction, loginAction, logoutAction } from './user-api-actions.ts';
import reducer from './user-slice.ts';

describe('User slice reducer', () => {
  const initialState = {
    authorizationStatus: AuthorizationStatus.Unknown,
    userEmail: null,
  };

  it('should return the initial state of user slice reducer', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle checkAuthAction.fulfilled', () => {
    const mockPayload = {
      authorizationStatus: AuthorizationStatus.Auth,
      email: 'user@test.com',
    };
    const state = reducer(initialState, {
      type: checkAuthAction.fulfilled.type,
      payload: mockPayload,
    });
    expect(state.authorizationStatus).toBe(AuthorizationStatus.Auth);
    expect(state.userEmail).toBe(mockPayload.email);
  });

  it('should handle checkAuthAction.rejected', () => {
    const state = reducer(initialState, {
      type: checkAuthAction.rejected.type,
    });
    expect(state.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
    expect(state.userEmail).toBe(null);
  });

  it('should handle loginAction.fulfilled', () => {
    const state = reducer(initialState, {
      type: loginAction.fulfilled.type,
      payload: { email: 'login@test.com' },
    });

    expect(state.authorizationStatus).toBe(AuthorizationStatus.Auth);
    expect(state.userEmail).toBe('login@test.com');
  });

  it('should handle logoutAction.fulfilled', () => {
    const state = reducer(initialState, {
      type: logoutAction.fulfilled.type,
      payload: { email: 'logout@test.com' },
    });

    expect(state.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
    expect(state.userEmail).toBeNull();
  });
});
