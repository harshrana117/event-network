import React from "react";
import EventListItem from "./EventListItem";

export default function EventList({ events, selectEvent, deleteEvent }) {
  return (
    <>
      {events.map((evnt) => (
        <EventListItem
          event={evnt}
          key={evnt.id}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  );
}
