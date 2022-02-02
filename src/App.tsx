import * as React from "react";
import "./App.css";
import AddBookmark from "./components/addFormPopup.tsx";
import BookmarkList from "./components/bookmarksList.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

type Bookmarks = {
  bookmarkDatas: [];
};
class App extends React.Component<Bookmarks> {
  state: Bookmarks = {
    bookmarkDatas: [],
  };
  setNewBookmark = (bookmark: never) => {
    console.log(bookmark);
    this.setState((state) => {
      const add = this.state.bookmarkDatas.push(bookmark);
      return add;
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Gestionnaire de marque-page</h1> <br />
        {/* Bouton popup d'ajout d'url aux bookmarks */}
        <AddBookmark setNewBookmark={this.setNewBookmark} />
        {/* Ajout de la liste des bookmarks */}
        <BookmarkList BookmarkListItem={this.state.bookmarkDatas} />
      </div>
    );
  }
}

export default App;
