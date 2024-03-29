import "bootstrap/dist/css/bootstrap.min.css";
import "./bookCard.css";
import Rating from "@mui/material/Rating";

function BookCard(props) {
  let { props: book } = props;
  
  return (
    <div>
      <div
        className="bookCard d-flex flex-column  justify-content-center align-items-center    p-3"
        style={{ width: "fit-content" }}
      >
        <img
          className="my-2"
          src={book.thumbnailUrl}
          style={{ width: "200px", height: "300px", borderRadius: "15px" }}
        />
        <Rating
            name="simple-controlled "
            className="mt-2"
            value={book.rating||4}
            readOnly
          />
        <div
          className="category mt-3"
          style={{ color: "#a757bf", fontSize: "small", fontWeight: "bold" }}
        >
          {book.categories[0]}
        </div>
        <h5 className="title mt-2" style={{ fontWeight: "bold" }}>
          {book.title}
        </h5>
        <div className="auther mb-1" style={{ color: "#8f8f8f" }}>
          {book.authors[0]}
        </div>
        <h5 className="price my-4 px-3">{book.price} L.E</h5>
        <div className="rating ">
          
        </div>
      </div>
    </div>
  );
}

export default BookCard;
