import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/EventList'
export default function StartingPage() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}