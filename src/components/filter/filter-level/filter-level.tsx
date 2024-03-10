import { memo } from 'react';
import { QuestLevel } from '../../../const';

type FilterLevelProps = {
  onClick: (newSort: string) => void;
}

function FilterLevel({ onClick }: FilterLevelProps):JSX.Element {

  return(
    <>
      {(Object.keys(QuestLevel) as Array<keyof typeof QuestLevel>).map((level) => (
        <li key={ level } className="filter__item">
          <input type="radio" name="level" id= { level } />
          <label className="filter__label" htmlFor={ level }
            onClick={() => {
              onClick(level);
            }}
          >
            <span className="filter__label-text">{ QuestLevel[level] }</span>
          </label>
        </li>
      ))}

    </>
  );
}

export const FilterLevelMemo = memo(FilterLevel);
