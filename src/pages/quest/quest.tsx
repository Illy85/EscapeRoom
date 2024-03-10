import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { fetchQuestAction } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFetchingStatusQuest, getQuest } from '../../store/quest-data/selectors';
import { AppRoute, RequestStatus } from '../../const';
import { concatNumbers, convertEngStringToRus} from '../../utils/util';
import { QuestType, QuestLevel } from '../../const';

function Quest(): JSX.Element {

  const {id: questId} = useParams();

  const dispatch = useAppDispatch();
  const quest = useAppSelector(getQuest);
  const isQuestDataLoading = useAppSelector(getFetchingStatusQuest);

  useEffect(() => {
    if (questId) {
      dispatch(fetchQuestAction(questId));
    }
  }, [dispatch, questId]);

  return (
    <>
      <Helmet>
        <title>{ `Escape Room - Quest: ${ quest ? quest.title : ''}` }</title>
      </Helmet>
      <Header/>
      { isQuestDataLoading === RequestStatus.Success && quest &&
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet= { quest.coverImgWebp }
            />
            <img
              src= { quest.coverImg }
              srcSet={ `${quest.coverImg } 2x`}
              width={1366}
              height={768}
              alt={ quest.title }
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              { quest.title }
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span> { convertEngStringToRus(QuestType, quest.type) }
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                { concatNumbers(quest.peopleMinMax) }&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                { convertEngStringToRus(QuestLevel, quest.level) }
              </li>
            </ul>
            <p className="quest-page__description">
              { quest.description }
            </p>
            <Link to={ `${ AppRoute.Quest }${ quest.id }${AppRoute.BookingQuest}` }
              className="btn btn--accent btn--cta quest-page__btn"
            >
          Забронировать
            </Link>
          </div>
        </div>
      </main>}
      <Footer/>
    </>
  );
}

export default Quest;
