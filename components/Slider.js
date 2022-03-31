import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { ClockIcon, CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid'

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider({onQueryChange, onQueryChangePart, sliderage, sliderpart}) {

  return (
    <Box sx={{ width: 300 }} className="w-50 ml-auto mr-10 flex ">
      <Slider
        className="mx-10"
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
        aria-label="Participants"
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