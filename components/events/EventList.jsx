import EventItem from "./EventItem"
import styles from "./EventList.module.css"

export default function EventList(props) {
  const { items } = props
  return (
    <ul className={styles.list}>
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