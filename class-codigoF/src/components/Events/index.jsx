import { useState } from "react";
import useEventsData from "../../hooks/useEventsData";
import EventItem from "./componets/EventItem";

const Events = ({ searchTerm }) => {
const {events, isLoading,error}=useEventsData();

  const handleEventItenClick = (id) => {
    console.log("evento clic:", id);
  };

  const renderEvents = () => {
    let eventsFiltered = events;
    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchTerm)
      );
    }

    return eventsFiltered.map((eventItem) => (
      <EventItem
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventclick={handleEventItenClick}
        id={eventItem.id}
      />
    ));
  };

  if (error){
    return
    <div>
      Ha ocurrido un error
    </div>
  }
  if (isLoading){
    return <div>
      Cargando Resultados.....
    </div>
  }
  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  );
};
export default Events;
