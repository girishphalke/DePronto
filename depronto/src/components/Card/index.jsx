import { React, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

const BlogCard = () => {
  const [data, setData] = useState([]);
  const BlogPost = "https://jsonplaceholder.typicode.com/posts";

  const getBlogData = () => {
    fetch(BlogPost)
      .then((response) => response.json())
      .then((res) => {
        console.log("all blog", res);
        setData(res);
      });
  };

  useEffect(() => {
    getBlogData();
  }, []);

  const [modeldata, setModeldata] = useState({
    id: "",
    title: "",
    body: "",
  });

  const showDetail = (id) => {
    fetch(`BlogPost/${id}`)
      .then((resposne) => resposne.json())
      .then((res) => setModeldata(res));
  };

  return (
    <>
      {data.slice(0, 3).map((item, id) => {
        return (
          <Card key={item.id}>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.body}</Card.Text>
              <button
                onClick={(e) => showDetail(item.id)}
                data-toggle="modal"
                data-target="#myModal"
                class="btn btn-primary"
              >
                Learn More
              </button>
            </Card.Body>
          </Card>
        );
      })}

      <div class="modal" id="myModal">
        <div class="modal-dialog" style={{ width: "700px" }}>
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Row No : {modeldata.id}</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
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
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
