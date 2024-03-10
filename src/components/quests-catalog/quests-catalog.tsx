
import { useCallback, useState } from 'react';
import { useMemo } from 'react';
import { toast } from 'react-toastify';

import { sortingType, sortingLevel } from '../../utils/sort';
import { keyLevel, keyType } from '../../utils/util';
import { Quests } from '../../types/quest';
import { FilterLevelMemo as FilterLevel } from '../filter/filter-level/filter-level';
import { FilterTypeMemo as FilterType } from '../filter/filter-type/filter-type';
import { QuestsListMemo as QuestsList } from '../quests-list/quests-list';

  type QuestsProps = {
    quests: Quests[];
  }

function QuestsCatalog({ quests }: QuestsProps) {

  const [currentSort, setCurrentSort] = useState({
    type: keyType.all,
    level: keyLevel.any,
  });

  const sortedQuests = useMemo(() => sortingLevel[currentSort.level](sortingType[currentSort.type](quests)),[currentSort, quests]);

  const handleSortByTypeClick = useCallback((newSort: string) => {
    setCurrentSort({
      ...currentSort,
      type: newSort,
    });
  }, [currentSort]);

  const handleSortByLevelClick = useCallback((newSort: string) => {
    setCurrentSort({
      ...currentSort,
      level: newSort,
    });
  }, [currentSort]);

  return (
    <div className="container">
      <div className="page-content__title-wrapper">
        <h1 className="subtitle page-content__subtitle">
          квесты в Санкт-Петербурге
        </h1>
        <h2 className="title title--size-m page-content__title">
          Выберите тематику
        </h2>
      </div>
      <div className="page-content__item">
        <form className="filter" action="#" method="get">
          <fieldset className="filter__section">
            <legend className="visually-hidden">Тематика</legend>
            <ul className="filter__list">
              <FilterType
                onClick={ handleSortByTypeClick }
              />
            </ul>
          </fieldset>
          <fieldset className="filter__section">
            <legend className="visually-hidden">Сложность</legend>
            <ul className="filter__list">
              <FilterLevel
                onClick={ handleSortByLevelClick }
              />
            </ul>
          </fieldset>
        </form>
      </div>
      <h2 className="title visually-hidden">Выберите квест</h2>
      { quests.length > 0 && sortedQuests.length === 0 ?
        toast.warn('По примененному фильтру совпадений не обнаружено!',
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          }) :
        <QuestsList
          quests = { sortedQuests }
        />}
    </div>
  );
}

export default QuestsCatalog;
