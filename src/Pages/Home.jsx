import React, { useState } from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";

import "bootstrap/dist/css/bootstrap.min.css";
import BookCard from "./../Components/bookCard";
import axios from "axios";
import { useEffect } from "react";
import { Opacity } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import EmblaCarouselReact from "embla-carousel-react";

const OPTIONS = { align: "start" };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Home = () => {
  let [books, setBooks] = useState([]);
  var items = [
    {
      img: "eliabe-costa-tzsUJD0TGkk-unsplash.jpg",
      header: "Find over 100 K Books on Clever.",
      paragraph:
        "Join the community of readers at Clever and discover the joy of losing yourself in a good book.",
    },
    {
      img: " https://plus.unsplash.com/premium_photo-1661964153042-56211a8e2d0b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      header: "Find Inspiration on Every Page at Clever .",
      paragraph:
        "Step into Clever Bookstore and immerse yourself in a world of literature. ",
    },
    {
      img: " https://images.unsplash.com/photo-1573712926064-296255051fbd?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      header: "Dive into a World of Knowledge with Clever.",
      paragraph:
        " Clever, where every book is a doorway to adventure, knowledge, and inspiration. Explore our vast collection and embark on journeys beyond imagination",
    },
  ];

  //Getting data from API in useEffext
  useEffect(() => {
    axios.get("http://localhost:3000/book/all").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <>
      {/* Carousel Part */}
      <Carousel className="w-100">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>

      {/* Book Cards Part */}
      <div className="books-container mt-5">
        <div className="container d-flex flex-column  justify-content-center align-items-center w-50">
          <h1>Trending this week </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            libero porro esse excepturi accusamus exercitationem vel quisquam
            ducimus rem neque ab earum, quas, eum molestiae inventore iste
            perspiciatis, aperiam impedit.
          </p>
        </div>
        <div className="books mt-5 d-flex flex-wrap   flex-column justify-content-center align-items-center  flex-md-row justify-content-md-center">
          {books.slice(0, 5).map((book) => {
            return <BookCard key={book.id} props={book} />;
          })}
        </div>
      </div>

      {/* Facilites Part */}
      <div className="features mt-5 d-flex justify-content-center ">
        <div className="content my-3 w-75 d-flex   flex-column  flex-lg-row justify-content-lg-between align-items-center justify-content-center  ">
          <div className="feature ">
            <div className="icon my-4">
              <img src="public/Icons/on-time.png" />
            </div>
            <h5 className="my-3">Quick Delivery</h5>
            <p style={{ color: "gray", Opacity: "30%" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              maiores maxime dolorem atque in illo magni sed eveniet dolores
              accusantium, .
            </p>
          </div>
          <div className="feature ">
            <div className="icon my-4">
              <img src="public/Icons/credit-card.png" />
            </div>
            <h5 className="my-3">Secure Payment</h5>
            <p style={{ color: "gray", Opacity: "30%" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              maiores maxime dolorem atque in illo magni sed eveniet dolores
              accusantium, .
            </p>
          </div>
          <div className="feature ">
            <div className="icon my-4">
              <img src="public/Icons/exclusive.png" />
            </div>
            <h5 className="my-3">Best Quality</h5>
            <p style={{ color: "gray", Opacity: "30%" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              maiores maxime dolorem atque in illo magni sed eveniet dolores
              accusantium, .
            </p>
          </div>
          <div className="feature ">
            <div className="icon my-4">
              <img src="public/Icons/protection.png" />
            </div>
            <h5 className="my-3">Return Guarantee</h5>
            <p style={{ color: "gray", Opacity: "30%" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              maiores maxime dolorem atque in illo magni sed eveniet dolores
              accusantium, .
            </p>
          </div>
        </div>
      </div>

      {/* Best Sales Part */}
      <div className="bestSales mt-5">
        <div className="container d-flex flex-wrap  w-75 ">
          <div className="div book-display-card col-12 col-lg-6 mt-4 mt-lg-0 d-flex">
            <div className="book-cover-con  mx-2">
              <img
                src={books[0]?.thumbnailUrl}
                style={{
                  width: "200px",
                  height: "300px",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div className="data-con w-50 mx-2 d-flex flex-column justify-content-between h-75 ">
              <div className="d-flex justify-content-evenly ">
                <p
                  style={{
                    backgroundColor: "#e3e3e3",
                    color: "#8d27ad",
                    padding: "5px",
                    borderRadius: "10px",

                    textAlign: "center",
                    fontSize: "smaller",
                    fontWeight: "semi-bold",
                  }}
                  className=""
                >
                  {books[0]?.categories[0]}
                </p>
                <div
                  style={{
                    backgroundColor: "#ffd781",
                    color: "#ff7a01 ",
                    padding: "5px",
                    borderRadius: "10px",
                   
                    display: "flex",
                    justifyContent: "space-around",
                    maxHeight: "35px",
                  }}
                >
                  <img
                    src="./../../public/Icons/star.png"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <p>4.0</p>
                </div>
              </div>
              <div className="data-con w-100 ms-4 ">
                <h5>{books[0]?.title}</h5>
                <p style={{ color: "#8f8f8f" }}>{books[0]?.authors[0]}</p>
              </div>
              <div className="data-con w-100 ms-4 ">
                <h2 style={{ color: "#9436b2" }}>{books[0]?.price} L.E</h2>
              </div>
            </div>
          </div>
          <div className="div book-display-card col-12 col-lg-6 mt-4 mt-lg-0  d-flex">
            <div className="book-cover-con  mx-2">
              <img
                src={books[1]?.thumbnailUrl}
                style={{
                  width: "200px",
                  height: "300px",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div className="data-con w-50 mx-2 d-flex flex-column justify-content-between h-75 ">
              <div className="d-flex justify-content-evenly ">
                <p
                  style={{
                    backgroundColor: "#e3e3e3",
                    color: "#8d27ad",
                    padding: "5px",
                    borderRadius: "10px",
                    width: "50%",
                    textAlign: "center",
                    fontSize: "smaller",
                    fontWeight: "semi-bold",
                  }}
                >
                  {books[1]?.categories[0]}
                </p>
                <div
                  style={{
                    backgroundColor: "#ffd781",
                    color: "#ff7a01 ",
                    padding: "5px",
                    borderRadius: "10px",
                    
                    display: "flex",
                    justifyContent: "space-around",
                    maxHeight: "35px",
                  }}
                >
                  <img
                    src="./../../public/Icons/star.png"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <p>3.0</p>
                </div>
              </div>
              <div className="data-con w-100 ms-4 ">
                <h5>{books[1]?.title}</h5>
                <p style={{ color: "#8f8f8f" }}>{books[1]?.authors[0]}</p>
              </div>
              <div className="data-con w-100 ms-4 ">
                <h2 style={{ color: "#9436b2" }}>{books[1]?.price} L.E</h2>
              </div>
            </div>
          </div>
          <div className="div book-display-card col-12 col-lg-6  mt-4 d-flex">
            <div className="book-cover-con  mx-2">
              <img
                src={books[2]?.thumbnailUrl}
                style={{
                  width: "200px",
                  height: "300px",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div className="data-con w-50 mx-2 d-flex flex-column justify-content-between h-75 ">
              <div className="d-flex justify-content-evenly ">
                <p
                  style={{
                    backgroundColor: "#e3e3e3",
                    color: "#8d27ad",
                    padding: "5px",
                    borderRadius: "10px",
                    width: "50%",
                    textAlign: "center",
                    fontSize: "smaller",
                    fontWeight: "semi-bold",
                  }}
                >
                  {books[2]?.categories[0]}
                </p>
                <div
                  style={{
                    backgroundColor: "#ffd781",
                    color: "#ff7a01 ",
                    padding: "5px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-around",
                    maxHeight: "35px",
                  }}
                >
                  <img
                    src="./../../public/Icons/star.png"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <p>4.5</p>
                </div>
              </div>
              <div className="data-con w-100 ms-4 ">
                <h5>{books[2]?.title}</h5>
                <p style={{ color: "#8f8f8f" }}>{books[2]?.authors[0]}</p>
              </div>
              <div className="data-con w-100 ms-4 ">
                <h2 style={{ color: "#9436b2" }}>{books[2]?.price} L.E</h2>
              </div>
            </div>
          </div>
          <div className="div book-display-card col-12 col-lg-6  mt-4 d-flex">
            <div className="book-cover-con  mx-2">
              <img
                src={books[3]?.thumbnailUrl}
                style={{
                  width: "200px",
                  height: "300px",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div className="data-con w-50 mx-2 d-flex flex-column justify-content-between h-75 ">
              <div className="d-flex justify-content-evenly ">
                <p
                  style={{
                    backgroundColor: "#e3e3e3",
                    color: "#8d27ad",
                    padding: "5px",
                    borderRadius: "10px",
                    width: "50%",
                    textAlign: "center",
                    fontSize: "smaller",
                    fontWeight: "semi-bold",
                  }}
                >
                  {books[3]?.categories[0]}
                </p>
                <div
                  style={{
                    backgroundColor: "#ffd781",
                    color: "#ff7a01 ",
                    padding: "5px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-around",
                    maxHeight: "35px",
                    fontWeight: "semi-bold",
                  }}
                >
                  <img
                    src="./../../public/Icons/star.png"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <p>3.0</p>
                </div>
              </div>
              <div className="data-con w-100 ms-4 ">
                <h5>{books[3]?.title}</h5>
                <p style={{ color: "#8f8f8f" }}>{books[3]?.authors[0]}</p>
              </div>
              <div className="data-con w-100 ms-4 ">
                <h2 style={{ color: "#9436b2" }}>{books[3]?.price} L.E</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//Function for main Carousel
function Item(props) {
  return (
    <>
      <Paper>
        <div className={"containerItems "}>
          <div className="img-container">
            <img src={props.item.img}></img>
            <div className="overlay"></div>
          </div>
          <div className="container-items col-lg-4 col-md-6 col-10 ">
            <div className="promo-container">
              <div
                className="p-one"
                style={{ fontSize: "15px", color: "white" }}
              >
                HOT PROMO
              </div>
              <div
                className="p-two"
                style={{ fontSize: "15px", color: "white" }}
              >
                discount 60% !Special Book Day
              </div>
            </div>
            <h1>{props.item.header}</h1>
            <p>{props.item.paragraph}</p>
            <Button className="CheckButton">Go to Collection </Button>
          </div>
        </div>
      </Paper>
    </>
  );
}

export default Home;
