export async function getAllEvents() {
  const response = await fetch(process.env.DATABASE);
  const data = await response.json();

  const events = [];

  for (let key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
