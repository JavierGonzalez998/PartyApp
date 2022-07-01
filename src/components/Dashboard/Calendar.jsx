import React from 'react'
import '@fullcalendar/react/dist/vdom';
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
import esLocale from '@fullcalendar/core/locales/es';
const Calendar = (props) => {
    const {events, onClickEvent} = props
    const handleClick = (value) => {
        onClickEvent(value.event.id);
    }
  return (
    <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        locale={esLocale}
        aspectRatio={1.8}
        events={events}
        eventClick={handleClick}
      />
  )
}

export default Calendar