import { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const isFormValid = date !== '' && time !== '' && guests >= 1 && guests <= 10;

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_DATE', date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, time, guests, occasion });
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-label="Table Reservation"
    >
      <div className="booking__field">
        <label className="booking__label" htmlFor="res-date">
          Choose date
        </label>
        <input
          id="res-date"
          type="date"
          className="booking__input"
          value={date}
          onChange={handleDateChange}
          required
          aria-required="true"
        />
      </div>

      <div className="booking__field">
        <label className="booking__label" htmlFor="res-time">
          Choose time
        </label>
        <select
          id="res-time"
          className="booking__input"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-required="true"
        >
          <option value="">Select a time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="booking__field">
        <label className="booking__label" htmlFor="guests">
          Number of guests
        </label>
        <input
          id="guests"
          type="number"
          className="booking__input"
          placeholder="1"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          required
          aria-required="true"
        />
      </div>

      <div className="booking__field">
        <label className="booking__label" htmlFor="occasion">
          Occasion
        </label>
        <select
          id="occasion"
          className="booking__input"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      {!isFormValid && (
        <p style={{ color: '#c0392b', fontSize: '0.85rem', marginTop: 0 }}>
          Please fill out all required fields correctly to proceed.
        </p>
      )}

      <button
        type="submit"
        className="booking__submit-btn"
        disabled={!isFormValid}
        aria-label="On Click"
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;