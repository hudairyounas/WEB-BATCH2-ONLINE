import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, deletePost, getPost } from "../../store/slices/post.slice";
import Model from "../../components/model/Model";
import axios from "axios";

const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState(null);
  // https://res.cloudinary.com/dqdmtwueq/image/upload/v1784907265/sun_iyecpl.jpg

  const dispatch = useDispatch();

  const posts = useSelector((store) => store.postSlice.post);
  const loading = useSelector((store) => store.postSlice.isLoading);

  function openModal(post) {
    setPost(post);
    setIsOpen(true);
  }

  const handleSubmit = () => {
    let data = {
      title,
      description,
      image,
      timestamp: new Date().toLocaleDateString(),
    };
    dispatch(addPosts(data));
  };

  const onImageHandler = async (e) => {
    let file = e.target.files[0];
    if (file) {
      // file upload to cloudinary
      try {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "ml_default");
        let cloudName = "dqdmtwueq";
        let res = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          data,
        );
        const secureUrl = res.data.secure_url;
        setImage(secureUrl);
        console.log(secureUrl);
      } catch (err) {
        console.log(err.message);
      }
    }
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
      <label htmlFor="image">Image:</label>
      <input
        className="border-2 border-red-600"
        type="file"
        onChange={(e) => onImageHandler(e)}
        hidden
      />
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
              <img src={post.image} alt="" className="w-20 h-20" />
              <button
                className="bg-red-500 text-white px-2 rounded-lg"
                onClick={() => dispatch(deletePost(post.id))}
              >
                Del
              </button>
              <button
                className="bg-green-500 text-white px-2 rounded-lg"
                onClick={() => openModal(post)}
              >
                Update
              </button>
            </div>
          ))
        )}
      </div>

      <Model modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} post={post} />
    </>
  );
};

export default Post;
