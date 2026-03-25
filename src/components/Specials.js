const specialsData = [
  {
    id: 1,
    name: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    emoji: '🥗',
    category: 'Salads',
  },
  {
    id: 2,
    name: 'Bruschetta',
    price: '$7.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.',
    emoji: '🍞',
    category: 'Starters',
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: '$6.50',
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    emoji: '🍋',
    category: 'Desserts',
  },
];

function SpecialCard({ item }) {
  return (
    <article className="special-card">
      <div className="special-card__image">
        <span className="special-card__emoji">{item.emoji}</span>
        <span className="special-card__category">{item.category}</span>
      </div>
      <div className="special-card__body">
        <div className="special-card__title-row">
          <h3 className="special-card__name">{item.name}</h3>
          <span className="special-card__price">{item.price}</span>
        </div>
        <p className="special-card__description">{item.description}</p>
        <a href="#order-online" className="special-card__order-btn">
          Order a Delivery 🛵
        </a>
      </div>
    </article>
  );
}

function Specials() {
  return (
    <section className="specials">
      <div className="specials__header">
        <h2 className="specials__heading">This week's specials!</h2>
        <a href="#menu" className="specials__menu-btn">
          Online Menu
        </a>
      </div>
      <div className="specials__grid">
        {specialsData.map(item => (
          <SpecialCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Specials;