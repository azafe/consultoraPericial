import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './FeaturesCards.module.css';

const mockdata = [
  {
    title: 'Servicios Periciales',
    description:
      'Investigamos a fondo los accidentes de tránsito, concurriendo al lugar del evento y/o recurriendo al expendiente penal para recopilar datos útiles para la pesquisa pericial',
    icon: IconGauge,
  },
  {
    title: 'Reconstrucción del hecho',
    description:
      'Reconstruimos los eventos aconteciods, y determinamos las causas que incidieron en su ocurrencia.',
    icon: IconUser,
  },
  {
    title: 'Servicios de capacitación',
    description:
      'Ofrecemos cursos teóricos y prácticos en seguridad vial, normas de tránsito y conducción segura. Nos enfocamos en aspectos como la carga segura, normativas específicas y la atención al cliente',
    icon: IconCookie,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" ta="center" radius="md" className={classes.card} padding="xl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <feature.icon
        stroke={2}
        size={40}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">

      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Integramos la profesionalidad y la eficiencia
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Con años de experiencia en el campo de la investigación de los accidentes de
        tránsito; y con un equipo de profesionales altamente calificados, estamos
        comprometidos con la prevención de accidentes y la mejora de la seguridad en las
        vías de circulación.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}