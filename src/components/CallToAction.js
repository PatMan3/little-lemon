import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta__content">
        <h1 className="cta__title">Little Lemon</h1>
        <h2 className="cta__subtitle">Chicago</h2>
        <p className="cta__description">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/booking" className="cta__button">
          Reserve a Table
        </Link>
      </div>
      <div className="cta__image-wrap">
        <div className="cta__image-placeholder">
          <span>🍽️</span>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;