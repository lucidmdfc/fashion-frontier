import { Stack, alpha, StackProps } from '@mui/material';

import ProductCountdownBlock from './common/product-countdown-block';

interface SpecialOfferCountdownProps extends StackProps {
  expired: Date;
  label: string;
  name: string;
  price: string;
}

function SpecialOfferCountdown({
  expired,
  label,
  name,
  price,
  sx,
  ...other
}: SpecialOfferCountdownProps) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        p: 0,
        borderRadius: 2,
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    >
      <ProductCountdownBlock
        expired={expired}
        sx={{
          '& .value': {
            color: 'text.primary',
            bgcolor: 'transparent',
            border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,
          },
          '& .label': { color: 'text.secondary' },
          '& .separator': { color: 'inherit' },
        }}
      />
    </Stack>
  );
}

export default function CountDown() {
  // Set the specific expiration date here
  const specificDate = new Date('2024-07-04T09:00:00');

  return (
    <SpecialOfferCountdown
      label="New 2022"
      name="Apple iPhone 14"
      price="From $999"
      expired={specificDate}
    />
  );
}
