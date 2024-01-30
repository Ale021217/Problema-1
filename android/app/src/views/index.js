import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {style_01} from '../styles/styles_01';


const data = [
    {
      Signo: 'Acuario',
      Fecha: 'Ene/20 - Feb/18',
      Elemento: 'Aire',
      Astro: 'Urano/Saturno',
      Piedra: 'Amatista',
      Imagen: require('../imgs/logos/01_Acuario.png'), // Ajusta la ruta según tu estructura de carpetas
      
    },
    {
      Signo: 'Piscis',
      Fecha: 'Feb/19 - Mar/20',
      Elemento: 'Agua',
      Astro: 'Neptuno/Júpiter',
      Piedra: 'Aguamarina',
      Imagen: require('../imgs/logos/02_Pisis.png'),
    },
    {
      Signo: 'Aries',
      Fecha: 'Mar/21 - Abr/19',
      Elemento: 'Fuego',
      Astro: 'Marte',
      Piedra: 'Diamante',
      Imagen: require('../imgs/logos/03_Aries.png'),
    },
    {
      Signo: 'Tauro',
      Fecha: 'Abr/20 - May/20',
      Elemento: 'Tierra',
      Astro: 'Venus',
      Piedra: 'Esmeralda',
      Imagen: require('../imgs/logos/04_Tauro.png'),
    },
    {
      Signo: 'Géminis',
      Fecha: 'May/21 - Jun/20',
      Elemento: 'Aire',
      Astro: 'Mercurio',
      Piedra: 'Ágata',
      Imagen: require('../imgs/logos/05_Geminis.png'),
    },
    {
      Signo: 'Cáncer',
      Fecha: 'Jun/21 - Jul/22',
      Elemento: 'Agua',
      Astro: 'Luna',
      Piedra: 'Piedra de luna',
      Imagen: require('../imgs/logos/06_Cancer.png'),
    },
    {
      Signo: 'Leo',
      Fecha: 'Jul/23 - Ago/22',
      Elemento: 'Fuego',
      Astro: 'Sol',
      Piedra: 'Topacio',
      Imagen: require('../imgs/logos/07_Leo.png'),
    },
    {
      Signo: 'Virgo',
      Fecha: 'Ago/23 - Sep/22',
      Elemento: 'Tierra',
      Astro: 'Mercurio',
      Piedra: 'Zafiro',
      Imagen: require('../imgs/logos/08_Virgo.png'),
    },
    {
      Signo: 'Libra',
      Fecha: 'Sep/23 - Oct/22',
      Elemento: 'Aire',
      Astro: 'Venus',
      Piedra: 'Peridoto',
      Imagen: require('../imgs/logos/09_Libra.png'),
    },
    {
      Signo: 'Escorpio',
      Fecha: 'Oct/23 - Nov/21',
      Elemento: 'Agua',
      Astro: 'Plutón/Marte',
      Piedra: 'Granate',
      Imagen: require('../imgs/logos/10_Escorpio.png'),
    },
    {
      Signo: 'Sagitario',
      Fecha: 'Nov/22 - Dic/21',
      Elemento: 'Fuego',
      Astro: 'Júpiter',
      Piedra: 'Turquesa',
      Imagen: require('../imgs/logos/11_Sagitario.png'),
    },
    {
      Signo: 'Capricornio',
      Fecha: 'Dic/22 - Ene/19',
      Elemento: 'Tierra',
      Astro: 'Saturno',
      Piedra: 'Ónix',
      Imagen: require('../imgs/logos/12_Capricornio.png'),
    },
  ];

  const Index = () => {
    return (
      <View>
        <View style={style_01.divHeader}>
        <Image source={require('../imgs/logos/logo_universidad.png')} />
        </View>
  
        <View style={style_01.divMain}>
          <Text style={style_01.h1}>Problema 01</Text>
          <Text style={style_01.p1}>Simbolos del zodiaco</Text>
  
          <ScrollView style={{ marginTop: 8 }}>
            {data.map(item => (
              <View style={style_01.tarjeta} key={item.codigo}>
                {/* Imagen a la izquierda */}
                <Image
                  source={item.Imagen}
                  style={style_01.imagenTarjeta}
                />
  
                {/* Texto a la derecha */}
                <View style={style_01.textoTarjeta}>
                  <Text>Signo: {item.Signo}</Text>
                  <Text>Fecha: {item.Fecha}</Text>
                  <Text>Elemento: {item.Elemento}</Text>
                  <Text>Astro: {item.Astro}</Text>
                  <Text>Piedra: {item.Piedra}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
  
        <View style={style_01.divFooter}>
          <Text style={style_01.textFooter}>
            Carrera de Tecnologías de Información
          </Text>
          <Text style={style_01.textFooter}>Sede del Pacífico</Text>
        </View>
      </View>
    );
  };
  
  export default Index;
