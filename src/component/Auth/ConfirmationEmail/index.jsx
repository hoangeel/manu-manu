import React from 'react'
import "./index.scss"
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import ImgLogin from "assets/img/Rectangle16.png"
import Logo from "assets/img/LognIn_1.png"



export default function ConfirmationEmail() {
  return (
    <Container className='login'>
      <Container className='contentLogin'>
        <Card className='CardLogin CardRegister'>
          <Card.Body className='CardBodyLogin'>
            <Card.Img className='CardImgLogo' src={Logo} />
            <Card.Title className='signIn'>Verify Email Address</Card.Title>
            <Card.Text className='hiDear'>
              We’ve sent a verification email to: 
              <div className='EmailAddress'>jayowner@manumanu.com</div>
            </Card.Text>
            <Button className=" buttonLogin">Send Email Activation</Button>
            <div className='Register'> 
              Click the link in your email to verify your account. If you can’t fint the email check your spam folder or
              <span className='Forgot'> Resend.</span>
            </div>
          </Card.Body>
        </Card>
      </Container> 
      <Container className='imgLogin'>
        <div className='divImgLogin'><img src={ImgLogin} alt="" /></div>
      </Container> 
    </Container>
  )
}
