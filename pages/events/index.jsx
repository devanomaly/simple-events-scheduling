import { useRouter } from "next/dist/client/router"
import { getAllEvents } from "../../dummy-data"
import EventList from "../../components/events/event-list"
import EventsSearch from "../../components/events/events-search"

export default function EventsPage() {
  const router = useRouter()
  const events = getAllEvents()

  const filteredNavigationHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`

    router.push(fullPath)
  }

  return (
    <div>
      <EventsSearch onSearch={filteredNavigationHandler} />
      <EventList items={events} />
    </div>
  )
}