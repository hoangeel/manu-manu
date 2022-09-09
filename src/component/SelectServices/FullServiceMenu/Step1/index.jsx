import React, {useState} from 'react'
import "./index.scss"
import {Button, ButtonGroup, Card, Container, Form, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment';
import Select from 'react-select'


import ImgLogin from "assets/img/imgStep1.png"
import IconCalendar from "assets/img/iconCalendar.png"
import IconCalendarButton from "assets/img/Button.png"

export default function Step1() {
  const [dateState, setDateState] = useState(new Date())
  const [DDYYY, setDDYYY] = useState(moment(dateState).format('MMMM Do YYYY'))
  const [add, setAdd] = useState("Add Availability")
  const changeDate = (e) => {
    setDateState(e)
    setAdd(moment(dateState).format('MMMM Do YYYY'))
  }
  const Countries = [
    { label: "Healthy", value: 355 },
    { label: "Diet", value: 54 },
    { label: "Austria", value: 43 },
    { label: "Cocos Islands", value: 61 },
    { label: "Kuwait", value: 965 },
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
              <div className='textRestaurant '>Dish Menu</div>
              <div className='boderRestaurant boderDishMenu'/>
            </div>
            <div className='HeaderStep '>
              <div className='textRestaurant '>Generate QR </div>
              <div className='boderRestaurant boderDishMenu'/>
            </div>
          </div>
          <Card.Text className='textStep'>Step 1 of 3</Card.Text>
          <Card.Title className='titleStep'>Add Restaurant Detail</Card.Title>
          <Form className='formStep'>
            <Form.Group className='formGroupStep'>
              <Form.Control type="file" className='formFile'></Form.Control>

              <Form.Label className='formLabelStep'>Restaurant Name <span className='spanColor'>*</span></Form.Label>
              <Form.Control className='formControlStep' type="email" placeholder="Your restaurant name" />

              <Form.Label className='formLabelStep'>Restaurant Name <span className='spanColor'>*</span></Form.Label>
              <InputGroup className='InputGroupStep'>
                <Form.Control className='formControlStep' type="email" placeholder={add} />
                <Form.Text className='formImgStep'>
                  <span id="addon-wrapping">
                      <div className="dropdown">
                          <div id="dropdownMenuButton1" aria-expanded="false" data-bs-toggle="dropdown"><img  src={moment(dateState).format('MMMM Do YYYY') === DDYYY ? IconCalendar : IconCalendarButton} alt="" /></div>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                              <Calendar 
                              value={dateState}
                              onChange={changeDate}
                              />
                          </ul>
                      </div> 
                  </span>
                </Form.Text>
              </InputGroup>

              <Form.Label className='formLabelStep'>Restaurant Tag <span className='spanColor'>*</span></Form.Label>
              <Select  
                options={Countries}
                width='200px'
                placeholder="Select tags"
                isSearchable={true}
                id="cssSelect"
                isMulti 
                className='Selecttags'
              />

              <Form.Label className='formLabelStep'>Restaurant Currency <span className='spanColor'>*</span></Form.Label>
              <Form.Select className='formSelectStep'>
                <option value="1">USD</option>
                <option value="2">USD</option>
                <option value="3">USD</option>
              </Form.Select>
            </Form.Group>
          </Form>
          <ButtonGroup className='buttonGroupStep'>
            <Button className="Back" onClick={() => navigate('/select-services', {replace: true})}>Back</Button>
            <Button className="Next" onClick={() => navigate('/select-services/full-service-menu/step2', {replace: true})}>Next</Button>
          </ButtonGroup>
        </Card>
      </Container>
      <Container className='imgFullStep1'>
        <div><img src={ImgLogin} alt="" /></div>
      </Container>
    </Container>
  )
}
