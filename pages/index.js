import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";
import EventsSearch from "../components/events/events-search";
import { Fragment } from "react/cjs/react.production.min";

function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <Fragment>
      <EventsSearch />
      <EventList items={featuredEvents} />
    </Fragment>
  );
}

export default Home;
