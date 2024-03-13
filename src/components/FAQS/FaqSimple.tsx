import { Container, Title, Accordion } from '@mantine/core';
import classes from './FaqSimple.module.css';

const placeholder = [{
  title: "¿Qué es un perito de parte?",
  body: "Es aquella persona que tiene conocimientos en una cierta ciencia, arte o técnica Actúa como fuente de consulta para la resolución de conflictos, debiendo ser objetivo en sus análisis a pesar de que sea contratado por alguna de las partes interesadas. Deben poseer conocimientos técnicos científicos y no justificar los actos sino comprenderlos desde la ciencia."
},
{
  title: "¿Cómo saber si necesito uno?",
  body: "Se debe recurrir a un perito de parte cuando necesitamos una prueba técnica contundente para ayudar en la resolución de una disputa.Cuando hay un conflicto o litigio sobre un tema técnico complejo o simple, el juez o fiscal necesitará comprender el hecho en estudio para poder emitir un veredicto justo. Es por ello que se designan los peritos por oficio o petición de alguna de las partes."
},
{
  title: "¿En qué casos la actuación del perito de parte es importante o necesaria?",
  body: "Siempre resulta importante disponer de un profesional que realice un análisis minucioso, detallado y que controle al perito judicial, lo que reforzará la investigación siempre con sustento científico."
},
{
  title: "¿En cuáles ámbitos puede actuar un perito de parte",
  body: "Puede actuar en todos los fueros. Zafe y Asociados se centra en la Accidentología y Seguridad Vial."
},
{
  title: "¿Cómo saber qué perito puede trabajar en mi caso?",
  body: "El perito para descubrir o valorar un elemento de prueba debe poseer conocimientos especiales en alguna ciencia, arte o técnica. Para descubrir que conocimiento debe poseer el profesional que necesitas es importante conocer el tipo de hecho y la estrategia jurídica del caso."
},
{
  title: "¿Cuáles son los medios de pago?",
  body: "Los pagos se realizan por medio de:1)  Efectivo. 2) Depósito3) Transferencia bancaria.4) Tarjetas de crédito o débito.5) Pago online Mercado Pago"



}
]

export function FaqSimple() {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Preguntas frecuentes
      </Title>

      <Accordion variant="separated">
        {placeholder.map((item, index) => (
          <Accordion.Item value={item.title}>
            <Accordion.Control>{item.title}</Accordion.Control>
            <Accordion.Panel>{item.body}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}