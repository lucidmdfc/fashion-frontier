import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import { Chip } from '@mui/material';
import Stack from '@mui/material/Stack';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Container from '@mui/material/Container';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import { alpha, useTheme } from '@mui/material/styles';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    year: 'Panel 1',
    title:
      'Produire du Haut de gamme au Maroc, quelles opportunités pour l’innovation et l’investissement.',
    description:
      'Le Maroc est positionné sur la production des segments Haut de gamme grâce à plusieurs entreprises qui en produisent sur différents produits , cependant , l’image de marque Pays est souvent relayée par la production de la Fast Fashion ,comment renforcer la présence de ce segment dans l’industrie de l’habillement , et quels opportunités pour l’innovation et l’investissement dans ce segment ',
    participants: [
      'Sara Siham Chraibi',
      'Shangai Shugani',
      'Angeline Danglser',
      'Fadwa Mouassif',
      'Philippe Friedman',
    ],
  },
  {
    year: 'Panel 2',
    title:
      'IA et nouvelles technologies : Innover dans la Fashion Tech, une opportunité d’investissement et d’innovation pour les startups locales',
    description:
      'Comment le Maroc peut se positionner dans l’écosystème de la FashionTech ? Entre le Retail et les services technologiques aux entreprises, les incubateurs de startups digitales, ne semblent pas embarqués par les opportunités que représentent les industries de la mode . Comment inverser ce constat ?',
    participants: ['Yassine Wahbi', 'Salma Karim', 'Ahmed Nounou', 'Xavier Planta', 'Hamza Haffar'],
  },
];
const TIMELINES2 = [
  {
    year: 'Panel 3',
    title: ' Technologies du recyclage : Comment positionner le Maroc sur ce segment',
    description:
      'Le Secteur de l’habillement au Maroc , exporte plus de 4 milliard d’Euros, annuellement , cette valeur est appelée à augmenter , ainsi que la valeur ajoutée produite, la problématique de la gestion des déchets, est une problématique écologique, commerciale, et réglementaire , comment transformer cette problématique en opportunité de recherche et d’investissement',
    participants: [
      'Zakaria Ouariachi',
      'Rabia Idrissi Janati',
      'Francisca Aran',
      'Radoine Lachgar',
    ],
  },
  {
    year: 'Panel 4',
    title:
      'Quels ingrédients pour se positionner sur le vêtement et la chaussure de sport du futur ?',
    description:
      'Le Maroc a historiquement produit des vêtements sportifs de haut niveau , Après la migration de ces productions en Asie , l’ère des Social média encourage l’émergence de micro- segments sur cette filière , le marché des innovations dans cette filière est porteur de grandes opportunités , Le Maroc dispose-t-il aujourd’hui des outils nécessaires pour répondre à cette tendance',
    participants: ['Dan bengio', 'Adil Lamini'],
  },
  {
    year: 'Panel 5',
    title:
      'Les biotechnologies, voie dorée pour réinventer un amont durable dans le secteur de l’habillement',
    description:
      'Les recherches en biotechnologies, permettent à plusieurs industries de se transformer en profondeur , du remplacement des énergies fossiles , aux composites médicaux et aéronautiques, les biotechnologies s’intéressent de plus en plus à la création ou l’amélioration des matières textile , comment orienter l’université marocaine vers cette industrie.',
    participants: [],
  },
];

const COLORS = ['primary', 'secondary', 'warning', 'success'] as const;

// ----------------------------------------------------------------------

export default function Programme() {
  const mdUp = useResponsive('up', 'md');
  const theme = useTheme();

  return (
    <Box
      id="programme-previsionnel"
      component={MotionViewport}
      sx={{
        py: { xs: 10 },
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.2),
          imgUrl: '/assets/background/hero_bg.jpeg',
        }),
      }}
    >
      <Container>
        <Stack
          spacing={3}
          sx={{
            maxWidth: '100%',
            mx: 'auto',
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h2">Programme</Typography>
        </Stack>

        <Typography variant="h6" textAlign="center" color="gray">
          Matinée
        </Typography>
        <Timeline position={mdUp ? 'alternate' : 'right'}>
          {TIMELINES.map((value, index) => (
            <TimelineItem
              key={value.title}
              sx={{
                '&:before': {
                  ...(!mdUp && { display: 'none' }),
                },
              }}
            >
              <TimelineSeparator>
                <TimelineDot color={COLORS[index]} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                <m.div variants={varFade().inLeft}>
                  <Typography variant="overline" sx={{ color: `${COLORS[index]}.main` }}>
                    {value.year}
                  </Typography>
                </m.div>
                <m.div variants={varFade().inRight}>
                  <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
                    {value.title}
                  </Typography>
                </m.div>
                <m.div variants={varFade().inLeft}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      maxWidth: { md: 360 },
                      ...(index % 2 && {
                        ml: 'auto',
                      }),
                    }}
                  >
                    {value.description}
                  </Typography>
                </m.div>
                <m.div variants={varFade().inUp}>
                  <Stack
                    direction="row"
                    justifyContent={index % 2 ? 'end' : 'start'}
                    flexWrap="wrap"
                    spacing={1}
                  >
                    {value?.participants?.map((tag) => (
                      <Chip key={tag} label={tag} variant="soft" size="small" />
                    ))}
                  </Stack>
                </m.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        <Typography variant="h6" textAlign="center" color="gray">
          Après-midi{' '}
        </Typography>
        <Timeline position={mdUp ? 'alternate' : 'right'}>
          {TIMELINES2.map((value, index) => (
            <TimelineItem
              key={value.title}
              sx={{
                '&:before': {
                  ...(!mdUp && { display: 'none' }),
                },
              }}
            >
              <TimelineSeparator>
                <TimelineDot color={COLORS[index]} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                <m.div variants={varFade().inLeft}>
                  <Typography variant="overline" sx={{ color: `${COLORS[index]}.main` }}>
                    {value.year}
                  </Typography>
                </m.div>
                <m.div variants={varFade().inRight}>
                  <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
                    {value.title}
                  </Typography>
                </m.div>
                <m.div variants={varFade().inLeft}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      maxWidth: { md: 360 },
                      ...(index % 2 && {
                        ml: 'auto',
                      }),
                    }}
                  >
                    {value.description}
                  </Typography>
                </m.div>
                <m.div variants={varFade().inUp}>
                  <Stack
                    direction="row"
                    justifyContent={index % 2 ? 'end' : 'start'}
                    flexWrap="wrap"
                    spacing={1}
                  >
                    {value?.participants?.map((tag) => (
                      <Chip key={tag} label={tag} variant="soft" size="small" />
                    ))}
                  </Stack>
                </m.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
