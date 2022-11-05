import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

const SingleBlogModal = () => {
  const [data, setData] = useState([]);
  const BlogPost = "https://jsonplaceholder.typicode.com/posts";
  const [modeldata, setModeldata] = useState({
    id: "",
    title: "",
    body: "",
  });

  const showDetail = (id) => {
    fetch(BlogPost)
      .then((resposne) => resposne.json())
      .then((res) => setModeldata(res));
  };

  return (
    <>
      {data.map((item, id) => {
        return (
          <Card key={item.id}>
            <Card.Body>
              <Modal.Header>
                <Card.Title>{item.title}</Card.Title>
              </Modal.Header>
              <Modal.Body>
                <Card.Text>{item.body}</Card.Text>
              </Modal.Body>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default SingleBlogModal;
