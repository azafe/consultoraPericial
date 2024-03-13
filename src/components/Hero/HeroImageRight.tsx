import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroImageRight.module.css';

export function HeroImageRight() {
  return (
    <Container className={classes.root} px={0}  >
      <Container size="lg"  >
        <div className={classes.inner}>
          <div className={classes.content} >
            <Title ta="center" className={classes.title}>
              Zafe <br /> Asociados 
            </Title>
            <Title order={3} ta="center" mt="sm">Consultora Pericial</Title>

            <Text className={classes.description} mt={30}>
              Somos una empresa que se dedica a
              brindar servicios periciales y capacitación en el campo de la Accidentología y
              Seguridad Vial.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Contactanos
            </Button>
          </div>
        </div>
      </Container>
    </Container>
  );
}