import { useRouter } from "next/dist/client/router"
import { getEventById } from "../../dummy-data"
import EventSummary from "../../components/event-detail/event-summary"
import EventLogistics from "../../components/event-detail/event-logistics"
import EventContent from "../../components/event-detail/event-content"
import ErrorAlert from "../../components/UI/error-alert/error-alert"

export default function SelectedEvent() {
  const router = useRouter()
  // let's get the event id!
  const eventID = router.query.eventID
  // let's get the event itself
  const event = getEventById(eventID)
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found =/</p>
      </ErrorAlert>
    )
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  )
}