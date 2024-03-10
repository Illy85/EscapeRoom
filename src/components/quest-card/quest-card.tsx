import { memo } from 'react';
import { Link } from 'react-router-dom';

import { Quests } from '../../types/quest';
import { concatNumbers } from '../../utils/util';
import { AppRoute } from '../../const';
import { QuestLevel } from '../../const';
import { convertEngStringToRus } from '../../utils/util';


function QuestCard(props: Quests):JSX.Element {
  const { id, title, previewImg, previewImgWebp, level, peopleMinMax } = props;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={ `${ previewImgWebp } 2x` }
          />
          <img
            src={ previewImg }
            srcSet={ `${ previewImg } 2x` }
            width={344}
            height={232}
            alt={ title }
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link to={ `${AppRoute.Quest}${id}` } className="quest-card__link">
            { title }
          </Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            { concatNumbers(peopleMinMax) }&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            { convertEngStringToRus(QuestLevel, level) }
          </li>
        </ul>
      </div>
    </div>
  );
}

export const QuestCardMemo = memo(QuestCard);
