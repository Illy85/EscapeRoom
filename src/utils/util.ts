import { QuestLevel, QuestType } from '../const';

interface ObjectStringItems {
  [index: string]: string;
}

export const convertEngStringToRus = (someObject: ObjectStringItems, someString: string) => Object.values(someObject).filter((item) => item === someObject[someString]).toString();

export const concatNumbers = (array: [number, number]) => `${ array.toString().slice(0,1) }-${ array.toString().slice(2,3) }`;

export const getFirstNumber = (array: [number, number]) => array.toString().slice(0,1);

export const getLastNumber = (array: [number, number]) => array.toString().slice(2,3);

const getObjectEngKeys = (someObject: ObjectStringItems):ObjectStringItems => Object.keys(someObject).map((item) => item).reduce((acc, char) => ({ ...acc, [char]: char}), {});

export const keyLevel = getObjectEngKeys(QuestLevel);

export const keyType = getObjectEngKeys(QuestType);

export const sliceStringAfterM = (someString: string) => someString.split(' ').slice(someString.split(' ').findLastIndex((element) => element === 'м.') - someString.split(' ').length).join(' ');

export const sliceStringBeforeM = (someString: string) => someString.split(' ').slice(0, someString.split(' ').findLastIndex((element) => element === 'м.')).join(' ');
/**
export const convertEngStringToRus = (someObject: ObjectStringItems, someString: string) => Object.values(someObject).filter((item) => someObject[item] === someString).toString();

In cazul in care

export enum QuestType {
  'Bсе квесты' = 'all',
  'Приключения' = 'adventures',
  'Ужасы' = 'horror',
  'Мистика' = 'mystic',
  'Детектив' = 'detective',
  'Sci-fi' = 'sci-fi'
}

 */
