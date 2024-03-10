import { createSelector } from '@reduxjs/toolkit';
import { QuestsData, State } from '../../types/state';
import { NameSpace } from '../../const';

export const getQuests = createSelector(
  (state: State) => state[NameSpace.Quests],
  (state: QuestsData) => state.quests
);

export const getFetchingStatusQuests = createSelector(
  (state: State) => state[NameSpace.Quests],
  (state: QuestsData) => state.fetchingStatusQuests
);
