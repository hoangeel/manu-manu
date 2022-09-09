import React from 'react'
import "./index.scss"
import {Button, ButtonGroup, Card, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router'

import ImgLogin from "assets/img/ImgQR.png"
import ImgQR from "assets/img/QR.png"
import Print from "assets/img/print.png"
import Save from "assets/img/save.png"

export default function QRStep2() {
  const navigate = useNavigate();
  return (
    <Container className='fullStep' >
      <Container className='contentFullStep'>
        <Card className='cardFullStep'>
        <div className='GroupHeaderStep'>
            <div className="HeaderStep ">
              <div className='textRestaurant colorHeaderStep'>Restaurant Detail</div>
              <div className='boderRestaurant backgroundHeaderStep QRStep2'/>
            </div>
            <div className='HeaderStep DishMenu '>
              <div className='textRestaurant colorHeaderStep'>Dish Menu</div>
              <div className='boderRestaurant backgroundHeaderStep QRStep2'/>
            </div>
          </div>
          <Card.Text className='textStep'>Step 2 of 2</Card.Text>
          <Card.Title className='titleStep'>Generated QR Code</Card.Title>
          <Card.Img className='QRcode' src={ImgQR}/>


          <ButtonGroup className='buttonGroupStep'>
            <Button className="Back Print">Print <span><img src={Print} alt="Print" /></span></Button>
            <Button className="Next save">Save Picture <span><img src={Save} alt="save" /></span></Button>
          </ButtonGroup>
        </Card>
      </Container>
      <Container className='imgFullStep1'>
        <div onClick={() => navigate('/select-services', {replace: true})}><img src={ImgLogin} alt="" /></div>
      </Container>
    </Container>
  )
}

