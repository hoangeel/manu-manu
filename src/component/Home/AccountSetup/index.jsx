import React from 'react'
import {useNavigate} from 'react-router';
import "./index.scss"
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';


export default function Setup() {
  const navigate = useNavigate();

  return (
    <Row className="justify-content-center Setup">
        <Card className='Account'>
            <Card.Title className='titleAccount'>Account Information</Card.Title>

            <Stack direction="horizontal" className='email'>
              <div className='cardEmail'>
                <Card.Text className='h3Email'>Email</Card.Text>
                <Card.Text className='textEmail'>jayowner@manumanu.com</Card.Text>
              </div>
              <Button className='Change ms-auto'>Change</Button>
            </Stack>

            <Stack direction="horizontal" className='email'>
              <div className='cardEmail'>
                <Card.Text className='h3Email'>Password</Card.Text>
                <Card.Text className='textEmail'>Last Update: 12/03/2022</Card.Text>
              </div>
              <Button className='Change ms-auto'>Change</Button>
            </Stack>

            <Stack direction="horizontal" className='email'>
              <div className='cardEmail'>
                <Card.Text className='h3Email'>Credit Card</Card.Text>
                <Card.Text className='textEmail'>Visa - Card ending in 1234</Card.Text>
              </div>
              <Button className='Change ms-auto'>Change</Button>
            </Stack>
        </Card>
        <Card className='Account'>
            <Card.Title className='titleAccount'>Account Removal</Card.Title>
            <Card.Text className='Disabling'>Disabling your account means you will stop the service</Card.Text>

            <Stack direction="horizontal" className='groupButton'>
              <Button className='Disable'>Disable Account</Button>
              <Button className='Deactivate' onClick={() => navigate('/select-services', {replace: true})}>Deactivate Service</Button>
            </Stack>
        </Card>
    </Row>
  )
}
