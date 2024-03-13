import { Container, Group, ActionIcon, rem, Image } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import logosolo from "/src/assets/logoblanco.png"
import classes from './FooterSocial.module.css';

export function FooterSocial() {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner} bg="#010D38">
                <Image h={40} src={logosolo} />
                <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}