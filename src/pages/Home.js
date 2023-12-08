import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FlippingCard from '../components/FlippingCard';
import logo from './logo.png';
import silo from './silo.png';
import france from './france.png';
import thisisfine from './fine.jpeg';
import drought from './drought.png';
import nowater from './nowater.png';
import foodloss from './foodloss.png';
import flood from './flood.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const appLogoStyle = {
  height: '40vmin',
  pointerEvents: 'none',
};

const Home = () => (
  <div>
    <Row>
      <Col style={{ alignItems: 'center', padding: '18px' }} className='flex'>
        <img src={logo} style={appLogoStyle} className="App-logo" alt="logo" />
        <h1 style={{ fontSize: 'calc(12px + 7vmin)' }}>Faire face au changement climatique.</h1>
      </Col>
    </Row>

    {/* blank space */}
    <Row style={{ padding: '18px' }} /> 

    <Row style={{ display: 'flex', justifyContent: 'center' }}>
      <Col style={{ padding: '18px' }}>
        <FlippingCard backText="Phénomène naturel crucial permettant de retenir la chaleur sur la Terre grâce à certains gaz à effet de serre (GES) dans l'atmosphère, du fait de l'activité de l'homme augmentation de la température." cardWidth={450} cardHeight={300} frontTitle='Effet de serre' frontImg={silo} backLink='Icon by surang' backUrl='https://www.freepik.com/icon/silo_1287168#fromView=search&term=greenhouse+gas&page=1&position=4&track=ais&uuid=7329f8a8-8eb4-474e-bfcc-837e07dd13a3' />
      </Col>

      <Col style={{ padding: '18px' }}>
        <FlippingCard backTitle='+1,9°C' backText="C’est le niveau de réchauffement actuel en France (moyenne sur la dernière décennie), par rapport à la période 1850-1900 d’après le dernier rapport du Haut conseil pour le climat." cardWidth={400} cardHeight={400} frontTitle='Impacts du changement climatique en France' backImg={thisisfine} frontImg={france} backLink='Icon by Freepik' backUrl='https://www.freepik.com/icon/france_3153851#fromView=search&term=france&page=1&position=19&track=ais&uuid=8cdf1d8a-312d-41c3-a118-97ea87c03e6b' />
      </Col>
    </Row>


    {/* blank space */}
    <Row style={{ padding: '18px' }} /> 

    <h2 style={{ fontSize: 'calc(12px + 6vmin)' }}>Les risques</h2>

    <Row style={{ display: 'flex', justifyContent: 'center' }}>
      <Col style={{ padding: '18px' }}>
        <FlippingCard backTitle='Vagues de chaleur' backText="Les périodes de canicule sont de plus en plus chaudes, longues et fréquentes. Les zones urbaines sont particulièrement concernées par ce risque avec un écart jusqu’à +12°C entre zones rurales et grandes villes. 35 % des morts liées à la chaleur durant l’été entre 1991 et 2018 sont imputables au changement climatique." cardWidth={450} cardHeight={350} frontImg={drought} backLink='Icon by Vector Stall' backUrl='https://www.freepik.com/icon/stop_4596990#fromView=search&term=water+shortage&page=1&position=24&track=ais&uuid=707e997e-2a97-4d1e-a089-6347088b5037' />
      </Col>

      <Col style={{ padding: '18px' }}>
        <FlippingCard backTitle='Pénuries d’eau' backText="Les périodes de sécheresse sont plus fréquentes et plus intenses, ce qui peut entraîner des restrictions pour l’usage de l’eau. Les régions sèches, comme le sud de la France, le seront davantage dans le futur, avec des répercussions importantes sur l’agriculture, la biodiversité, les forêts… Avec un réchauffement de +2°C, plus d’un tiers de la population de cette zone pourrait manquer d’eau." cardWidth={425} cardHeight={400} frontImg={nowater} backLink='Icon by Freepik' backUrl='https://www.freepik.com/icon/desertification_10344589#fromView=search&term=drought&page=1&position=2&track=ais&uuid=9ca239fa-3451-483a-acd3-305ffae68015' />
      </Col>
    </Row>

    <Row style={{ display: 'flex', justifyContent: 'center' }}>
      <Col style={{ padding: '18px' }}>
        <FlippingCard backTitle='Diminutions de rendements agricoles' backText="Conséquence directe des deux risques précédents, mais aussi de la variabilité des précipitations, les pertes de récoltes ont triplé en Europe au cours des 50 dernières années et continueront d’augmenter, mettant en péril les moyens de subsistance des producteurs et parfois la sécurité alimentaire des populations défavorisées." cardWidth={425} cardHeight={400} frontImg={foodloss} backLink='Icon by Becris' backUrl='https://www.freepik.com/icon/wheat_1240828#fromView=search&term=wheat+loss&page=1&position=1&track=ais&uuid=c7e97153-eca9-4546-a22a-28ff2540022f' />
      </Col>

      <Col style={{ padding: '18px' }}>
        <FlippingCard backTitle='Inondations' backText="Avec ses 5 800 km de côte (en métropole), la France est l’un des pays européens les plus menacés par les inondations côtières, dont le risque est renforcé par la montée des eaux et l’érosion causées par le changement climatique. D’ici la fin du siècle, 1.7 million seront en zone à risque si les émissions sont élevées." cardWidth={450} cardHeight={350} frontImg={flood} backLink='Icon by Freepik' backUrl='https://www.freepik.com/icon/natural-disaster_5058745#fromView=search&term=flooding&page=1&position=9&track=ais&uuid=1613f3e4-0dd3-46f3-abd8-90ad1b2bd412' />
      </Col>
    </Row>
  </div>
);

export default Home;
