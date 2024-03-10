import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import BookingForm from '../../components/booking-form/booking-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getQuest } from '../../store/quest-data/selectors';
import { fetchBookingPlaceAction } from '../../store/api-action';
import { getBookingPlaces, getFetchingStatusBookingPlace } from '../../store/booking-place/seletors';
import { RequestStatus } from '../../const';

function Booking():JSX.Element {

  const {id: questId} = useParams();

  const quest = useAppSelector(getQuest);
  const bookingPlaces = useAppSelector(getBookingPlaces);
  const isBookingPlaceDataLoading = useAppSelector(getFetchingStatusBookingPlace);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (questId) {
      dispatch(fetchBookingPlaceAction(questId));
    }
  }, [dispatch, questId]);

  return(
    <>
      <Helmet>
        <title>{ `Booking: ${ quest ? quest.title : '' }` }</title>
      </Helmet>
      <Header/>
      {isBookingPlaceDataLoading === RequestStatus.Success && bookingPlaces && quest &&
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet= { quest.coverImgWebp }
            />
            <img
              src={ quest.coverImg }
              srcSet={ `${quest.coverImg } 2x` }
              width={1366}
              height={1959}
              alt= { quest.title }
            />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">
      Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">
              { quest.title }
            </p>
          </div>
          <BookingForm
            bookingPlaces={ bookingPlaces }
            quest={ quest }
          />
        </div>
      </main>}
      <Footer/>
    </>
  );
}

export default Booking;
