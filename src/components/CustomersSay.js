const testimonials = [
  {
    id: 1,
    name: 'Maria G.',
    rating: 5,
    review:
      'Absolutely incredible food! The Greek Salad was fresh and vibrant. The atmosphere felt like being in the Mediterranean itself. Will definitely be coming back!',
    avatar: '👩',
  },
  {
    id: 2,
    name: 'James T.',
    rating: 5,
    review:
      'The lemon dessert is to die for. Family recipes really make the difference — you can taste the love. Service was warm and attentive.',
    avatar: '👨',
  },
  {
    id: 3,
    name: 'Priya S.',
    rating: 4,
    review:
      'Fantastic bruschetta and a cozy vibe. Great for a date night or a family dinner. The staff are super friendly and the portion sizes are generous.',
    avatar: '👩‍🦱',
  },
  {
    id: 4,
    name: 'Carlos R.',
    rating: 5,
    review:
      'Little Lemon is our go-to spot in Chicago. Consistent quality, authentic flavours, and a charming setting. Highly recommend the specials menu!',
    avatar: '🧔',
  },
];

function StarRating({ rating }) {
  return (
    <div className="testimonial-card__stars">
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          className={`testimonial-card__star${star <= rating ? ' testimonial-card__star--filled' : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <article className="testimonial-card">
      <StarRating rating={item.rating} />
      <div className="testimonial-card__author">
        <span className="testimonial-card__avatar">{item.avatar}</span>
        <span className="testimonial-card__name">{item.name}</span>
      </div>
      <p className="testimonial-card__review">"{item.review}"</p>
    </article>
  );
}

function CustomersSay() {
  return (
    <section className="customers-say">
      <h2 className="customers-say__heading">What our customers say!</h2>
      <div className="customers-say__grid">
        {testimonials.map(t => (
          <TestimonialCard key={t.id} item={t} />
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;