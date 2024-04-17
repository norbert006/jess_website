import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import axios from 'axios';
import './Calendar.css'; // Import CSS file for custom styles

const BookingCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [sessionType, setSessionType] = useState('');
  const [noOfPeople, setNoOfPeople] = useState("");
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [bookedDates, setBookedDates] = useState([]);
  const [firstNameInputRef, setFirstNameInputRef] = useState('');
  const [lastNameInputRef, setLastNameInputRef] = useState('');
  const [emailInputRef, setEmailInputRef] = useState('');


  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('https://clayful-backend.onrender.com/api/booking');
        const bookings = response.data;
        const dates = bookings.map((booking) => new Date(booking.date));
        setBookedDates(dates);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, []);

  const handleBooking = async () => {
    try {
      await axios.post("https://clayful-backend.onrender.com/api/booking", {
        date,
        sessionType,
        noOfPeople,
        name: firstNameInputRef,
        surname: lastNameInputRef,
        email: emailInputRef
      });
      setIsBookingConfirmed(true);
        } catch (error) {
      console.error('Error booking session:', error);
    }
  };

  // noOfPeople, firstNameInputRef, lastNameInputRef, emailInputRef
  const closeModal = () => {
    window.location.reload()
    setIsBookingConfirmed(false);
  };

  const isFormValid = () => {
    const isFilledOut = sessionType !== '' && noOfPeople !== '' &&
      firstNameInputRef !== '' && lastNameInputRef !== '' && emailInputRef !== '' && isDateSelected
    return isFilledOut;
  };

  const isDateBooked = (date) => {
    return bookedDates.some((bookedDate) => bookedDate.getTime() === date.getTime());
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month' && isDateBooked(date)) {
      return 'disabled-date';
    }
    return '';
  };

  return (
    <div className="booking-calendar">
      <h2 className="calendar-heading">Select a date for booking:</h2>
      <Calendar
        onChange={(newDate) => {
          if (newDate.getHours() !== 0) {
            newDate.setHours(0, 0, 0, 0);
            setDate(newDate);
            setIsDateSelected(true);
          } else {
            setDate(newDate);
            setIsDateSelected(true);
          }
          }}
        value={date}
        minDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)} // Optional: Set minimum selectable date to tomorrow.
        tileDisabled={({ date }) => isDateBooked(date)} // Disable booked dates
        tileClassName={tileClassName} // Apply custom styles to disabled dates
      />
      <h2 className="calendar-heading">Select the type of pottery session:</h2>
      <label htmlFor="first_name">First name</label>
      <input
        className='calendar_input'
        type='text'
        value={firstNameInputRef}
        placeholder='Your First Name...'
        onChange={(event) => setFirstNameInputRef(event.target.value)}
        required
      />
      <label htmlFor="last_name">Last name</label>
      <input
        className='calendar_input'
        type="text"
        value={lastNameInputRef}
        placeholder='Your Last Name...'
        onChange={(event) => setLastNameInputRef(event.target.value)}
        required
      />
      <label htmlFor="user_email">Email</label>
      <input
        className='calendar_input'
        type="email"
        value={emailInputRef}
        placeholder='example@gmail.com'
        onChange={(event) => setEmailInputRef(event.target.value)}
        required
      />
      <label>Type of party</label>
      <select value={sessionType} onChange={(event) => setSessionType(event.target.value)} className="session-type-select">
        <option value="" disabled selected>Choose type of session</option>
        <option value="Hen">Hen Party</option>
        <option value="Birthday">Birthday</option>
        <option value="Pop-up">Pop-up Event</option>
      </select>
      <label>Number of participants</label>
      <select value={noOfPeople} onChange={(event) => setNoOfPeople(event.target.value)} className="session-type-select">
        <option value="" disabled selected>Choose number of participants</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <button onClick={handleBooking} disabled={!isFormValid()} className='custom__button'>Book Session</button>
      <Modal
        className={"react-modal"}
        isOpen={isBookingConfirmed}
        onRequestClose={closeModal}
        contentLabel="Booking Confirmation"
      >
        <h2 className='modal-title'>Booking Confirmed!</h2>
        <p className='modal-message'>You have successfully booked a {sessionType} session for {date.toDateString()}.</p>
        <button onClick={closeModal} className='modal-close-btn'>Close</button>
      </Modal>
    </div>
  );
};

export default BookingCalendar;
