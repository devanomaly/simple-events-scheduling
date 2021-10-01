import EventItem from "./EventItem"
import styles from "./EventList.module.css"

export default function EventList(props) {
  const { items } = props
  return (
    <ul className={styles.list}>
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