import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';
import Player from 'src/components/player/player';
import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function VideoLive() {
  const theme = useTheme();

  return (
    <Container
      id="live"
      component={MotionViewport}
      sx={{
        position: 'relative',
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={{ md: 3 }} justifyContent="center">
        <Grid xs={12} md={8}>
          <m.div variants={varFade().in}>
            <Typography pb={5} variant="h2" sx={{ textAlign: 'center' }}>
              Suivre en Direct
            </Typography>
          </m.div>

          <Box
            sx={{
              height: '50vh',
            }}
          >
            <Player controls url={'/'} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
