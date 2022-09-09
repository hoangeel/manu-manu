import React, {useState} from 'react'
import "./index.scss"
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import ImgLogin from "assets/img/Rectangle16.png"
import IconPass from "assets/img/LognIn_3.png"
import Logo from "assets/img/LognIn_1.png"
import { useNavigate } from 'react-router';



export default function Register() {
  const [type, setType] = useState("text");
  const onclickPass = () => {
    setType("password")
  }
  const navigate = useNavigate();

  return (
    <Container className='login'>
      <Container className='contentLogin'>
        <Card className='CardLogin CardRegister'>
          <Card.Body className='CardBodyLogin'>
            <Card.Img className='CardImgLogo' src={Logo} onClick={() => navigate('/', {replace: true})}/>
            <Card.Title className='signIn'>Register</Card.Title>
            <Card.Text className='hiDear'>Welcome, new member</Card.Text>
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

                <Form.Label className='LabelEmail'>Confirm Password</Form.Label>
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

                <Form.Label className='LabelEmail'>Credit Card Number</Form.Label>
                <InputGroup className='Credit'>
                  <Form.Control
                  placeholder="Enter number"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className='inputNumber inputCredit'
                  />
                  <Form.Control
                  placeholder="MM/YY"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className='inputMMYY inputCredit'
                  />
                  <Form.Control
                  placeholder="CVV"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className='inputCVV inputCredit'
                  />
                </InputGroup>

                <InputGroup className='check'>
                  <Form.Check className='formCheck' />
                  <Form.Text className='textCheck'>
                    I agree to ManuManu <span className='spanCheck'>Terms of Use</span> and <span className='spanCheck'>Privacy Policy</span>
                  </Form.Text>
                </InputGroup>

              </Form.Group>
            </Form>
            <Button className=" buttonLogin">Create Account</Button>
            <div className='Register'> Already have an account? <span className='Forgot' onClick={() => navigate('/login', {replace: true})}> Login</span></div>
          </Card.Body>
        </Card>
      </Container> 
      <Container className='imgLogin'>
        <div className='divImgLogin'><img src={ImgLogin} alt="" /></div>
      </Container> 
    </Container>
  )
}
