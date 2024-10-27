import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UserState {
  userId: string;
  name: string;
  email: string;
}

// Define the initial state using that type
const initialState: UserState = {
  userId: "66c98a6b262f8f3e5840e609",
  name: "Omer",
  email: "omer.domb51@gmail.com",
};

export const userSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
