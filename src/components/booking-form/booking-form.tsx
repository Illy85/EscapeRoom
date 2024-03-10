import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BookingPlace, BookingQuest, Quest } from '../../types/quest';
import { useAppDispatch } from '../../hooks';
import { AppRoute, EngQuestDate } from '../../const';
import { addToBookedQuests } from '../../store/api-action';
import { getFirstNumber, getLastNumber } from '../../utils/util';
import Map from '../map/map';
import { LeafletMouseEvent } from 'leaflet';

type BookingFormProps = {
  bookingPlaces: BookingPlace[];
  quest: Quest;
}

function BookingForm({ bookingPlaces, quest }: BookingFormProps) {

  const firstBookingPlace = bookingPlaces.slice()[0];

  const [initialBookingPlace, setSelectedBookingPlace] = useState (firstBookingPlace);
  const [questAdress, setQuestAdress] = useState(firstBookingPlace.location.address);
  const { register, handleSubmit, formState: {errors}, setValue } = useForm<BookingQuest>();

  const regexName = /^(?=.*[A-Za-z])(?=.*)[A-Za-z]{1,15}$/g;
  const regexPhone = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/g;
  const MIN_PARTICIPANTS = getFirstNumber(quest.peopleMinMax);
  const MAX_PARTICIPANTS = getLastNumber(quest.peopleMinMax);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleMarkerClick = (evt: LeafletMouseEvent) => {
    const targetCoords = Object.values(evt.latlng);
    const targetArray = bookingPlaces.filter((place)=> place.location.coords[0] === targetCoords[0]
    && place.location.coords[1] === targetCoords[1])[0];
    setQuestAdress(targetArray.location.address);
    setSelectedBookingPlace(targetArray);
    setValue('placeId', targetArray.id);
  };

  const handleTimeInput = (event: ChangeEvent<HTMLInputElement>) => setValue('time', event.target.id.slice(0, 5));


  const onSubmit: SubmitHandler<BookingQuest> = (data) => {
    dispatch(addToBookedQuests({bookingData: data, questId: quest.id}));
    navigate(AppRoute.MyQuests);
  };

  return(
    <>
      <Map
        places={bookingPlaces}
        location={firstBookingPlace.location}
        onMarkerClick={ handleMarkerClick }
      />
      <div>
        <p className="booking-map__address">
Вы&nbsp;выбрали: { questAdress }
        </p>
      </div>
      <br/>
      <form
        className="booking-form"
        {...register('placeId', {value: initialBookingPlace.id})}
        onSubmit={ (evt)=> void handleSubmit(onSubmit)(evt) }
      >
        <fieldset className="booking-form__section">
          <fieldset className="booking-form__date-section">
            <legend className="booking-form__date-title">Сегодня</legend>
            <div className="booking-form__date-inner-wrapper">
              { initialBookingPlace.slots.today.map((item, i) =>{
                const keyValue = `${item.time}-${i}`;
                return(
                  <label key={keyValue} className="custom-radio booking-form__date">
                    <input
                      type="radio"
                      id= {item.time.concat(', today')}
                      {...register('date')}
                      value={ EngQuestDate.Today }
                      onChange={ handleTimeInput }
                      disabled={ !item.isAvailable }
                    />
                    <span className="custom-radio__label">{ item.time }</span>
                  </label>
                );
              }
              )}
            </div>
          </fieldset>
          <fieldset className="booking-form__date-section">
            <legend className="booking-form__date-title">Завтра</legend>
            <div className="booking-form__date-inner-wrapper">
              { initialBookingPlace.slots.tomorrow.map((item, i) =>{
                const keyValue = `${item.time}-${i}`;
                return(
                  <label key={keyValue} className="custom-radio booking-form__date">
                    <input
                      type="radio"
                      id= { item.time.concat(', tomorrow') }
                      {...register('date')}
                      value={ EngQuestDate.Tomorrow }
                      onChange={ handleTimeInput }
                      disabled={ !item.isAvailable }
                    />
                    <span className="custom-radio__label">{ item.time }</span>
                  </label>
                );
              }
              )}
            </div>
          </fieldset>
        </fieldset>
        <fieldset className="booking-form__section">
          <legend className="visually-hidden">Контактная информация</legend>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="name">Ваше имя</label>
            <input
              type="text"
              id="name"
              {...register('contactPerson', {required: true, pattern: regexName})}
              autoComplete='name'
              placeholder="Имя"
            />
            {errors.contactPerson && <span>Введите, пожалуйста, корректное имя</span>}
          </div>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
            <input
              type="tel"
              id="tel"
              {...register('phone', {required: true, pattern: regexPhone})}
              autoComplete='tel'
              placeholder="Телефон"
            />
            {errors.phone && <span>Введите валидный номер телефона</span>}
          </div>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="person">Количество участников</label>
            <input
              type="number"
              id="person"
              {...register('peopleCount', {setValueAs: (value: number)=> Number(value), required: true, min: MIN_PARTICIPANTS, max: MAX_PARTICIPANTS})}
              placeholder="Количество участников"
            />
            {errors.peopleCount && <span>В этом поле должно быть указано конкретное число, не менее минимального ( {MIN_PARTICIPANTS} ) и более максимального количества ( {MAX_PARTICIPANTS} ) участников.</span>}
          </div>
          <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
            <input
              type="checkbox"
              id="children"
              {...register('withChildren')}
            />
            <span className="custom-checkbox__icon">
              <svg width={20} height={17} aria-hidden="true">
                <use xlinkHref="#icon-tick" />
              </svg>
            </span>
            <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
          </label>
        </fieldset>
        <button
          className="btn btn--accent btn--cta booking-form__submit"
          type="submit"
        >Забронировать
        </button>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
          <input
            type="checkbox"
            id="id-order-agreement"
            name="user-agreement"
            required
          />
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span>
          <span className="custom-checkbox__label">Я&nbsp;согласен с
            <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных
            </a>&nbsp;и пользовательским соглашением
          </span>
        </label>
      </form>
    </>
  );
}

export default BookingForm;
