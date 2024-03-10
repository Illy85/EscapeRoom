import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { QuestData } from '../../types/state';
import { fetchQuestAction } from '../api-action';

const initialState: QuestData = {
  quest: null,
  fetchingStatusQuest: RequestStatus.Unsent,
};

export const questData = createSlice({
  name: NameSpace.Quest,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestAction.pending, (state) => {
        state.fetchingStatusQuest = RequestStatus.Pending;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.fetchingStatusQuest = RequestStatus.Success;
        state.quest = action.payload;
      })
      .addCase(fetchQuestAction.rejected, (state) => {
        state.fetchingStatusQuest = RequestStatus.Error;
      });
  },
});
