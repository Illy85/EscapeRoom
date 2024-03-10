export const enum AppRoute {
  Main = '/',
  Contacts = '/contacts',
  Login = '/login',
  MyQuests = '/my-quests',
  Quest = '/quest/',
  BookingQuest = '/booking',
  NotFound = '*',
}

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const enum APIRoute {
  Quest = '/quest',
  BookingQuest = '/booking',
  BookedQuests = '/reservation',
  Login = '/login',
  Logout = '/logout'
}

export const enum RequestStatus {
  Unsent = 'UNSENT',
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Error = 'ERROR'
}

export const enum NameSpace {
  Quests = 'QUESTS',
  Quest = 'QUEST',
  MyBookedQuests = 'MY_BOOKED_QUESTS',
  User = 'USER',
  BookingPlace = 'BOOKING_PLACE',
}

export const enum ReservationStatus {
  Add = 1,
  Delete = 0
}

export enum QuestLevel {
  'any' = 'Любой',
  'easy' = 'Лёгкий',
  'medium' = 'Средний',
  'hard' = 'Сложный',
}

export enum QuestType {
  'all' = 'Bсе квесты',
  'adventures' = 'Приключения',
  'horror' = 'Ужасы',
  'mystic' = 'Мистика',
  'detective' = 'Детектив',
  'sci-fi' = 'Sci-fi',
}

export enum QuestDate {
  'today' = 'сегодня',
  'tomorrow' = 'завтра',
}

export enum EngQuestDate {
   Today = 'today',
   Tomorrow = 'tomorrow',
}

export const ZOOM = 10;

export const UrlMarker = {
  DefaultMarker : '/img/svg/pin-default.svg',
  CurrentMarker : '/img/svg/pin-active.svg'
} as const;
