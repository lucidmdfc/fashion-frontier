'use client';

import { useScroll } from 'framer-motion';

import { Box, Stack, alpha, useTheme, Typography } from '@mui/material';

import { bgGradient } from 'src/theme/css';

import ScrollProgress from 'src/components/scroll-progress';

import Hero from '../hero';
import FAQs from '../faqs';
import Context from '../context';
import Partenrs from '../parteners';
import Programme from '../programme';
import CountDown from '../count-down';
import VideoLive from '../video-live';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  const theme = useTheme();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <Hero />
      <Box
        sx={{
          py: {
            ...bgGradient({
              color: alpha(theme.palette.background.default, 0.6),
              imgUrl: '/assets/background/bg2.svg',
            }),
            objectFit: 'cover',
            xs: 10,
          },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 600,
            textAlign: 'Center',
            pb: { xs: 5 },
          }}
        >
          <Typography variant="h2">Save the Date</Typography>
        </Stack>

        <CountDown />
      </Box>
      <VideoLive />

      <Context />

      <Partenrs />

      <Programme />
      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.6),
            imgUrl: '/assets/background/bg1.svg',
          }),
          objectFit: 'cover',

          py: { xs: 10 },
        }}
      >
        <FAQs />
      </Box>
    </>
  );
}
