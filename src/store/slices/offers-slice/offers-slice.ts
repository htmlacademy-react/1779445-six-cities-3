import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityName, NameSpace, SortType } from '../../../const.ts';
import AppState from '../../../types/app-state.ts';

type OffersState = Pick<AppState, 'city' | 'sort' | 'isOffersDataLoading'>;

const initialState: OffersState = {
  city: CityName.Paris,
  sort: SortType.Popular,
  isOffersDataLoading: false
};

const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
    setOffersDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isOffersDataLoading = action.payload;
    }
  }
});

export const { setCity, setSort } = offersSlice.actions;
export default offersSlice.reducer;
