import React from 'react'
import "./index.scss"
import {Button, ButtonGroup, Card, Container, Form, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router'

import ImgLogin from "assets/img/ImgQR.png"

export default function QRStep1() {
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
              <div className='textRestaurant '>Dish Menu</div>
              <div className='boderRestaurant QRStep2'/>
            </div>
          </div>
          <Card.Text className='textStep'>Step 1 of 2</Card.Text>
          <Card.Title className='titleStep'>Add QR Links</Card.Title>

          <Form.Label className='formLabelStep'>QR Redirect Link <span className='spanColor'>*</span></Form.Label>
          <InputGroup className="inputGroupURL">
            <Form.Control
              placeholder="Enter link"
              className='formURL'
            />
          </InputGroup>

          <ButtonGroup className='buttonGroupStep'>
            <Button className="Back Print" onClick={() => navigate('/select-services', {replace: true})}>Back </Button>
            <Button className="Next save" onClick={() => navigate('/select-services/simple-qr-redirect-service/step2', {replace: true})}>Generate QR</Button>
          </ButtonGroup>
        </Card>
      </Container>
      <Container className='imgFullStep1'>
        <div onClick={() => navigate('/select-services', {replace: true})}><img src={ImgLogin} alt="" /></div>
      </Container>
    </Container>
  )
}

