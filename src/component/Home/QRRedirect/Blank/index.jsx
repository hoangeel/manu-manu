import React from 'react'
import "./index.scss"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import IconBlank from "assets/img/iconQRADD.png"

export default function Blank() {
  return (
    <Row className="justify-content-center">
        <Card className='text-center cardBlank'>
            <Card.Img variant="top" src={IconBlank} />
              <Card.Text className='textBlank'>
                  There is no things that can be displayed yet, try to add new one.
              </Card.Text>
              <Button className='buttonBlank'>Add New Menu +</Button>
        </Card>
    </Row>
  )
}
