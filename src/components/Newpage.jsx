import React from 'react'
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import "./Newpage.css";
function Newpage() {
const location=useLocation();
const data=location.state?.data;

  return (
      <div className='content-box'>
        <div className='T'>
         {data.title}
        </div>
        <div className='img-box'>
         <img className="img-id" src={data.imageUrl? data.imageUrl : ""} alt="" />
      </div>
        <div className='D'>
         <p>{data.description}</p>
        </div>
        <Button size="small">Share</Button>
        <Button size="small">Read Less</Button>
   </div>   

  )
}

export default Newpage