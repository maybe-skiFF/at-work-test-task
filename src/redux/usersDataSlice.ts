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
    updateUserData: (
      state,
      action: PayloadAction<{
        id: number;
        updatingUserData: Partial<IUserData>;
      }>,
    ) => {
      const { id, updatingUserData } = action.payload;
      const searchedUser = state.activeUsers.find(user => user.id === id);

      if (searchedUser) {
        Object.assign(searchedUser, updatingUserData);
      }
    },
  },
});

export const {
  setActiveUsers,
  removeActiveUser,
  archivedUser,
  userRecoveryFromArchive,
  updateUserData,
} = usersDataSlice.actions;

export default usersDataSlice.reducer;
