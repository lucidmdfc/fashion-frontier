import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';

import Image from 'src/components/image';

import leanup from '../../../public/assets/logo/leanup.png';
import getVariant from '../examples/animate-view/get-variant';
import grament from '../../../public/assets/logo/grament.png';

// ----------------------------------------------------------------------

export default function Hero() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  return (
    <Box
      {...getVariant('kenburnsTop')}
      sx={{
        overflow: 'hidden',
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.6),
          imgUrl: '/assets/background/bg1.svg',
        }),
        objectFit: 'cover',
      }}
    >
      <Container
        sx={{
          py: 15,
          display: { md: 'flex' },
          alignItems: { md: 'center' },
          height: { md: `100vh` },
        }}
      >
        <Grid
          container
          alignItems="center"
          columnSpacing={{ xs: 0, md: 15 }}
          rowSpacing={{
            xs: 10,
            md: 15,
          }}
        >
          <Grid
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h1" sx={{ mt: 3, lineHeight: 1.2 }}>
              Le 1
              <Typography variant="caption" fontSize={25} style={{ verticalAlign: 'super' }}>
                {' '}
                er
              </Typography>{' '}
              Forum de{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                {`l'Innovation `}
              </Box>{' '}
              dans les industries de{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                {`  la Mode`}
              </Box>{' '}
            </Typography>

            <Typography variant="h6" fontWeight="400">
              Repositionner les industries de la mode sur les metiers de l’avenir
            </Typography>

            <Stack
              spacing={3}
              direction={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'center', md: 'unset' }}
              justifyContent={{ xs: 'center', md: 'unset' }}
              sx={{ mt: 5 }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  color: 'black',
                }}
              >
                Le Programme
              </Button>
            </Stack>
          </Grid>
          <Grid
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {' '}
            <Stack>
              <Stack
                flexDirection="row"
                justifyContent={{ xs: 'center', md: 'start' }}
                alignItems="end"
                gap={1}
              >
                <Typography variant="h1">03</Typography>
                <Stack>
                  <Typography variant="h4" fontWeight="400">
                    Juillet
                  </Typography>
                  <Typography variant="h4" fontWeight="400">
                    2024
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="h2" fontWeight="400">
                HOTEL{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  IDOU ANFA
                </Box>{' '}
                <Typography variant="h1" fontWeight="400">
                  CASABLANCA
                </Typography>
              </Typography>
            </Stack>
            <Stack mt={1} gap={1} direction="row" justifyContent={mdUp ? 'start' : 'center'}>
              <Box sx={{ px: 1.5, borderRadius: 2 }}>
                <Image
                  alt={leanup.src}
                  src={leanup.src}
                  sx={{
                    width: 106,
                    height: 50,
                    mx: 'auto',
                  }}
                />
              </Box>
              <Box sx={{ px: 0 }}>
                <Image
                  alt={grament.src}
                  src={grament.src}
                  sx={{
                    width: 106,
                    height: 50,
                    mx: 'auto',
                  }}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
