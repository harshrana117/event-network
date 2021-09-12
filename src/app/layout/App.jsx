import React from "react";
import EventDashboard from "../../features/events/eventsDashboard/EventDashboard";
import Navbar from "../../features/navbar/Navbar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router";
import EventForm from "../../features/events/eventForm/EventForm";
import EventDetailedPage from "../../features/events/eventDetailed/eventDetailedPage";
import HomePage from "../../features/home/HomePage";

function App() {

  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Navbar />
            <Container className="main">
              <Route path="/events" exact component={EventDashboard} />
              <Route path="/events/:id" exact component={EventDetailedPage} />
              <Route path={['createEvent', '/manage/:id']} exact component={EventForm} />
            </Container>
          </>
        )}
      />

      {/* <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectedEvent}
          selectedEvent={selectedEvent}
        /> */}
    </>
  );
}

export default App;
