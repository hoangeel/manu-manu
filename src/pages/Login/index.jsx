import React, {useState} from 'react'
import "./index.scss"
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import ImgLogin from "assets/img/LognIn_2.png"
import IconPass from "assets/img/LognIn_3.png"
import Logo from "assets/img/LognIn_1.png"
import { useNavigate } from 'react-router';



export default function Login() {
  const [type, setType] = useState("text");
  const onclickPass = () => {
    setType("password")
  }
  const navigate = useNavigate();
  return (
    <Container className='login'>
      <Container className='contentLogin'>
        <Card className='CardLogin'>
          <Card.Body className='CardBodyLogin'>
            <Card.Img className='CardImgLogo' src={Logo} onClick={() => navigate('/', {replace: true})}/>
            <Card.Title className='signIn'>Sign In</Card.Title>
            <Card.Text className='hiDear'>Hi dear, please enter your details to login</Card.Text>
            <Form className='formLogin'>
              <Form.Group className='formGroupLogin'>
                <Form.Label className='LabelEmail'>Email</Form.Label>
                <Form.Control
                placeholder="Enter email address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className='inputEmail'
                />

                <Form.Label className='LabelEmail'>Password</Form.Label>
                <InputGroup className="groupPass">
                  <Form.Control
                  placeholder="Enter password"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className='inputEmail'
                  type={type}
                  />
                  <InputGroup.Text onClick={onclickPass} className='iconPass' id="basic-addon2"><img src={IconPass} alt="IconPass" /></InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Form>
            <Stack className='ms-auto Forgot' onClick={() => navigate('/login/forgot-password', {replace: true})}>Forgot Password</Stack>

            <Button className=" buttonLogin">Login</Button>

            <div className='Register'>Don’t have account? <span className='Forgot' onClick={() => navigate('/login/register', {replace: true})}> Register for Free</span></div>
          </Card.Body>
        </Card>
      </Container> 
      <Container className='imgLogin'>
        <div className='divImgLogin'><img src={ImgLogin} alt="" /></div>
      </Container> 
    </Container>
  )
}
