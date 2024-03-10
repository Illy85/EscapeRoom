import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../const';
import { questsData } from './quests-data/quests-data';
import { questData } from './quest-data/quest-data';
import { userData } from './user-data/user-data';
import { myBookedQuestsData } from './my-booked-quests-data/my-booked-quests-data';
import { bookingPlaceData } from './booking-place/booking-place';


export const rootReducer = combineReducers({
  [NameSpace.User]: userData.reducer,
  [NameSpace.Quests]: questsData.reducer,
  [NameSpace.Quest]: questData.reducer,
  [NameSpace.MyBookedQuests]: myBookedQuestsData.reducer,
  [NameSpace.BookingPlace]: bookingPlaceData.reducer,
});
