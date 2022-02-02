import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, Modal } from "react-bootstrap";
import { v4 as uuid } from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";

function AddBookmark({ setNewBookmark }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [url, setUrl] = useState("");

  /* Fonction appelée lors de la soumission du formulaire */
  async function handleSubmit(e) {
    e.preventDefault();
    handleApiCall(url);
    handleClose();
  }
  /* Récupération des données format JSON via l'API Noembed */
  function handleApiCall(urlparams: string) {
    let urlToSend = encodeURIComponent(urlparams);
    const urlApi = `https://noembed.com/embed?url=${urlToSend}&format=json/`;
    console.log("encoded : " + urlToSend);
    fetch(urlApi, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Request-Method": "GET",
        "Content-Type": "'application/json'",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setNewBookmark({ data, id: uuid() });
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="App">
      {/* Bouton d'ajout de bookmark */}
      <Button variant="success" onClick={handleShow}>
        Ajouter
      </Button>
      {/* Popup du formulaire d'ajouts */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajout d'un marque-page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>URL </Form.Label>
              <Form.Control
                type="url"
                placeholder="https://"
                onChange={(e) => setUrl(e.target.value)}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Ajouter
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default AddBookmark;
