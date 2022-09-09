import React from 'react'
import { useNavigate } from 'react-router';
import "./index.scss"
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import ImgLogin from "assets/img/manumanu.png"
import ImgFull from "assets/img/SimpleQRRedirectService.png"
import ImgQR from "assets/img/FullServiceMenu.png"



export default function SelectServices() {
  const navigate = useNavigate();
  return (
    <Container className='Services' fluid>
      <Container className='headerServices' fluid>
        <img className='logoManuManu' src={ImgLogin} alt="ImgLogin" onClick={() => navigate('/', {replace: true})}/>
      </Container>
      <h1 className='SelectServices'>Select Services</h1>
      <Container className='contentServices'>
        <Container className='ServicesFull' onClick={() => navigate('/select-services/full-service-menu/step1', {replace: true})}>
          <Card className='cardServices'>
            <Card.Text className='cardBodyServices'>
              <Card.Img className='cardImgServices' src={ImgFull} />
            </Card.Text>
            <Card.Text className='cardTextServices'>Full Service Menu</Card.Text>
          </Card>
        </Container>
        <Container className='ServicesFull ServicesQR' onClick={() => navigate('/select-services/simple-qr-redirect-service/step1', {replace: true})}>
          <Card className='cardServices'>
            <Card.Text className='cardBodyServices'>
              <Card.Img className='cardImgServices' src={ImgQR} />
            </Card.Text>
            <Card.Text className='cardTextServices'>Simple QR Redirect Service</Card.Text>
          </Card>
        </Container>
      </Container>
    </Container>
  )
}
