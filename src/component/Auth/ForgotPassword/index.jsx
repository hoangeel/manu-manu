import React from 'react'
import "./index.scss"
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import ImgLogin from "assets/img/LognIn_2.png"
import IconBack from "assets/img/Frame35.png"
import { useNavigate } from 'react-router';



export default function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <Container className='login'>
      <Container className='contentLogin'>
        <Card className='CardLogin'>
          <Card.Body className='CardBodyLogin'>
            <Card.Img className='CardImgLogo' src={IconBack} onClick={() => navigate('/login', {replace: true})}/>
            <Card.Title className='signIn'>Forgot Your Password</Card.Title>
            <Card.Text className='hiDear'>Enter your email address and we’ll send you the instructions for resetting the password.</Card.Text>
            <Form className='formLogin'>
              <Form.Group className='formGroupLogin'>
                <Form.Label className='LabelEmail'>Email</Form.Label>
                <Form.Control
                placeholder="Enter email address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className='inputEmail'
                />
              </Form.Group>
            </Form>

            <Button className=" buttonLogin">Reset password</Button>

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
