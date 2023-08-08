import React, { useState } from 'react'

const AddBilgi = ({postBilgiler}) => {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    postBilgiler({title:title, description: desc})
    setTitle('')
    setDesc('')
  }

  return (
    <div className='text-center container'>
      <h1 className='text-danger'>Add information</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
          value={title}
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            onChange={(e) => {setTitle(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
          value={desc}
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            onChange={(e) => {setDesc(e.target.value)}}
          
          />
        </div>
        <button type="submit" className="btn btn-lg btn-success mb-4">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddBilgi