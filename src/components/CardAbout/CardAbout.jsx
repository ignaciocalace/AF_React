function CardAbout({ image, title, description }) {
  return (
    <div className="card-about">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CardAbout;
