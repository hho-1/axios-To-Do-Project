import React, { useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'
import EditBilgi from './EditBilgi'

const BilgiList = ({ bilgiler, deleteBilgiler,getBilgiler }) => {

  const[item,setItem]=useState("")
   
  
    return (
      <div className="container mt-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col" className="text-center">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {bilgiler.map((eleman) => {
              const{id,title,description}=eleman
              return (
                <tr key={id}>
                  <th>{id}</th>
                  <td>{title}</td>
                  <td>{description} </td>
                  <td className="text-center ">
                    
                    <FaEdit
                      data-bs-toggle="modal"
                      data-bs-target="#editModal"
                      size={20}
                      type="button"
                      className="me-2 text-warning cursor-pointer me-3"
                      onClick={()=>setItem(eleman)}
                    />
                    <AiFillDelete
                      type="button"
                      size={22}
                      className="text-danger cursor-pointer"
                      //!burada id göndermek zorunda değiliz title da gönderilebilir
  
                      onClick={() => deleteBilgiler(id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
  
        <EditBilgi item ={item} setItem={setItem} getBilgiler={getBilgiler}/>
      </div>
    );
  };

export default BilgiList