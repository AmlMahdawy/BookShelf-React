import { Container } from "react-bootstrap";
import Filter from "./Filter/filter";
import SearchBar from "./Search/searchBar";
import AllBooks from "./booksList/allBooks";

const Index = () => {
  return (
    <Container >
      <div className="vh-100 ">

      <div className="row">
<div className="col-md-12"> <SearchBar /></div>
      </div>

      <div className="sec-section row ">
        <div className="filter  col-md-3  ">
          <Filter />
        </div>
        <div className="list col-md-9 ">
          <AllBooks />
        </div>
      </div>
      </div>

    </Container>
  );
};

export default Index;
