import React, {useState, useEffect} from 'react'
import "./index.scss"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Logo from "assets/img/LognIn_1.png"
import IconSearch from "assets/img/iconsearch.png"
import IconOnclickFull from "assets/img/homeFull.png"
import IconOnclickQR from "assets/img/homeFull.png"
import IconOnclickSetup from "assets/img/homeFull.png"
import IconFull from "assets/img/homeList.png"
import IconQR from "assets/img/homeQR.png"
import IconSetup from "assets/img/homeSetup.png"


import FullMenuService from 'component/Home/FullMenuService/Full';
import BlankMenuService from 'component/Home/FullMenuService/Blank';
import FullQRRedirect from 'component/Home/QRRedirect/Full';
import BlankQRRedirect from 'component/Home/QRRedirect/Blank';
import Setup from 'component/Home/AccountSetup';


export default function Home() {
    const [render, setRender] = useState(<DelayFull/>);

    const [classFull, setClassFull] = useState("buttonNavigation buttonColor");
    const [classQR, setClassQR] = useState("buttonNavigation");
    const [classSetup, setClassSetup] = useState("buttonNavigation");
    const [iconFull, setIconFull] = useState(IconOnclickFull);
    const [iconQR, setIconQR] = useState(IconQR);
    const [iconSetup, setIconSetup] = useState(IconSetup);
    const onclickFull = () => {
        setClassFull("buttonNavigation buttonColor")
        setClassQR("buttonNavigation")
        setClassSetup("buttonNavigation")
        setIconFull(IconOnclickFull)
        setIconQR(IconQR)
        setIconSetup(IconSetup)
        setRender(<DelayFull/>)
    }
    const onclickQR = () => {
        setClassFull("buttonNavigation")
        setClassQR("buttonNavigation buttonColor")
        setClassSetup("buttonNavigation")
        setIconFull(IconFull)
        setIconQR(IconOnclickQR)
        setIconSetup(IconSetup)
        setRender(<DelayQR/>)
    }
    const onclickSetup = () => {
        setClassFull("buttonNavigation")
        setClassQR("buttonNavigation")
        setClassSetup("buttonNavigation buttonColor")
        setIconFull(IconFull)
        setIconQR(IconQR)
        setIconSetup(IconOnclickSetup)
        setRender(<Setup/>)
    }

  return (
    <Container fluid>
        <Container className='headerHome'>
            <Navbar style={{ padding: '0px' }}>
                <Navbar.Brand style={{ padding: '0px', margin: "0px" }} href="#home"><img src={Logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Collapse style={{ padding: '0px' }} className="justify-content-end">
                    <Navbar.Text className='search'>
                        <InputGroup className="groupSearch">
                            <Form.Control
                            placeholder="Search here"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            className='inputSearch'
                            />
                            <InputGroup.Text className='iconSearch' id="basic-addon2"><img src={IconSearch} alt="IconSeach" /></InputGroup.Text>
                        </InputGroup>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        <Container className='navigation'>
            <h1 className='Welcome'>Welcome Back, Jay 👋</h1>
            <Button onClick={onclickFull} className={classFull}><img className='iconNavigation' src={iconFull} alt="IconFull" />Full Menu Service</Button>
            <Button onClick={onclickQR} className={classQR}><img className='iconNavigation' src={iconQR} alt="IconQR" />QR Redirect</Button>
            <Button onClick={onclickSetup} className={classSetup}><img className='iconNavigation' src={iconSetup} alt="IconSetup" />Account Setup</Button>
        </Container>
        <Container className='content' fluid>
            <Container>
                {render}
            </Container>
        </Container>
    </Container>
  )
}
function DelayFull() {
    const [renderFull, setRenderFull] = useState(<BlankMenuService/>);
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
    useEffect(() => {
    async function makeRequest() {
        await delay(2000);
        setRenderFull(<FullMenuService/>)
    }

    makeRequest();
    })
    return renderFull
}
function DelayQR() {
    const [renderQR, setRenderQR] = useState(<BlankQRRedirect/>);
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
    useEffect(() => {
    async function makeRequest() {
        await delay(2000);
        setRenderQR(<FullQRRedirect/>)
    }

    makeRequest();
    })
    return renderQR
}
