import { createSelector } from '@reduxjs/toolkit';
import { MyBookedQuestsData, State } from '../../types/state';
import { NameSpace } from '../../const';

export const getMyBookedQuests = createSelector(
  (state: State) => state[NameSpace.MyBookedQuests],
  (state: MyBookedQuestsData) => state.myBookedQuests
);

export const getFetchingStatusMyBookedQuests = createSelector(
  (state: State) => state[NameSpace.MyBookedQuests],
  (state: MyBookedQuestsData) => state.fetchingStatusBookedQuests
);

export const getFetchingStatusBookingQuests = createSelector(
  (state: State) => state[NameSpace.MyBookedQuests],
  (state: MyBookedQuestsData) => state.fetchingStatusBookingQuests
);

export const getFetchingStatusDeletedQuests = createSelector(
  (state: State) => state[NameSpace.MyBookedQuests],
  (state: MyBookedQuestsData) => state.fetchingStatusDeletedQuests
);
