import { memo } from 'react';
import Image from 'next/image';

import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';

import { RouterLink } from 'src/routes/components';

import logo from '../../../public/assets/logo/logo.png';

// ----------------------------------------------------------------------

interface LogoProps extends BoxProps {
  single?: boolean;
}

function Logo({ single = false, sx }: LogoProps) {
  return (
    <Link
      component={RouterLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: single ? 80 : 75,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {/* {single ? singleLogo : fullLogo} */}
        <Image
          src={logo}
          alt=""
          style={{
            maxWidth: 'fit-content',
          }}
          width={100}
          height={60}
        />
      </Box>
    </Link>
  );
}

export default memo(Logo);
