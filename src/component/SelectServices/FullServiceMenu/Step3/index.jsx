import React from 'react'
import "./index.scss"
import {Button, ButtonGroup, Card, Container, Form, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router'

import ImgLogin from "assets/img/imgStep1.png"
import ImgQR from "assets/img/QR.png"
import URL from "assets/img/Link.png"
import Print from "assets/img/print.png"
import Save from "assets/img/save.png"

export default function Step3() {
  const navigate = useNavigate();
  return (
    <Container className='fullStep' >
      <Container className='contentFullStep'>
        <Card className='cardFullStep'>
          <div className='GroupHeaderStep'>
            <div className="HeaderStep ">
              <div className='textRestaurant colorHeaderStep'>Restaurant Detail</div>
              <div className='boderRestaurant backgroundHeaderStep'/>
            </div>
            <div className='HeaderStep DishMenu'>
              <div className='textRestaurant colorHeaderStep'>Dish Menu</div>
              <div className='boderRestaurant backgroundHeaderStep boderDishMenu'/>
            </div>
            <div className='HeaderStep '>
              <div className='textRestaurant colorHeaderStep'>Generate QR </div>
              <div className='boderRestaurant backgroundHeaderStep boderDishMenu'/>
            </div>
          </div>
          <Card.Text className='textStep'>Step 3 of 3</Card.Text>
          <Card.Title className='titleStep'>Generated QR Code</Card.Title>
          <Card.Img className='QRcode' src={ImgQR}/>

          <Form.Label className='formLabelStep'>URL <span className='spanColor'>*</span></Form.Label>
          <InputGroup className="inputGroupURL">
            <Form.Control
              placeholder="https://manumanu.com/menuid1223.html"
              className='formURL'
              disabled
            />
            <InputGroup.Text className="textURL ms-auto"><img src={URL} alt="URL" /></InputGroup.Text>
          </InputGroup>

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

