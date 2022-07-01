import React from 'react'
import {index} from '../../data/index/index'
import image from '../../images/pexels-matheus-bertelli-2608517.jpg'
import { Grid, Typography } from '@mui/material'
const Hero = () => {
  return (
    <Grid container sx={{
        width: 1,
        height: 1
      }}>
        <Grid
          item
          xs={12}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "darken",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1
          }}
        >
          <Typography variant="h1" sx={{
            zIndex: 10000,
            color: "white"
          }}>{index.title}</Typography>
          <Typography variant="h5" sx={{
            zIndex: 10000,
            color: "white"
          }}>
            {index.subtitile}
          </Typography>
        </Grid>
      </Grid>
  )
}

export default Hero