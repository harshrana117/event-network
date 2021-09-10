import React, {useState} from "react";
import EventDashboard from "../../features/events/eventsDashboard/EventDashboard";
import Navbar from "../../features/navbar/Navbar";
import { Container } from "semantic-ui-react";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);


  function handleSelectedEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }


  return (
    <>
      <h1>Re-vents</h1>
      <Navbar setFormOpen={handleCreateFormOpen}/>
      <Container className='main'>
        <EventDashboard 
          formOpen={formOpen} 
          setFormOpen={setFormOpen}
          selectEvent={handleSelectedEvent}
          selectedEvent={selectedEvent}
        />
      </Container> 
    </>
  );
}

export default App;
