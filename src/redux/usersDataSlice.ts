import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserData } from '../interfaces/index';

interface IUsersDataState {
  activeUsers: IUserData[];
  archivedUsers: IUserData[];
}

const initialState: IUsersDataState = {
  activeUsers: [],
  archivedUsers: [],
};

export const usersDataSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {
    setActiveUsers: (state, action: PayloadAction<IUserData[]>) => {
      state.activeUsers = [...state.activeUsers, ...action.payload];
    },
    removeActiveUser: (state, action: PayloadAction<string>) => {
      state.activeUsers = state.activeUsers.filter(
        user => user.name !== action.payload,
      );
    },
    archivedUser: (state, action: PayloadAction<string>) => {
      const addUserToArchive = state.activeUsers.find(
        user => user.name === action.payload,
      );

      if (addUserToArchive) {
        state.archivedUsers.push(addUserToArchive);
      }
    },
    userRecoveryFromArchive: (state, action: PayloadAction<string>) => {
      const userFromArchive = state.archivedUsers.find(
        user => user.name === action.payload,
      );

      if (userFromArchive) {
        state.activeUsers.push(userFromArchive);
        state.archivedUsers = state.archivedUsers.filter(
          user => user.name !== action.payload,
        );
      }
    },
  },
});

export const {
  setActiveUsers,
  removeActiveUser,
  archivedUser,
  userRecoveryFromArchive,
} = usersDataSlice.actions;

export default usersDataSlice.reducer;
