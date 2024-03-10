import { QuestLevel, QuestType, EngQuestDate } from '../const';

export type Quests = {
id: string;
title: string;
previewImg: string;
previewImgWebp: string;
level: QuestLevel;
type: QuestType;
peopleMinMax: [number, number];
}

export type Quest = Quests & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type MyBookedQuests = {
date: EngQuestDate;
time: string;
contactPerson: string;
phone: string;
withChildren: boolean;
peopleCount: number;
id: string;
location: Location;
quest: Quests;
}

export type Location = {
  address: string;
  coords: [number, number];
  }

export type BookingQuest = {
    date?: EngQuestDate;
    time: string;
    contactPerson: string;
    phone: string;
    withChildren: boolean;
    peopleCount: number | string;
    placeId: string;
    }

export type BookingPlace = {
      id: string;
      location: Location;
      slots: DayPlace;
      }

type TimePlace = {
        time: string;
        isAvailable: boolean;
      }

type DayPlace = {
        today: [TimePlace];
        tomorrow: [TimePlace];
        }
