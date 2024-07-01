import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Carousel, { useCarousel } from 'src/components/carousel';

import cdti from '../../../public/assets/images/company/cdti.jpg';
import cdtiA from '../../../public/assets/images/company/cdtiA.png';
import esith from '../../../public/assets/images/company/LOGO_ESITH.png';
import mic from '../../../public/assets/images/company/logo-mic-2022-fr.png';
// ----------------------------------------------------------------------

export default function Partenrs() {
  const mdUp = useResponsive('up', 'md');

  const carousel = useCarousel({
    slidesToShow: mdUp ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  });

  return (
    <Container
      id="partenaires"
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h2">Partenaires institutionnels</Typography>
      </Stack>

      <Carousel {...carousel.carouselSettings}>
        <Box sx={{ px: 0.5 }}>
          <Image
            alt={mic.src}
            src={mic.src}
            sx={{
              width: 'auto',
              height: mdUp ? 90 : 50,
              mx: 'auto',
            }}
          />
        </Box>
        <Box sx={{ px: 0.5 }}>
          <Image
            alt={esith.src}
            src={esith.src}
            sx={{
              width: 'auto',
              height: mdUp ? 90 : 50,
              mx: 'auto',
            }}
          />
        </Box>
        <Box
          sx={{
            px: 0.5,
          }}
        >
          <Image
            alt={cdti.src}
            src={cdti.src}
            sx={{
              width: 'auto',
              height: mdUp ? 90 : 50,
              mx: 'auto',
            }}
          />
        </Box>
        <Box
          sx={{
            px: 0.5,
          }}
        >
          <Image
            alt={cdtiA.src}
            src={cdtiA.src}
            sx={{
              width: 'auto',
              height: mdUp ? 90 : 50,
              mx: 'auto',
            }}
          />
        </Box>
      </Carousel>
    </Container>
  );
}
