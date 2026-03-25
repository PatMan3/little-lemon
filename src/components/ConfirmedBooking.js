import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <section className="booking">
      <div className="booking__success">
        <span className="booking__success-icon">🎉</span>
        <h2 className="booking__success-title">Reservation Confirmed!</h2>
        <p className="booking__success-msg">
          Thank you for your reservation. We look forward to seeing you at Little Lemon!
        </p>
        <Link to="/" className="booking__reset-btn">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;