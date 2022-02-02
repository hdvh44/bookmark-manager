import React from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function BookmarkList({ BookmarkListItem }) {
  /* Fonction de suppression d'une data dans le array */
  function handleDelete(id) {
    console.log(id);
    const newList = BookmarkListItem.filter((item) => item.id !== id);

    console.log(newList);
  }
  return (
    <div className="bookmarks-list">
      {/* Mapping des bookmarks */}
      {BookmarkListItem.map((item) => {
        /* console.log(item.title); */
        /* Les liens "video" ne contiennent pas les mêmes informations que les lien "photo", d'où le contrôle de la valeur data.type */
        if (item.data.type === "video") {
          return (
            <Card
              key={item.id}
              style={{
                maxWidth: "18rem",
                flex: 1,
                margin: "10px",
                flexGrow: 1,
              }}
            >
              <Card.Img
                variant="top"
                src={item.data.thumbnail_url}
                width={item.data.thumbnail_width}
                height={item.data.thumbnail_height}
              />
              <Card.Body>
                <Card.Title>{item.data.title}</Card.Title>

                <Card.Text>
                  Auteur :{" "}
                  <a href={item.data.author_url} target={"_blank"}>
                    {item.data.author_name}
                  </a>
                  <br />
                  Durée :{" "}
                  {new Date(item.data.duration * 1000)
                    .toISOString()
                    .substr(11, 8)}
                  <br />
                  {/* Ajouté il y a {item...}<br/> */}
                  Publiée le{" "}
                  {new Intl.DateTimeFormat("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                  }).format(Date.parse(item.data.upload_date))}{" "}
                  sur {item.data.provider_name}
                </Card.Text>
                <Button
                  href={item.data.url}
                  target={"_blank"}
                  variant="primary"
                >
                  Visiter
                </Button>
                <Button variant="danger" onClick={() => handleDelete(item.id)}>
                  Supprimer
                </Button>
              </Card.Body>
            </Card>
          );
        } else {
          return (
            <Card
              key={item.id}
              style={{
                maxWidth: "18rem",
                flex: 1,
                margin: "10px",
                flexGrow: 1,
              }}
            >
              <Card.Img
                variant="top"
                src={item.data.thumbnail_url}
                width={item.data.thumbnail_width}
                height={item.data.thumbnail_height}
              />
              <Card.Body>
                <Card.Title>{item.data.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  ({item.data.width}x{item.data.height})
                </Card.Subtitle>
                <Card.Text>
                  Auteur :{" "}
                  <a href={item.data.author_url} target={"_blank"}>
                    {item.data.author_name}
                  </a>
                  <br />
                  {/* Ajouté il y a {item...}<br/> */}
                  Posté sur {item.data.provider_name}
                </Card.Text>
                <Button
                  href={item.data.url}
                  target={"_blank"}
                  variant="primary"
                >
                  Visiter
                </Button>
                <Button variant="danger" onClick={() => handleDelete(item.id)}>
                  Supprimer
                </Button>
              </Card.Body>
            </Card>
          );
        }
      })}
    </div>
  );
}
export default BookmarkList;
