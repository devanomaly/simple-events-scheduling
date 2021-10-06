import { useRouter } from "next/dist/client/router"
import { getFilteredEvents } from "../../dummy-data"
import EventList from "../../components/events/event-list"
import ResultsTitle from "../../components/results-title/results-title"
import Button from "../../components/UI/button"
import ErrorAlert from "../../components/UI/error-alert/error-alert"

export default function FilteredEvents() {
  const router = useRouter()

  const filterData = router.query.slug
  if (!filterData) {
    // in the first rendering, filterData's gonna be undefined!
    return <p className="center">Loading...</p>
  }
  const year = +filterData[0]
  const month = +filterData[1]
  console.log("year", year);

  if (isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12) {
    return (
      <>
          <ErrorAlert>
            Invalid filter.
          </ErrorAlert>
        <p className="center">
          <Button link="/events">Show All events</Button>
        </p>
      </>
    )
  }

  const filteredEvents = getFilteredEvents({ year, month })
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All events</Button>
        </div>
      </>
    )
  }
  const date = new Date(year, month - 1)
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  )
}