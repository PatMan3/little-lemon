import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking" id="reservations">
      <div className="booking__inner">
        <div className="booking__header">
          <h2 className="booking__title">Reserve a Table</h2>
          <p className="booking__subtitle">
            Join us for an unforgettable Mediterranean dining experience in Chicago.
          </p>
        </div>
        <div className="booking__form-card">
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        </div>
      </div>
    </section>
  );
}

export default BookingPage;