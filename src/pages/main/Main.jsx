import React from 'react'
import { Box, Paper, Grid, Typography } from '@mui/material'
import Calendar from '../../components/Dashboard/Calendar'
import Events from '../../components/Dashboard/events'
import { getAllEvents } from '../../connection/events'
import { verifyResultCode } from '../../utils/utils'
import Details from '../../components/Dashboard/Details'
const Main = () => {
  const [events, setEvents] = React.useState([]);
  const [allEvents, setAllEvents] = React.useState([]);
  const [detailEvent, setDetailEvent] = React.useState([]);
  const [openDetails, setOpenDetails] = React.useState(false);

  const handleClickEvent = value => {
    setDetailEvent(allEvents.filter(item => item.id === parseInt(value)));
    setOpenDetails(true);
  }
  const fetchEvents = React.useCallback(async() => {
    const res = await getAllEvents();
    if(verifyResultCode(res.codigo)){
      setAllEvents(res.data);
      setEvents(res.data.map((item) => {
        return{
          id: item.id,
          title: item.eventName,
          start: item.initialDate,
          end: item.endDate
        }
      }))
    }
  },[events])

  React.useEffect(() => {
    fetchEvents()
  },[])

  return (
    <Box component="div" sx={{
      marginTop: "5em",
      width: 1,
      height: "100vh"
    }}>
      <Grid container sx={{
        width: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Grid item xs={12}>
          <Typography variant="h4" textAlign="center">Eventos</Typography>
        </Grid>
        <Grid item xs={12} sx={{
          display: "flex",
          flexDirection: "row",
          width: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Box component="div" sx={{
            width: 1/4
          }}>
            <Events/>
          </Box>
          <Box component="div" sx={{
            width: 1 / 2
          }}>
            <Calendar events={events} onClickEvent={handleClickEvent}/>
            <Details open={openDetails} onClose={setOpenDetails} event={detailEvent}/>
          </Box>
        </Grid>
      </Grid>

    </Box>
  )
}

export default Main