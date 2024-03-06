import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
// import { mockUsers } from "./mockUsers";
import { Search } from "./utils/SearchApi";

export default function App() {
  const [users, setUsers] = useState([]);
  
  function HandleSearch(query) {
    if(query==='') {
      return setUsers([])
    }
    Search(query)
      .then((data) => {
        setUsers(data.users)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  return (
    <SearchContext.Provider value={{ users }}>
      <SearchForm onSearch={HandleSearch} />
      <SearchResults />
    </SearchContext.Provider>
  );
}
