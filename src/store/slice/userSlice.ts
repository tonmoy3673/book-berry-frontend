import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserType {
  user: string | null;
  isEmailVerified: boolean;
  isLoginDialogOpen: boolean;
  isLoggedIn: boolean;
}

const initialState: UserType = {
  user: null,
  isEmailVerified: false,
  isLoginDialogOpen: false,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user = action.payload;
      state.isLoggedIn = !!action.payload;
    },
    setEmailVerified: (state, action: PayloadAction<boolean>) => {
      state.isEmailVerified = action.payload;
    },
    setLoginDialogOpen: (state) => {
      state.isLoginDialogOpen = !state.isLoginDialogOpen;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.isEmailVerified = false;
    },
  },
});

export const { setUser, setEmailVerified, setLoginDialogOpen, logout } =
  userSlice.actions;
export default userSlice.reducer;
