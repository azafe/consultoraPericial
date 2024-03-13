import { useEffect, useState } from 'react';
import { Container, ActionIcon, Anchor, Group, Burger, Box, Image, Drawer, ScrollArea, Divider, Text, Button, UnstyledButton, rem, Stack } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandX } from '@tabler/icons-react';

import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

import './DoubleHeader.css';
import logosolo from "/src/assets/navbar.png"
import { Link } from 'react-router-dom';

const mainLinks = [
    { label: 'Home' },
    { label: 'Quienes sómos?' },
    { label: 'Servicios' },
    { label: 'Preguntas frecuentes' },
    { label: 'Contacto' },
    ];



export function DoubleHeader() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [active, setActive] = useState(0);

    const handleScroll = () => {
        const scrolled = window.scrollY;
        const header = document.querySelector(`.header`);
        if (header) {
            header.classList.toggle('scrolled', scrolled > 80);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const mainItems = mainLinks.map((item, index) => (
        <Link to={`/${item.label.toLowerCase().replace(' ', '-')}`} className="mainLink" data-active={index === active || undefined}>
            {item.label}
        </Link>




    ));

    const scrollIntoView = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    };


    return (
        <header className="header" >
            <Container className="inner" bg="#010D38" size="lg">
                    <Image h={40} src={logosolo} />
                <Box visibleFrom="sm" >
                    <Group gap={0} justify="flex-end"  >
                        {mainItems}
                    </Group>
                </Box>
                <Burger
                    opened={drawerOpened}
                    onClick={toggleDrawer}
                    className="burger" size="sm"
                    hiddenFrom="sm"
                    color="white"
                    px={30}
                />
                <Drawer    opened={drawerOpened} onClose={closeDrawer} closeButtonProps={{ iconSize: "0" }}  position='top' size="60%"
                >
                    <Stack gap={20} my="xl"  >
                        
                        <Link to="/"  className="linksHeader">
                            Home
                        </Link>

                        <Link to="/" className="linksHeader">
                            ¿Quiénes somos?
                        </Link>

                        <Link to="/" className="linksHeader">
                            Servicios
                        </Link>

                        <Link to="/" className="linksHeader">
                            Preguntas frecuentes
                        </Link>

                        <Link to="/" className="linksHeader">
                            Contacto
                        </Link>


                    </Stack>
                </Drawer>
            </Container>
        </header>
    );
}