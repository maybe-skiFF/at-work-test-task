import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserData } from '../interfaces/index';

interface IUsersDataState {
  usersData: IUserData[];
}

const initialState: IUsersDataState = {
  usersData: [],
};

export const usersDataSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {
    setActiveUsers: (state, action: PayloadAction<IUserData[]>) => {
      state.usersData = [...state.usersData, ...action.payload];
    },
  },
});

export const { setActiveUsers } = usersDataSlice.actions;

export default usersDataSlice.reducer;
