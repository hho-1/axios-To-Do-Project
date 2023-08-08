import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'

const BilgiList = ({bilgiler, deleteBilgiler}) => {
  
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {bilgiler.map(({id, title, description}) => (
          <tr key={id}>
            <th> {id} </th>
            <td> {title} </td>
            <td> {description} </td>
            <td> 
              <AiFillDelete onClick={()=>deleteBilgiler(id)} type='button' size={20} className='text-danger'/>
              <FaEdit type='button' size={22} className='text-warning'/> 
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default BilgiList