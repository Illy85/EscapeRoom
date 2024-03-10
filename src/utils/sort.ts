import { Quests } from '../types/quest';
import { keyLevel, keyType } from './util';

export const sortingLevel: Record<string, (quests: Quests[]) => Quests[]> = {
  any: (quests: Quests[]) => quests.slice(),
  easy: (quests: Quests[]) => quests.slice().filter((item: Quests) => item.level === keyLevel.easy),
  medium: (quests: Quests[]) => quests.slice().filter((item: Quests) => item.level === keyLevel.medium),
  hard: (quests: Quests[]) => quests.slice().filter((item: Quests) => item.level === keyLevel.hard),
};

export const sortingType: Record<string, (quests: Quests[]) => Quests[]> = {
  all: (quests: Quests[]) => quests.slice(),
  adventures: (quests: Quests[]) => quests.slice().filter((item: Quests) => item.type === keyType.adventures),
  horror: (quests: Quests[]) => quests.slice().filter((item: Quests) => item.type === keyType.horror),
  mystic: (quests: Quests[]) => quests.slice().filter((item: Quests) => item.type === keyType.mystic),
  detective: (quests: Quests[]) => quests.slice().filter((item: Quests) => item.type === keyType.detective),
  'sci-fi': (quests: Quests[]) => quests.slice().filter((item: Quests) => item.type === keyType['sci-fi']),
};


