import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    name: "",
    surname: "",
    email: "",
    telephone: "",
    role: "",
    profileStatus: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    putUserInfo: (state, action) => {
      const { id, name, surname, email, telephone, role, profileStatus } =
        action.payload;
      state.user.id = id;
      state.user.name = name;
      state.user.surname = surname;
      state.user.email = email;
      state.user.telephone = telephone;
      state.user.role = role;
      state.user.profileStatus = profileStatus;
    },
    deleteUserInfo: (state, action) => {
      state.user.id = "";
      state.user.name = "";
      state.user.surname = "";
      state.user.email = "";
      state.user.telephone = "";
      state.user.role = "";
      state.user.profileStatus = "";
    },
  },
});

export const { putUserInfo, deleteUserInfo } = userSlice.actions;
export default userSlice.reducer;
