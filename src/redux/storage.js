import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import advertisementReducer from "./AdvertisementSlice";

const storage = configureStore({
  reducer: {
    user: userReducer,
    advertisement: advertisementReducer,
  },
});

export default storage;
