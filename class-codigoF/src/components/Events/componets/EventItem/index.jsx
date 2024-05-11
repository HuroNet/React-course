import "./styles.css";

const EventItem = ({ id, info, name, image, onEventclick }) => {
  const handleSeeMoreClick = (event) => {
    event.stopPropagation();
    onEventclick(id);
  };

  return (
    <div className="event-item-container">
      <img src={image} alt={name} width={200} height={200}></img>
      <div className="event-info-container">
        <h4 className="event-name">{name}</h4>
        <p className="event-info">{info}</p>
        <button className="see-more-button" onClick={handleSeeMoreClick}>Ver mas</button>
      </div>
    </div>
  );
};
export default EventItem;
