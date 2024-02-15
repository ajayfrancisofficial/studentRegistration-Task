import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <>
    <Container>
            <Row>
                <Col lg={6} md={12} sm={12} >
                <h1 className='my-5'>
                    Education
                </h1>
                <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam adipisci illum itaque corrupti blanditiis quos consequuntur atque, sunt minima voluptas sequi voluptatem, odit error! A necessitatibus dolor iure ducimus natus?</p>
                <p>New Student? Click here to <Link to={'/register'} className='btn btn-primary'>Register</Link></p>

                </Col>
                <Col lg={6} md={12} sm={12}>
                <img className='img-fluid my-5' src="https://i.postimg.cc/vHybNsZX/studentpic-removebg-preview.png" alt="" />
                </Col>

            </Row>


    </Container>
    </>
  )
}

export default LandingPage