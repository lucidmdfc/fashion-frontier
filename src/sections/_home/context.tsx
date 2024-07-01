import { m } from 'framer-motion';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import { varFade, MotionViewport } from 'src/components/animate';
// ----------------------------------------------------------------------

export default function Context() {
  const theme = useTheme();
  return (
    <Container
      component={MotionViewport}
      id="Contexte-intention"
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.5),
          imgUrl: '/assets/background/hero_bg.jpeg',
        }),
        overflow: 'hidden',
        py: { xs: 5, md: 10 },
      }}
    >
      <m.div variants={varFade().inLeft}>
        <Typography pb={5} variant="h2" textAlign="center">
          {' '}
          Contexte & intention
        </Typography>
      </m.div>
      <m.div variants={varFade().inUp}>
        <Grid
          container
          spacing={{
            xs: 8,
          }}
          justifyContent="space-between"
        >
          <Grid xs={12} md={6}>
            <Typography variant="h4" sx={{ pt: { md: 5 } }}>
              Repositionner les industries de la mode sur les métiers de l’avenir
            </Typography>

            <Typography sx={{ color: 'text.secondary', mt: 3 }}>
              Le Cluster MDFC organise le 1er Forum de l’Innovation dans les Industries de la Mode,
              qui se tiendra le 03 juillet 2024 à Casablanca, sur le thème{' '}
              <b>Repositionner les industries de la mode sur les métiers de l’avenir</b>.
              <br />
              <br /> Cet événement, premier du genre au Maroc, réunira des acteurs clés de
              l’industrie, des experts et des décideurs politiques pour explorer les nouvelles
              opportunités et les défis auxquels font face les industries de la mode au Maroc.
            </Typography>
          </Grid>

          <Grid xs={12} md={6}>
            <Typography variant="h4" sx={{ pt: { md: 5 } }}>
              Un contexte en mutation profonde{' '}
            </Typography>

            <Typography sx={{ color: 'text.secondary', mt: 3 }}>
              Les industries de la mode au Maroc ont une histoire riche et un savoir-faire reconnu.
              Cependant, elles font face à une mutation profonde de leurs chaînes de valeur,
              impactées par les évolutions géostratégiques, la relocalisation des activités
              industrielles et la tendance croissante à la durabilité.
              <br />
              <br />
              “Ce forum sera l’occasion d’échanger sur les enjeux stratégiques de la filière et de
              définir les orientations pour l’avenir. Les participants pourront découvrir les
              dernières innovations technologiques, les tendances du marché et les solutions
              concrètes pour améliorer la compétitivité des entreprises marocaines”, soulignent les
              Organisateurs..
            </Typography>
          </Grid>
          <Grid xs={12} md={6}>
            <Typography variant="h4" sx={{ pt: { md: 5 } }}>
              Un programme riche et diversifié
            </Typography>

            <Typography sx={{ color: 'text.secondary', mt: 3 }}>
              Le programme du forum comprendra des panels, des ateliers et des conférences animés
              par des experts internationaux et nationaux. Les participants pourront également
              découvrir des expositions de produits innovants et rencontrer des potentiels
              partenaires.
            </Typography>
          </Grid>
          <Grid xs={12} md={6}>
            <Typography variant="h4" sx={{ pt: { md: 5 } }}>
              Un appel à la mobilisation
            </Typography>

            <Typography sx={{ color: 'text.secondary', mt: 3 }}>
              Le Cluster MDFC invite tous les acteurs de la filière mode à participer à ce forum
              important pour contribuer à l’élaboration d’une vision commune et à la définition
              d’une stratégie de développement ambitieuse pour les industries de la mode au Maroc.
            </Typography>
          </Grid>
        </Grid>{' '}
      </m.div>
    </Container>
  );
}
