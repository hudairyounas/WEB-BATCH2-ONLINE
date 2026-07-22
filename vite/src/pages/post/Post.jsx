import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, deletePost, getPost } from "../../store/slices/post.slice";

const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const posts = useSelector((store) => store.postSlice.post);
  const loading = useSelector((store) => store.postSlice.isLoading);

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
    <div>
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
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="border-2 border-amber-950">
              <h1>{post.title}</h1>
              <p>{post.description}</p>
              <p>{post.id}</p>
              <button onClick={() => dispatch(deletePost(post.id))}>Del</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Post;
