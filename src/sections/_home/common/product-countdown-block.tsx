import { Box } from '@mui/material';
import Stack, { StackProps } from '@mui/material/Stack';

import { useCountdown } from 'src/hooks/use-countdown';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  expired: Date;
  hiddenLabel?: boolean;
}

export default function ProductCountdownBlock({
  expired,
  hiddenLabel = false,
  sx,
  ...other
}: Props) {
  const { days, hours, minutes, seconds } = useCountdown(expired);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
      sx={{ typography: 'h2' }}
    >
      <TimeBlock label="Days" value={days} />

      <TimeBlock label="Hours" value={hours} />

      <TimeBlock label="Minutes" value={minutes} />

      <TimeBlock label="Seconds" value={seconds} />
    </Stack>
  );
}

// ----------------------------------------------------------------------

type TimeBlockProps = {
  label: string;
  value: string;
};

function TimeBlock({ label, value }: TimeBlockProps) {
  return (
    <div>
      <Box> {value} </Box>
      <Box sx={{ color: 'text.secondary', typography: 'body1' }}>{label}</Box>
    </div>
  );
}
// ----------------------------------------------------------------------
