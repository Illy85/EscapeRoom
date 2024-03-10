import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { QuestsData } from '../../types/state';
import { fetchQuestsAction } from '../api-action';

const initialState: QuestsData = {
  quests: [],
  fetchingStatusQuests: RequestStatus.Unsent,
};

export const questsData = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.fetchingStatusQuests = RequestStatus.Pending;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.fetchingStatusQuests = RequestStatus.Success;
        state.quests = action.payload;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.fetchingStatusQuests = RequestStatus.Error;
      });
  },
});
