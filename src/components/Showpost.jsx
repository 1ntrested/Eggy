import React, { useState,useEffect } from 'react'
import axios from 'axios';
import GetPost from './GetPost';
import "./GetPost.css";
function Showpost() {
  //sara data ajayega post ka 
  
const[arr,setData]=useState([]);    
    //useEffect to get the immediate data from the webpage
    useEffect(()=>{ 
        const fetchPosts=async()=>{
            try {
               const myposts= await axios.get('http://localhost:3000/users/posts')
             //  console.log(myposts)
               setData(myposts.data.posts)
             }
             catch (error) {
                console.log(error)
            }
        }
        fetchPosts();

    },[]);
   // console.log(arr)
   const handleDeletePost=(postId)=>{
    //agar purani posts mein se koi id match ni kri to dubara render krega 
    //delete ho chuka hai dubara rerender krdo  
    setData((prevPosts)=>prevPosts.filter((post)=>post._id !==postId))
   }
  return (
    <div>
        <h1>easteregg</h1>
        { 
            arr.map((obj,key)=>{
            return (<GetPost data={obj} onDelete={handleDeletePost}/>)
            })
        }
    </div>
  )
}

export default Showpost