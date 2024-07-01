import { m } from 'framer-motion';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import { useResponsive } from 'src/hooks/use-responsive';

import Pattern01 from 'src/assets/illustrations/pattern/pattern-01';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const CONTENTS = [
  {
    question: `Quel est l'objectif de ce forum ?`,
    answer: {
      text: `Le forum vise à repositionner les industries de la mode pour aligner leurs activités avec les opportunités de carrières futures. Il explorera des moyens d'améliorer l'intégration entre la recherche académique et les besoins des entreprises, d'encourager de nouveaux modèles économiques dans l'industrie et de promouvoir l'innovation à travers la collaboration.`,
    },
  },
  {
    question: "Pourquoi ce forum est-il important pour l'industrie de la mode au Maroc ?",
    answer: {
      text: `Le Maroc a une longue histoire dans l'industrie de la mode, notamment dans les secteurs du textile et du cuir. Avec plus de huit siècles de savoir-faire, le pays est un acteur clé dans la région méditerranéenne. Cependant, l'industrie fait actuellement face à des changements significatifs dus aux évolutions géopolitiques et à une tendance à la relocalisation des activités industrielles. Ce forum abordera ces défis et explorera les opportunités futures pour la croissance et l'innovation.`,
    },
  },
  {
    question: 'Quels sont les principaux sujets qui seront abordés ?',
    answer: {
      text: `Le forum couvrira divers aspects de l'industrie de la mode, notamment :`,
      list: [
        "Les opportunités pour la production haut de gamme et l'investissement",
        "Le rôle de l'IA et des nouvelles technologies dans la Fashion Tech",
        'Les innovations dans les technologies de recyclage',
        'Les stratégies pour positionner le Maroc sur le marché des vêtements et chaussures de sport',
        'Le potentiel des biotechnologies pour créer des textiles durables',
      ],
    },
  },
  {
    question: 'Qui devrait assister à ce forum ?',
    answer: {
      text: `Le forum est destiné aux professionnels de l'industrie de la mode, y compris les dirigeants d'entreprise, les investisseurs, les universitaires, les chercheurs et les décideurs politiques. Il offre une plateforme pour le réseautage, la collaboration et l'exploration de solutions innovantes pour l'avenir de l'industrie de la mode au Maroc.`,
    },
  },
];

// ----------------------------------------------------------------------

export default function FAQs() {
  const smUp = useResponsive('up', 'sm');

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  return (
    <Container
      id="FAQ"
      component={MotionViewport}
      sx={{
        position: 'relative',
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={{ md: 3 }} justifyContent="center">
        <Grid xs={12} md={8}>
          <m.div variants={varFade().in}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              Le Forum en questions
            </Typography>
          </m.div>

          <Box
            sx={{
              my: { xs: 8, md: 10 },
            }}
          >
            {CONTENTS.map((faq) => (
              <m.div key={faq.question} variants={varFade().in}>
                <Accordion
                  expanded={expanded === faq.question}
                  onChange={handleChangeExpanded(faq.question)}
                >
                  <AccordionSummary
                    sx={{
                      minHeight: 64,
                      borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
                      [`& .${accordionSummaryClasses.content}`]: {
                        p: 0,
                        m: 0,
                      },
                      [`&.${accordionSummaryClasses.expanded}`]: {
                        bgcolor: 'action.selected',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                      {faq.question}
                    </Typography>

                    <Iconify
                      width={24}
                      icon={expanded === faq.question ? 'carbon:subtract' : 'carbon:add'}
                    />
                  </AccordionSummary>

                  <AccordionDetails>
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                      {faq.answer?.text}
                    </Typography>
                    <br />
                    {faq.answer?.list && (
                      <Stack spacing={1} alignItems="flex-start">
                        {faq.answer?.list?.map((text, i) => <li key={i}>{text}</li>)}
                      </Stack>
                    )}
                  </AccordionDetails>
                </Accordion>
              </m.div>
            ))}
          </Box>
        </Grid>
      </Grid>

      {smUp && (
        <Pattern01
          sx={{
            top: 80,
            left: 0,
            right: 0,
            zIndex: -1,
            mx: 'auto',
            maxWidth: 600,
            maxHeight: 600,
          }}
        />
      )}
    </Container>
  );
}
