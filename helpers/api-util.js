export async function getAllEvents() {
  const response = await fetch(process.env.DATABASE);
  const data = await response.json();
}

export async function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}
