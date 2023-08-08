import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BilgiList from '../components/BilgiList'
import AddBilgi from '../components/AddBilgi'

const Home = () => {

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/"

  const [bilgiler, setBilgiler] = useState([])

  const getBilgiler = async () => {
    try{
      const {data} = await axios.get(url)
    setBilgiler(data)
    } catch(error){
      console.log(error);
    }
    
  }

  useEffect(()=>{
    getBilgiler()
  }, [])


  const postBilgiler = async (newData) => {
    await axios.post(url, newData)
    getBilgiler()
  }

  const deleteBilgiler = async (id) => {
    await axios.delete(`${url} ${id}/`)
    getBilgiler()
  }

  

  console.log(bilgiler);
  

  return (
    <div>
      <AddBilgi postBilgiler = {postBilgiler}/>
      <BilgiList bilgiler= {bilgiler} deleteBilgiler={deleteBilgiler}/>
    </div>
  )
}

export default Home