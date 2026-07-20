import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPosts } from '../../store/slices/post.slice';

const Post = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch()

    const handleSubmit = () => {
        let data = {
            title,
            description,
            timestamp: new Date().toLocaleDateString(),
        }
        dispatch(addPosts(data))
    }

  return (
    <div>
        <label htmlFor="title">Title:</label>
        <input onChange={(e) => setTitle(e.target.value)} value={title} className='border-2 border-red-600' type="text" id="title" placeholder='Enter title' />
        <br />
        <br />
        <label htmlFor="description">Description:</label>
        <input onChange={(e) => setDescription(e.target.value)} value={description} className='border-2 border-red-600' type="text" id="description" placeholder='Enter description' />
        <br />
        <br />
        <button onClick={handleSubmit} className='border-2 border-red-600 bg-black text-white p-2 rounded-lg'>Submit</button>
    </div>
  )
}

export default Post