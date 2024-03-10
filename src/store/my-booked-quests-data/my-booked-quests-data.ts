import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { MyBookedQuestsData } from '../../types/state';
import { fetchBookedQuestsAction, addToBookedQuests, deleteBookedQuest } from '../api-action';

const initialState: MyBookedQuestsData = {
  myBookedQuests: [],
  fetchingStatusBookedQuests: RequestStatus.Unsent,
  fetchingStatusBookingQuests: RequestStatus.Unsent,
  fetchingStatusDeletedQuests: RequestStatus.Unsent,
};

export const myBookedQuestsData = createSlice({
  name: NameSpace.MyBookedQuests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBookedQuestsAction.pending, (state) => {
        state.fetchingStatusBookedQuests = RequestStatus.Pending;
      })
      .addCase(fetchBookedQuestsAction.fulfilled, (state, action) => {
        state.fetchingStatusBookedQuests = RequestStatus.Success;
        state.myBookedQuests = action.payload;
      })
      .addCase(fetchBookedQuestsAction.rejected, (state) => {
        state.fetchingStatusBookedQuests = RequestStatus.Error;
      })
      .addCase(addToBookedQuests.pending, (state) => {
        state.fetchingStatusBookingQuests = RequestStatus.Pending;
      })
      .addCase(addToBookedQuests.fulfilled, (state, action) => {
        state.myBookedQuests.push(action.payload);
        state.fetchingStatusBookingQuests = RequestStatus.Success;
      })
      .addCase(addToBookedQuests.rejected, (state) => {
        state.fetchingStatusBookingQuests = RequestStatus.Error;
      })
      .addCase(deleteBookedQuest.fulfilled, (state, action) => {
        const updateQuest = action.payload;
        state.myBookedQuests = state.myBookedQuests.filter(({ id }) => id !== updateQuest.id);
        state.fetchingStatusDeletedQuests = RequestStatus.Success;
      });
  },
});
