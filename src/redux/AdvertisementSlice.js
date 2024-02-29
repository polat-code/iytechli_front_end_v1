import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  advertPhotoPath1: "",
  advertPhotoPath2: "",
};

const advertisementSlice = createSlice({
  name: "advertisement",
  initialState,
  reducers: {
    putAdvertisementPhotos: (state, action) => {
      const { advertPhotoPath1, advertPhotoPath2 } = action.payload;
      state.advertPhotoPath1 = advertPhotoPath1;
      state.advertPhotoPath2 = advertPhotoPath2;
    },
    deleteAdvertisementPhotos: (state, action) => {
      state.advertPhotoPath1 = "";
      state.advertPhotoPath2 = "";
    },
  },
});

export const { putAdvertisementPhotos, deleteAdvertisementPhotos } =
  advertisementSlice.actions;
export default advertisementSlice.reducer;
