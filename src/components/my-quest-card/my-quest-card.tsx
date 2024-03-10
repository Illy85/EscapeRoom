import { QuestLevel, QuestDate, RequestStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteBookedQuest, fetchBookedQuestsAction } from '../../store/api-action';
import { getFetchingStatusDeletedQuests } from '../../store/my-booked-quests-data/selectors';
import { MyBookedQuests } from '../../types/quest';
import { convertEngStringToRus, sliceStringAfterM, sliceStringBeforeM } from '../../utils/util';

type MyQuestCardProps = {
  myBookedQuestCard: MyBookedQuests;
}

function MyQuestCard({myBookedQuestCard}: MyQuestCardProps):JSX.Element {
  const { id, location, peopleCount, quest, time, date } = myBookedQuestCard;

  const dispatch = useAppDispatch();
  const isQuestDeleted = useAppSelector(getFetchingStatusDeletedQuests);

  const handleCancelClick = () => {
    dispatch(deleteBookedQuest(id));
    if (isQuestDeleted === RequestStatus.Success) {
      dispatch(fetchBookedQuestsAction());
    }
  };

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet= {`${quest.previewImgWebp} 2x`}
          />
          <img
            src={ quest.previewImg }
            srcSet={`${quest.previewImg} 2x`}
            width={344}
            height={232}
            alt={ quest.title }
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <span className="quest-card__link" >
            { quest.title }
          </span>
          <span className="quest-card__info">
              [{ convertEngStringToRus(QuestDate, date) },&nbsp;{ time }. { sliceStringBeforeM(location.address) }
            <br />
            { sliceStringAfterM(location.address) }]
          </span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            { `${ peopleCount } чел` }
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref= '#icon-level' />
            </svg>
            { convertEngStringToRus(QuestLevel, quest.level) }
          </li>
        </ul>
        <button
          onClick={ handleCancelClick }
          className="btn btn--accent btn--secondary quest-card__btn"
          type="button"
        >
            Отменить
        </button>
      </div>
    </div>
  );

}

export default MyQuestCard;
