import EventItem from "./event-item"
import classes from "./event-list.module.css"

export default function EventList(props) {
  const { items } = props
  return (
    <ul className={classes.list}>
      {items.map(event => (
        <li key={event.id}>
          <EventItem
            id={event.id}
            title={event.title}
            location={event.location}
            image={event.image}
            date={event.date}
          /></li>)
      )}
    </ul>
  )
}