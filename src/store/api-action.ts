import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Quests, Quest, MyBookedQuests, BookingQuest, BookingPlace } from '../types/quest';
import { AuthData } from '../types/auth-data';
import { AuthorizedUser } from '../types/authorized-user';
import { dropToken, saveToken } from '../services/token';
import { APIRoute, NameSpace } from '../const';
import browserHistory from '../browser-history';


export const fetchQuestsAction = createAsyncThunk<Quests[], undefined, {
   dispatch: AppDispatch;
   state: State;
   extra: AxiosInstance;
 }>(
   `${NameSpace.Quests}/fetchQuests`,
   async (_arg, {extra: api}) => {
     const { data } = await api.get<Quests[]>(APIRoute.Quest);

     return data;
   }
 );

export const fetchQuestAction = createAsyncThunk<Quest, Quests['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Quest}/fetchQuest`,
  async (id, {extra: api}) => {
    const { data } = await api.get<Quest>(`${APIRoute.Quest}/${id}`);

    return data;
  }
);

export const fetchBookingPlaceAction = createAsyncThunk<BookingPlace[], Quests['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.BookingPlace}/fetchBookingPlace`,
  async (id, {extra: api}) => {
    const { data } = await api.get<BookingPlace[]>(`${APIRoute.Quest}/${id}${APIRoute.BookingQuest}`);

    return data;
  }
);

export const checkAuthAction = createAsyncThunk<AuthorizedUser, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<AuthorizedUser>(APIRoute.Login);

    return data;
  }
);

export const loginAction = createAsyncThunk<AuthorizedUser, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/login`,
  async ({login: email, password}, { extra: api}) => {
    const {data, status} = await api.post<AuthorizedUser>(APIRoute.Login, {email, password});

    if (status >= 200 && status < 300) {
      saveToken(data.token);
      browserHistory.back();
    }
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/logout`,
  async(_arg, { extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const fetchBookedQuestsAction = createAsyncThunk<MyBookedQuests[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.MyBookedQuests}/fetchBookedQuests`,
  async (_arg, {extra: api}) => {
    const { data } = await api.get<MyBookedQuests[]>(APIRoute.BookedQuests);

    return data;
  }
);

export const addToBookedQuests = createAsyncThunk<MyBookedQuests, {bookingData: BookingQuest; questId: Quest['id']}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.MyBookedQuests}/addToBookedQuests`,
  async ({bookingData, questId}, {extra: api}) => {
    const { data } = await api.post<MyBookedQuests>(`${APIRoute.Quest}/${questId}${APIRoute.BookingQuest}`, bookingData);

    return data;
  }
);

export const deleteBookedQuest = createAsyncThunk<MyBookedQuests, MyBookedQuests['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.MyBookedQuests}/deleteBookedQuest`,
  async (id, {extra: api}) => {
    const { data } = await api.delete<MyBookedQuests>(`${APIRoute.BookedQuests}/${id}`);

    return data;
  }
);
