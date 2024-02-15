import React, { useState } from 'react'
import { Col, Container, FloatingLabel, Form, Row, Toast } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../services/allAPI';



function RegisterPage() {
    const [student, setStudent] = useState({ firstName: "", lastName: "", address: "", email: "", gender: "", mobile: "", password: "", DOB: "", course: "" })
    const navigate = useNavigate()
    const handleRegister = async (e) => {
        e.preventDefault()

        const { firstName, lastName, address, email, gender, mobile, password, DOB, course } = student
        if (!firstName || !lastName || !address || !email || !gender || !mobile || !password || !DOB || !course) {
            toast.warning("please fill the form Completely!!!")
        }
        else {
            try {
                const result = await registerAPI(student)
                if (result.status == 200) {
                    navigate('/allstudents')
                    setStudent({ firstName: "", lastName: "", address: "", email: "", gender: "", mobile: "", password: "", DOB: "", course: "" })
                }
            } catch (err) {
                console.log(err);
            }
        }


    }
    console.log(student);

    return (
        <>
            <Container>
                <div className='my-5' >
                    <Row>
                        <Col className=' text-center ' lg={3}>
                            <img className='my-3' height={'300px'} src="https://i.postimg.cc/1tzN6qLn/studentpic2-removebg-preview.png" alt="" />
                            <h1 className='my-3'>Welcome</h1>
                            <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem veniam beatae alias voluptas cum repellendus eligendi neque enim nisi quasi unde corrupti labore at eos incidunt, laboriosam fugit. Cupiditate.</p>


                            <Link to={'/'} className='btn btn-primary'>Back</Link>
                        </Col>
                        <Col className='' lg={9}>
                            <h1 className='text-center my-5'>Apply as a Student</h1>
                            <Row className='container'>
                                <Col> <FloatingLabel
                                    controlId="floatingfirstname"
                                    label="First Name"
                                    className="mb-3"
                                >
                                    <Form.Control onChange={e => { setStudent({ ...student, firstName: e.target.value }) }} value={student.firstName} type="text" placeholder="First Name" />
                                </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInputlastname"
                                        label="Last Name"
                                        className="mb-3"
                                    >
                                        <Form.Control onChange={e => { setStudent({ ...student, lastName: e.target.value }) }} value={student.lastName} type="text" placeholder="Last Name" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingTextarea"
                                        label="Address"
                                        className="mb-3"
                                    >
                                        <Form.Control onChange={e => { setStudent({ ...student, address: e.target.value }) }} value={student.address} as="textarea" placeholder="Address" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInputemail"
                                        label="Email "
                                        className="mb-3"
                                    >
                                        <Form.Control onChange={e => { setStudent({ ...student, email: e.target.value }) }} value={student.email} type="email" placeholder="email" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingSelect" label="Gender">
                                        <Form.Select onChange={e => { setStudent({ ...student, gender: e.target.value }) }} value={student.gender} aria-label="Floating label select example">
                                        <option value="">Choose any one</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </Form.Select>
                                    </FloatingLabel>

                                </Col>
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingInputmobile"
                                        label="Mobile "
                                        className="mb-3"
                                    >
                                        <Form.Control onChange={e => { setStudent({ ...student, mobile: e.target.value }) }} value={student.mobile} type="number" placeholder="Mobile" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Password "
                                        className="mb-3"
                                    >
                                        <Form.Control onChange={e => { setStudent({ ...student, password: e.target.value }) }} value={student.password} type="password" placeholder="Password" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Date Of Birth  "
                                        className="mb-3"
                                    >
                                        <Form.Control onChange={e => { setStudent({ ...student, DOB: e.target.value }) }} value={student.DOB} type="date" placeholder="DOB" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingSelect" label="Course">
                                        <Form.Select onChange={e => { setStudent({ ...student, course: e.target.value }) }} value={student.course} aria-label="Floating label select example">
                                            <option value="">Choose any one</option>
                                            <option value="MERN">Mern</option>
                                            <option value="PYTHON">Python</option>
                                            <option value="JAVA">Java</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                    <button onClick={handleRegister} className='btn btn-success my-3  '>Register</button>
                                </Col>
                            </Row>

                        </Col>
                    </Row>

                </div>

            </Container>
            <ToastContainer autoClose={2000} />


        </>
    )
}

export default RegisterPage