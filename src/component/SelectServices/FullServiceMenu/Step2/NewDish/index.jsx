import React from 'react'
import "./index.scss"
import {Button, Card, Container, InputGroup ,Form} from 'react-bootstrap'
import { useNavigate } from 'react-router'
import Select from 'react-select'


import ImgLogin from "assets/img/imgStep1.png"
import IconBack from "assets/img/Frame35.png"


export default function NewDish() {
  const navigate = useNavigate();
  const Countries = [
    { label: "Healthy", value: 355 },
    { label: "Diet", value: 54 },
    { label: "Austria", value: 43 },
    { label: "Cocos Islands", value: 61 },
    { label: "Kuwait", value: 965 },
  ];
  return (
    <Container className='fullStep' >
      <Container className='contentFullStep'>
        <Card className='cardFullStep'>
          <Card.Img className='CardImgLogo' src={IconBack} onClick={() => navigate('/select-services/full-service-menu/step2', {replace: true})}/>
          <Card.Title className='titleStep'>Add Dish Menu</Card.Title>
          <Form className='formStep'>
            <Form.Group className='formGroupStep'>
              <Form.Control type="file" className='formFile'></Form.Control>

              <Form.Label className='formLabelStep'>Dish Name <span className='spanColor'>*</span></Form.Label>
              <Form.Control className='formControlStep' type="email" placeholder="Food name" />

              <Form.Label className='formLabelStep'>Dish Price<span className='spanColor'>*</span></Form.Label>
              <InputGroup className="inputGroupDishPrice">
                <InputGroup.Text className="textUSD">USD</InputGroup.Text>
                <Form.Control
                  placeholder="Enter Price"
                  className='formDishPrice'
                />
              </InputGroup>

              <Form.Label className='formLabelStep'>Description <span className='spanColor'>*</span></Form.Label>
              <Form.Control className='formControlStep formDescription' type="email" placeholder="About this food" />

              <Form.Label className='formLabelStep'>Dish Tag <span className='spanColor'>*</span></Form.Label>
              <Select  
                options={Countries}
                width='200px'
                placeholder="Select tags"
                isSearchable={true}
                id="cssSelect"
                isMulti 
                className='Selecttags'
              />
              
              <Form.Label className='formLabelStep'>Dish Type <span className='spanColor'>*</span></Form.Label>
              <Form.Group className='groupCheck'>
                <Form.Check className='checkVegan' type="checkbox" inline label="Vegan" />
                <Form.Check className='checkVegan' type="checkbox" inline label="Spicy"/>
              </Form.Group>
            </Form.Group>

            <Button className='done'>Done</Button>
          </Form>
        </Card>
      </Container>
      <Container className='imgFullStep1'>
        <div><img src={ImgLogin} alt="" /></div>
      </Container>
    </Container>
  )
}
