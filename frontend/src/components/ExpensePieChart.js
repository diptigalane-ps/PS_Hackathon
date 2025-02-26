import * as React from 'react';
import PropTypes from 'prop-types';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { formatAmount } from '../utils/utils';

const StyledText = styled('text', {
  shouldForwardProp: (prop) => prop !== 'variant',
})(({ theme }) => ({
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fill: (theme.vars || theme).palette.text.secondary,
  variants: [
    {
      props: {
        variant: 'primary',
      },
      style: {
        fontSize: theme.typography.h5.fontSize,
      },
    },
    {
      props: ({ variant }) => variant !== 'primary',
      style: {
        fontSize: theme.typography.body2.fontSize,
      },
    },
    {
      props: {
        variant: 'primary',
      },
      style: {
        fontWeight: theme.typography.h5.fontWeight,
      },
    },
    {
      props: ({ variant }) => variant !== 'primary',
      style: {
        fontWeight: theme.typography.body2.fontWeight,
      },
    },
  ],
}));

function PieCenterLabel({ primaryText, secondaryText }) {
  const { width, height, left, top } = useDrawingArea();
  const primaryY = top + height / 2 - 10;
  const secondaryY = primaryY + 24;

  return (
    <React.Fragment>
      <StyledText variant="primary" x={left + width / 2} y={primaryY}>
        {primaryText}
      </StyledText>
      <StyledText variant="secondary" x={left + width / 2} y={secondaryY}>
        {secondaryText}
      </StyledText>
    </React.Fragment>
  );
}

PieCenterLabel.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};

const colors = [
  'hsl(10, 90%, 10%)',
  'hsl(15, 90%, 15%)',
  'hsl(20, 90%, 20%)',
  'hsl(25, 90%, 25%)',
  'hsl(30, 90%, 30%)',
  'hsl(35, 90%, 35%)',
  'hsl(40, 90%, 40%)',
  'hsl(45, 90%, 45%)',
  'hsl(50, 90%, 50%)',
  'hsl(100, 90%, 55%)',
  'hsl(200, 90%, 60%)',
  'hsl(300, 90%, 65%)',
  'hsl(300, 90%, 0%)',
  'hsl(300, 90%, 20%)',
  'hsl(300, 90%, 40%)',
  'hsl(300, 90%, 90%)',


];

export default function ExpensePieChart({data, percentage}) {
  const formattedTotalValue = data.reduce((sum, item) => sum + item.value, 0);

    console.log(data)

  return (
    <Card
      variant="outlined"
      sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PieChart
            colors={colors}
            margin={{
              left: 80,
              right: 80,
              top: 80,
              bottom: 80,
            }}
            series={[
              {
                data,
                innerRadius: 75,
                outerRadius: 100,
                paddingAngle: 0,
                highlightScope: { faded: 'global', highlighted: 'item' },
              },
            ]}
            height={260}
            width={260}
            slotProps={{
              legend: { hidden: true },
            }}
          >
            <PieCenterLabel primaryText={formatAmount(formattedTotalValue)} secondaryText="Total" />
          </PieChart>
        </Box>
        {percentage.map((data, index) => (
          <Stack
            key={index}
            direction="row"
            sx={{ alignItems: 'center', gap: 2, pb: 2 }}
          >
            <Stack sx={{ gap: 1, flexGrow: 1 }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                  {data.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {data.value}%
                </Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                aria-label="Number of users by country"
                value={data.value}
                sx={{
                  [`& .${linearProgressClasses.bar}`]: {
                    backgroundColor: data.color,
                  },
                }}
              />
            </Stack>
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
}