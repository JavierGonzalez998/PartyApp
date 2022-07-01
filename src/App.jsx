import * as React from 'react'
import Hero from './components/index/hero'
import img2 from './images/pexels-abet-llacer-919734.jpg'
import { Grid, Box, Paper, Typography, Button } from '@mui/material'
import { index } from './data/index'
import CssBaseline from "@mui/material/CssBaseline"
function App() {

  return (
    <Box className="App" component="div" sx={{
      width: 1,
      height: '100vh'
    }}>
      <CssBaseline />
      <Hero/>
      <Grid container sx={{
        width: 1,
        height: 1
      }}>
        <Grid item xs={12} md={6} sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingLeft: "2%"
        }}>
          <Typography variant='h6'>
            {index.section1.title}
          </Typography>
          <Typography variant='body1'>
            {index.section1.subtitile}
          </Typography>
          <Button variant='contained' color='secondary'>
            {index.section1.button.caption}
          </Button>
        </Grid>
        <Grid
          component={Paper}
          item
          xs={false}
          md={6}
          sx={{
            backgroundImage: `url(${img2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1
          }}
        />
      </Grid>
    </Box>
  )
}

export default App
