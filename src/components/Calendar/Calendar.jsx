import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import axios from 'axios';
import './Calendar.css'; // Import CSS file for custom styles

const BookingCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [sessionType, setSessionType] = useState('');
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/booking');
        const bookings = response.data;
        const dates = bookings.map((booking) => new Date(booking.date));
        setBookedDates(dates);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);


  const onChangeDate = (newDate) => {
    setDate(newDate);
  };

  const onSelectSessionType = (event) => {
    setSessionType(event.target.value);
  };

  const handleBooking = async () => {
    try {
      await axios.post("http://localhost:8800/api/booking", { date, sessionType });
      setIsBookingConfirmed(true);
    } catch (error) {
      console.error('Error booking session:', error);
    }
  };

  const closeModal = () => {
    setIsBookingConfirmed(false);
  };

  const isFormValid = () => {
    return sessionType !== '';
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
        onChange={onChangeDate}
        value={date}
        minDate={new Date()} // Optional: Set minimum selectable date to today
        tileDisabled={({ date }) => isDateBooked(date)} // Disable booked dates
        tileClassName={tileClassName} // Apply custom styles to disabled dates
      />
      <h2 className="calendar-heading">Select the type of pottery session:</h2>
      <select value={sessionType} onChange={onSelectSessionType} className="session-type-select">
        <option value="" disabled selected>Select your option</option>
        <option value="hen">Hen Party</option>
        <option value="birthday">Birthday</option>
        <option value="popup">Pop-up Event</option>
      </select>
      <button onClick={handleBooking} disabled={!isFormValid()} className='custom__button'>Book Session</button>
      <Modal
        isOpen={isBookingConfirmed}
        onRequestClose={closeModal}
        contentLabel="Booking Confirmation"
      >
        <h2>Booking Confirmed!</h2>
        <p>You have successfully booked a {sessionType} session on {date.toDateString()}.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default BookingCalendar;
