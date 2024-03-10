import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchBookedQuestsAction } from '../../store/api-action';
import { getFetchingStatusMyBookedQuests, getMyBookedQuests } from '../../store/my-booked-quests-data/selectors';

import { RequestStatus } from '../../const';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MyQuestCard from '../../components/my-quest-card/my-quest-card';

function MyQuests():JSX.Element{

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookedQuestsAction());
  }, [dispatch]);

  const myBookedQuests = useAppSelector(getMyBookedQuests);
  const isMyBookedQuestsDataLoading = useAppSelector(getFetchingStatusMyBookedQuests);

  return(
    <>
      <Helmet>
        <title>{ 'Escape Room - My Quests' }</title>
      </Helmet>
      <Header/>
      {isMyBookedQuestsDataLoading === RequestStatus.Success && myBookedQuests &&
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-bg-size-m.jpg"
              srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
              width={1366}
              height={1959}
              alt=""
            />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">
        Мои бронирования
            </h1>
          </div>
          <div className="cards-grid">
            {myBookedQuests.map((quest)=> (
              <MyQuestCard
                key={ quest.id }
                myBookedQuestCard={ quest }
              />
            )
            )}

          </div>
        </div>
      </main> }
      <Footer/>
    </>
  );
}

export default MyQuests;
