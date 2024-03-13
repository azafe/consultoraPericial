import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, Title} from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from './GetInTouch.module.css';

export function GetInTouch() {
  return (
    <Paper shadow="md" radius="lg" >
      <div className={classes.wrapper}>
        <div className={classes.contacts} >
        <Title ta="center" className={classes.title}>
        Contactanos
      </Title>

          <ContactIconsList />
        </div>

        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Nombre" placeholder=" " />
              <TextInput label="Email" placeholder=" " required />
            </SimpleGrid>

            <TextInput mt="md" label="Asunto" placeholder=" " required />

            <Textarea
              mt="md"
              label="Mensaje"
              placeholder=" "
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Enviar mensaje
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}