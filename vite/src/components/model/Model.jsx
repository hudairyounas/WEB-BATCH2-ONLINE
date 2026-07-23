import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { updatePost } from "../../store/slices/post.slice";
import { useDispatch } from "react-redux";

const Model = ({ modalIsOpen, setIsOpen, post }) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() =>{
        if(post){
            setTitle(post.title);
            setDescription(post.description);
        }
    }, [post])

    const closeModel = () => {
        setIsOpen(false);
    }

    const handleSubmit = () => {
        let data = {
            id: post.id,
            title,
            description,
            timestamp: new Date().toLocaleDateString(),
        };
        dispatch(updatePost(data));
        closeModel();
    };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
    <input type="text" placeholder="title" className="border border-black" value={title} onChange={(e) => setTitle(e.target.value)} />
    <input type="text" placeholder="description" className="border border-black" value={description} onChange={(e) => setDescription(e.target.value)} />
    <button onClick={handleSubmit}>Update</button>
    </Modal>
  );
};

export default Model;
