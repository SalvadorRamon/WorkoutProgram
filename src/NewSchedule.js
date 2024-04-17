import Box from '@mui/material/Box';
import * as React from 'react';
import './Schedule.css';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

function R(x) {
  return Math.ceil(x / 5) * 5;
}

const days = (data) => [
  {
    day: 'Day 1',
    sets: [createSet(10, R(data.value * 0.480627088)), createSet(10, R(data.value * 0.553238866)), createSet(10, R(data.value * 0.610323887)), createSet(10, R(data.value * 0.667847227)), createSet(10, R(data.value * 0.721184819))]
  },
  {
    day: 'Day 2',
    sets: [createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.553238866)), createSet(8, R(data.value * 0.610323887)), createSet(8, R(data.value * 0.666295547)), createSet(8, R(data.value * 0.723380567)), createSet(8, R(data.value * 0.780465587))]
  },
  {
    day: 'Day 3',
    sets: [createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.553238866)), createSet(8, R(data.value * 0.610323887)), createSet(8, R(data.value * 0.666295547)), createSet(8, R(data.value * 0.723380567)), createSet(8, R(data.value * 0.780465587))]
  },
  {
    day: 'Day 4',
    sets: [createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.553238866)), createSet(8, R(data.value * 0.610323887)), createSet(8, R(data.value * 0.666295547)), createSet(8, R(data.value * 0.723380567)), createSet(8, R(data.value * 0.780465587))]
  },
  {
    day: 'Day 5',
    sets: [createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.553238866)), createSet(8, R(data.value * 0.610323887)), createSet(8, R(data.value * 0.666295547)), createSet(8, R(data.value * 0.723380567)), createSet(8, R(data.value * 0.780465587))]
  },
  {
    day: 'Day 6',
    sets: [createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.553238866)), createSet(8, R(data.value * 0.610323887)), createSet(8, R(data.value * 0.666295547)), createSet(8, R(data.value * 0.723380567)), createSet(8, R(data.value * 0.780465587))]
  },
  {
    day: 'Day 7',
    sets: [createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.553238866)), createSet(8, R(data.value * 0.610323887)), createSet(8, R(data.value * 0.666295547)), createSet(8, R(data.value * 0.723380567)), createSet(8, R(data.value * 0.780465587))]
  },
  {
    day: 'Day 8',
    sets: [createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.553238866)), createSet(8, R(data.value * 0.610323887)), createSet(8, R(data.value * 0.666295547)), createSet(8, R(data.value * 0.723380567)), createSet(8, R(data.value * 0.780465587))]
  },
  {
    day: 'Day 9',
    sets: [createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.553238866)), createSet(8, R(data.value * 0.610323887)), createSet(8, R(data.value * 0.666295547)), createSet(8, R(data.value * 0.723380567)), createSet(8, R(data.value * 0.780465587))]
  },
]

function createSet(rep, weight) {
  return (
    <Container >{rep} x {weight} </Container >
  )
}

function createContainer(data) {
  return (
    <Grid xs={4} md={4} sm={8}>
      <Box>
        <Container>{data.day}</Container>
        <Box>
          {data.sets}
        </Box>
      </Box>
    </Grid>
  )
}

const TableDays = (data) => {
  return (
    <Container>
      <Box>
        <Grid container spacing={2}>
          {days(data).map((day, index) => (
            createContainer(day)
          ))}
        </Grid>
      </Box >
    </Container>
  )
}

const NewSchedule = (data) => {
  return (
    <TableDays value={data.value} />
  );
};

export default NewSchedule;