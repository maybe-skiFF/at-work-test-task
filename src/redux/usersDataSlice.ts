import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserData } from '../interfaces/index';

interface IUsersDataState {
  usersData: IUserData[];
  archivedUsers: IUserData[];
}

const initialState: IUsersDataState = {
  usersData: [],
  archivedUsers: [],
};

export const usersDataSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {
    setActiveUsers: (state, action: PayloadAction<IUserData[]>) => {
      state.usersData = [...state.usersData, ...action.payload];
    },
    removeActiveUser: (state, action: PayloadAction<string>) => {
      state.usersData = state.usersData.filter(
        user => user.name !== action.payload,
      );
    },
    archivedUser: (state, action: PayloadAction<string>) => {
      const addUserToArchive = state.usersData.find(
        user => user.name === action.payload,
      );

      if (addUserToArchive) {
        state.archivedUsers.push(addUserToArchive);
      }
    },
  },
});

export const { setActiveUsers, removeActiveUser, archivedUser } =
  usersDataSlice.actions;

export default usersDataSlice.reducer;
