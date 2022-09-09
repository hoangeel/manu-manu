import React from 'react'
import "./index.scss"
import {Button, ButtonGroup, Card, Container, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router'

import ImgLogin from "assets/img/imgStep1.png"
import IconEdit from "assets/img/bxs-edit-alt1.png"
import IconDelete from "assets/img/bx-trash1.png"

export default function Step2() {
  const dish = [
    { 
      name: "Beacon Eggs",
      text: "Ingredients detail lorem ipsum dolor sit amet...",
      price: "$5.00",
    },
    { 
      name: "Mapple soy tofu",
      text: "Ingredients detail lorem ipsum dolor sit amet...",
      price: "$5.00",
    },
    { 
      name: "Baby Eggplans",
      text: "Ingredients detail lorem ipsum dolor sit amet...",
      price: "$5.00",
    },
  ];
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
              <div className='textRestaurant '>Generate QR </div>
              <div className='boderRestaurant boderDishMenu '/>
            </div>
          </div>
          <Card.Text className='textStep'>Step 2 of 3</Card.Text>
          <Card.Title className='titleStep'>Add Dish Menu</Card.Title>
          <Button className='newDish' onClick={() => navigate('/select-services/full-service-menu/step2/new-dish', {replace: true})}>+ New Dish</Button>
          {dish.map((data, index)=>{
            const {name, text, price}= data;
            return(
              <div className='allDish' key={index}>
                <div className='groupDish'>
                    <div className='dishName'>
                        {name} 
                    </div>
                    <h6 className='dishText'>{text}</h6>
                    <h6 className='dishPrice'>{price}</h6>
                </div>
                <InputGroup className='buttonDish'>
                  <Button className='ms-auto edit delete'><img src={IconEdit} alt="" /></Button>
                  <Button className=' delete'><img src={IconDelete} alt="" /></Button>
                </InputGroup>
              </div>
            )
          })}
          <ButtonGroup className='buttonGroupStep'>
            <Button className="Back" onClick={() => navigate('/select-services/full-service-menu/step1', {replace: true})}>Back</Button>
            <Button className="Next" onClick={() => navigate('/select-services/full-service-menu/step3', {replace: true})}>Next</Button>
          </ButtonGroup>
        </Card>
      </Container>
      <Container className='imgFullStep1'>
        <div><img src={ImgLogin} alt="" /></div>
      </Container>
    </Container>
  )
}
