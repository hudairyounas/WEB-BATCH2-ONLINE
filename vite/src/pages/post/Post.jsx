import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, deletePost, getPost } from "../../store/slices/post.slice";
import Model from "../../components/model/Model";

const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);
    const [post, setPost] = useState(null);

  const dispatch = useDispatch();

  const posts = useSelector((store) => store.postSlice.post);
  const loading = useSelector((store) => store.postSlice.isLoading);

   function openModal(post) {
    setPost(post)
    setIsOpen(true);
  }


  const handleSubmit = () => {
    let data = {
      title,
      description,
      timestamp: new Date().toLocaleDateString(),
    };
    dispatch(addPosts(data));
  };

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <>
      <label htmlFor="title">Title:</label>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border-2 border-red-600"
        type="text"
        id="title"
        placeholder="Enter title"
      />
      <br />
      <br />
      <label htmlFor="description">Description:</label>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border-2 border-red-600"
        type="text"
        id="description"
        placeholder="Enter description"
      />
      <br />
      <br />
      <button
        onClick={handleSubmit}
        className="border-2 border-red-600 bg-black text-white p-2 rounded-lg"
      >
        Submit
      </button>

      <div>
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="border-2 border-amber-950">
              <h1>{post.title}</h1>
              <p>{post.description}</p>
              <p>{post.id}</p>
              <button className="bg-red-500 text-white px-2 rounded-lg" onClick={() => dispatch(deletePost(post.id))}>Del</button>
              <button className="bg-green-500 text-white px-2 rounded-lg" onClick={()=>openModal(post)}>Update</button>
            </div>
          ))
        )}
      </div>

      <Model modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} post={post} />
    </>
  );
};

export default Post;
