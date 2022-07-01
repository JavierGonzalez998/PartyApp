import React from 'react'
import Accordion from '@mui/material/Accordion';
import { Box } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { dataContext } from '../../context/context';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getEventsSuscribed } from '../../connection/events';
import { verifyResultCode } from '../../utils/utils';
const Events = () => {
    const { userData } = React.useContext(dataContext);
    const [suscribedEvents, setSuscribedEvents] = React.useState([]);
    const fetchUserSuscribed = React.useCallback(async () => {
        const res = await getEventsSuscribed(userData.userId);
        if (verifyResultCode(res.codigo)) {
            setSuscribedEvents(res.data);
        }
    }, [])

    return (
        <Box component="div" sx={{mx:3}}>
            <Typography variant="h6" textAlign="center" sx={{ marginBottom: 1 }}>Eventos suscritos</Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion disabled>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
            </Accordion>
        </Box>
    )
}

export default Events