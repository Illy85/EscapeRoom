import { AuthorizationStatus, RequestStatus } from '../const';
import { AuthorizedUser } from './authorized-user';
import { Quest, Quests, MyBookedQuests, BookingPlace } from './quest';
import { store } from '../store';

export type UserData = {
  user: AuthorizedUser | null;
  authorizationStatus: AuthorizationStatus;
  sendingStatusLogin: RequestStatus;
}

export type QuestsData = {
  quests: Quests[];
  fetchingStatusQuests: RequestStatus;
}

export type QuestData = {
  quest: Quest | null;
  fetchingStatusQuest: RequestStatus;
}

export type BookingPlaceData = {
  bookingPlace: BookingPlace[];
  fetchingStatusBookingPlace: RequestStatus;
}

export type MyBookedQuestsData = {
  myBookedQuests: MyBookedQuests[];
  fetchingStatusBookedQuests: RequestStatus;
  fetchingStatusBookingQuests: RequestStatus;
  fetchingStatusDeletedQuests: RequestStatus;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
