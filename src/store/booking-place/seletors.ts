
import { BookingPlaceData, State } from '../../types/state';
import { NameSpace } from '../../const';
import { createSelector } from '@reduxjs/toolkit';


export const getBookingPlaces = createSelector(
  (state: State) => state[NameSpace.BookingPlace],
  (state: BookingPlaceData) => state.bookingPlace
);

export const getFetchingStatusBookingPlace = createSelector(
  (state: State) => state[NameSpace.BookingPlace],
  (state: BookingPlaceData) => state.fetchingStatusBookingPlace
);
