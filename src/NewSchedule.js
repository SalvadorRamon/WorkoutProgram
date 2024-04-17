import Box from '@mui/material/Box';
import * as React from 'react';
import './Schedule.css';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

function R(x) {
  return Math.ceil(x / 5) * 5;
}

const backup = (data) => [
  ['Day 1', createSet(10, R(data.value * 0.480627088)), createSet(10, R(data.value * 0.553238866)), createSet(10, R(data.value * 0.610323887)), createSet(10, R(data.value * 0.667847227)), createSet(10, R(data.value * 0.721184819))],
  ['Day 2', createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.553238866)), createSet(8, R(data.value * 0.610323887)), createSet(8, R(data.value * 0.666295547)), createSet(8, R(data.value * 0.723380567)), createSet(8, R(data.value * 0.780465587))],
  ['Day 3', createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.553238866)), createSet(6, R(data.value * 0.610323887)), createSet(6, R(data.value * 0.723380567)), createSet(6, R(data.value * 0.780465587)), createSet(6, R(data.value * 0.850708502))],
  ['Day 4', createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.553238866)), createSet(5, R(data.value * 0.702530364)), createSet(5, R(data.value * 0.801315789)), createSet(5, R(data.value * 0.8298583)), createSet(5, R(data.value * 0.850708502)), createSet(5, R(data.value * 0.872672065))],
  ['Day 5', createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.553238866)), createSet(5, R(data.value * 0.702530364)), createSet(5, R(data.value * 0.801315789)), createSet(5, R(data.value * 0.8298583)), createSet(5, R(data.value * 0.850708502)), createSet(5, R(data.value * 0.850708502))],
  ['Day 6', createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.645445344)), createSet(6, R(data.value * 0.723380567)), createSet(4, R(data.value * 0.801315789)), createSet(4, R(data.value * 0.8298583)), createSet(4, R(data.value * 0.850708502)), createSet(4, R(data.value * 0.907793522))],
  ['Day 7', createSet(10, R(data.value * 0.518117409)), createSet(8, R(data.value * 0.645445344)), createSet(6, R(data.value * 0.702530364)), createSet(4, R(data.value * 0.850708502)), createSet(3, R(data.value * 0.88694332)), createSet(2, R(data.value * 0.907793522)), createSet(1, R(data.value * 0.964878543))],
  ['Day 8', createSet(10, R(data.value * 0.518117409)), createSet(8, R(data.value * 0.645445344)), createSet(6, R(data.value * 0.723380567)), createSet(4, R(data.value * 0.88694332)), createSet(3, R(data.value * 0.922064777)), createSet(2, R(data.value * 0.964878543)), createSet(1, R(data.value * 1.014271255))],
  ['Day 9', createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.645445344)), createSet(6, R(data.value * 0.780465587)), createSet(4, R(data.value * 0.850708502)), createSet(3, R(data.value * 0.94291498)), createSet(2, R(data.value * 1.035121457)), createSet(1, R(data.value * 1.05708502))]
]

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
    sets: [ createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.553238866)), createSet(6, R(data.value * 0.610323887)), createSet(6, R(data.value * 0.723380567)), createSet(6, R(data.value * 0.780465587)), createSet(6, R(data.value * 0.850708502))]
  },
  {
    day: 'Day 4',
    sets: [ createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.553238866)), createSet(5, R(data.value * 0.702530364)), createSet(5, R(data.value * 0.801315789)), createSet(5, R(data.value * 0.8298583)), createSet(5, R(data.value * 0.850708502)), createSet(5, R(data.value * 0.872672065))]
  },
  {
    day: 'Day 5',
    sets: [createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.553238866)), createSet(5, R(data.value * 0.702530364)), createSet(5, R(data.value * 0.801315789)), createSet(5, R(data.value * 0.8298583)), createSet(5, R(data.value * 0.850708502)), createSet(5, R(data.value * 0.850708502))]
  },
  {
    day: 'Day 6',
    sets: [ createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.645445344)), createSet(6, R(data.value * 0.723380567)), createSet(4, R(data.value * 0.801315789)), createSet(4, R(data.value * 0.8298583)), createSet(4, R(data.value * 0.850708502)), createSet(4, R(data.value * 0.907793522))]
  },
  {
    day: 'Day 7',
    sets: [createSet(10, R(data.value * 0.518117409)), createSet(8, R(data.value * 0.645445344)), createSet(6, R(data.value * 0.702530364)), createSet(4, R(data.value * 0.850708502)), createSet(3, R(data.value * 0.88694332)), createSet(2, R(data.value * 0.907793522)), createSet(1, R(data.value * 0.964878543))]
  },
  {
    day: 'Day 8',
    sets: [createSet(10, R(data.value * 0.518117409)), createSet(8, R(data.value * 0.645445344)), createSet(6, R(data.value * 0.723380567)), createSet(4, R(data.value * 0.88694332)), createSet(3, R(data.value * 0.922064777)), createSet(2, R(data.value * 0.964878543)), createSet(1, R(data.value * 1.014271255))]
  },
  {
    day: 'Day 9',
    sets: [createSet(10, R(data.value * 0.481882591)), createSet(8, R(data.value * 0.645445344)), createSet(6, R(data.value * 0.780465587)), createSet(4, R(data.value * 0.850708502)), createSet(3, R(data.value * 0.94291498)), createSet(2, R(data.value * 1.035121457)), createSet(1, R(data.value * 1.05708502))]
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
    <Container >
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