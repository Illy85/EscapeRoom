import { createSelector } from '@reduxjs/toolkit';
import { QuestData, State } from '../../types/state';
import { NameSpace } from '../../const';

export const getQuest = createSelector(
  (state: State) => state[NameSpace.Quest],
  (state: QuestData) => state.quest
);

export const getFetchingStatusQuest = createSelector(
  (state: State) => state[NameSpace.Quest],
  (state: QuestData) => state.fetchingStatusQuest
);
