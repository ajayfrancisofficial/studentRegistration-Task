import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getallstudentdetailsAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AllStudents() {
    const [allStudents,setAllStudents]=useState([])
    useEffect(()=>{
        toast.success("Registration Successful")
        getallstudentdetails()
    },[])

    const getallstudentdetails=async()=>{
        const result= await getallstudentdetailsAPI()
        if(result.status==200){
            // console.log(result.data);
            setAllStudents(result.data);
            
        }
    }
    // console.log(allStudents);
  return (
    <>
                <ToastContainer autoClose={2000} />

   <div className='container text-center my-5'> 
   <h1 className='my-5'>Student Details</h1>
   <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>DOB</th>
          <th>Gender</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        {allStudents.length>0?allStudents.map((student,index)=><tr key={index}>
          
          <td>{student.firstName}</td>
          <td>{student.lastName}</td>
          <td>{student.address}</td>
          <td>{student.email}</td>
          <td>{student.gender}</td>
          <td>{student.mobile}</td>
          <td>{student.DOB}</td>
          <td>{student.course}</td>
        </tr>):
        <td>No data</td>
        }
        
        
      </tbody>
    </Table>
    <Link to={'/'} className='btn btn-primary'>Go Back</Link>
   </div>
    </>
  )
}

export default AllStudents