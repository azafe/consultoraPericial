import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { DoubleHeader } from '@/components/DoubleHeader/DoubleHeader';
import { FooterSocial } from '@/components/Footer/FooterSocial';
import { HeroImageRight } from '@/components/Hero/HeroImageRight';
import { FeaturesCards } from '@/components/FeaturesCards/FeaturesCards';
import { FaqSimple } from '@/components/FAQS/FaqSimple';
import { Portal, ActionIcon, Button } from '@mantine/core';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { GetInTouch } from '@/components/Contact/GetInTouch';



export function HomePage() {
  return (
    <>
      <DoubleHeader />
      <HeroImageRight />
      <FeaturesCards />
      <FaqSimple />
      <GetInTouch />
      <FooterSocial />

      <Portal >
        <div
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
          }}
        >
          <ActionIcon
            component="a"
            href="https://api.whatsapp.com/send?phone=5493813190812"
            target="_blank"
            rel="noopener noreferrer"
            title="Enviar mensaje por WhatsApp"
            color="green"
            radius={40}
            size={55}
          >
            <IconBrandWhatsapp size={40} color='white' />
          </ActionIcon>
        </div>
      </Portal>
    </>
  );
}
