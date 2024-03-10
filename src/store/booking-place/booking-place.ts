import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { BookingPlaceData } from '../../types/state';
import { fetchBookingPlaceAction } from '../api-action';

const initialState: BookingPlaceData = {
  bookingPlace: [],
  fetchingStatusBookingPlace: RequestStatus.Unsent,
};

export const bookingPlaceData = createSlice({
  name: NameSpace.BookingPlace,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBookingPlaceAction.pending, (state) => {
        state.fetchingStatusBookingPlace = RequestStatus.Pending;
      })
      .addCase(fetchBookingPlaceAction.fulfilled, (state, action) => {
        state.fetchingStatusBookingPlace = RequestStatus.Success;
        state.bookingPlace = action.payload;
      })
      .addCase(fetchBookingPlaceAction.rejected, (state) => {
        state.fetchingStatusBookingPlace = RequestStatus.Error;
      });
  },
});
