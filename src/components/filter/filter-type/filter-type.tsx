import { memo } from 'react';
import { QuestType } from '../../../const';

type FilterTypeProps = {
  onClick: (newSort: string) => void;
}

function FilterType({ onClick }: FilterTypeProps):JSX.Element {

  return(
    <>
      {(Object.keys(QuestType) as Array<keyof typeof QuestType>).map((type) => (
        <li key={ type } className="filter__item">
          <input type="radio" name="type" id={ type } />
          <label className="filter__label" htmlFor={ type }
            onClick={() => {
              onClick(type);
            }}
          >
            <svg
              className= 'filter__icon'
              width= {30}
              height= {30}
              aria-hidden="true"
            >
              <use xlinkHref={ `#icon-${ type === 'adventures' ? 'adventure' : type}` } />
            </svg>
            <span className="filter__label-text">{ QuestType[type] }
            </span>
          </label>
        </li>
      ))}

    </>
  );
}

export const FilterTypeMemo = memo(FilterType);
