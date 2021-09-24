import EventItem from "./EventItem"

export default function EventList(props) {
  const { items } = props
  return (
    <ul>
      {items.map(event => <li>
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          image={event.image}
          date={event.date}
        /></li>)}
    </ul>
  )
}