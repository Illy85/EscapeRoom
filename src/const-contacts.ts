import { BookingPlace } from './types/quest';

export const ContactsPlace: BookingPlace = {
  id: 'Contacts',
  location: {
    address: '',
    coords: [
      59.968456,
      30.31759
    ]
  },
  slots: {
    today: [
      {
        time: '',
        isAvailable: false
      },
    ],
    tomorrow: [
      {
        'time': '',
        'isAvailable': true
      },
    ]
  }
};
