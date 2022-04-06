import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { ClockIcon, CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid'
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';




function valuetext(value) {
  return `${value} Participants`;
}

export default function DiscreteSlider({onQueryChange, onQueryChangePart, sliderage, sliderpart}) {

  return (
    <Box sx={{ width: 150 }} className=" w-25 ml-auto mx-auto">
      <Slider
        className=""
        aria-label="Edats"
        defaultValue={4}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={4}
        marks
        value={sliderage}
        onChange={(event) => {
            onQueryChange(event.target.value)
        }}
        min={4}
        max={18}
      />
      <Slider

        aria-label= "Participants"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={5}
        value={sliderpart}
        onChange={(event) => {
            onQueryChangePart(event.target.value)
        }}
        marks
        min={0}
        max={50}
      />
    </Box>
  );
}