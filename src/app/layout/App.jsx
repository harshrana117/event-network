import React from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventsDashboard/EventDashboard";
import Navbar from "../../features/navbar/Navbar";

function App() {
  return (
    <>
      <h1>Re-vents</h1>
      <Navbar />
      <Container className='main'>
        <EventDashboard />
      </Container> 
    </>
  );
}

export default App;
