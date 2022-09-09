
import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import "./index.scss"
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export default function Test() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/about', {replace: true});
  };
  
  const [a, setA] = useState()
  function ok() {
  }
  const [show, setShow] = useState(true);

  return (
    <Container>
      <br/>
      <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
    </Container>
  );
}
