import React, { useState } from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";
import LoginPage from "./LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import BookCard from "./../Components/bookCard";
import axios from "axios";
import { useEffect } from "react";
import { Opacity } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import EmblaCarouselReact from "embla-carousel-react";
import CategorieCard from "../Components/CategorieCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ButtonMui from "@mui/material/Button";

const Home = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

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
  var categories = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Ykrp-qg_qg3GhT_czXbHIGvFTVTE7nihxUkSXb-6FA&s",
      title: "Artistry ",
    },
    {
      img: "https://images.unsplash.com/photo-1588072432904-843af37f03ed?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Children",
    },
    {
      img: "https://images.unsplash.com/photo-1619819583905-2d5228bf4560?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvb2tib29rfGVufDB8fDB8fHww",
      title: "Recipe",
    },
    {
      img: "https://images.unsplash.com/photo-1599901723404-e38e7192b930?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
      title: "Novels",
    },
    {
      img: "https://images.unsplash.com/photo-1491841651911-c44c30c34548?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mystrey",
    },
  ];

  //Getting data from API in useEffext
  useEffect(() => {
    axios.get("http://localhost:3000/book/all").then((res) => {
      setBooks(res.data);
    });
  }, []);

  const items2 = [
    <div className="item" data-value="1">
      <div className="container">
        <div className="img">
          <img
            src={books[0]?.thumbnailUrl}
            style={{
              maxHeight: "300px",
              maxWidth: "1250px",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="container">
          <Rating
            name="simple-controlled "
            style={{ marginTop: "10%" }}
            value={4}
            readOnly
          />
          <h5>{books[0]?.title}</h5>
          <p style={{ color: "#8f8f8f" }}>{books[0]?.authors[0]}</p>
        </div>
        <div className="container">
          <div
            style={{
              backgroundColor: "#eedff4",
              padding: "5px",
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              marginTop: "15%",
            }}
          >
            <p className="mt-3">{books[0]?.price} L.E.</p>
            <div className="icon d-flex justify-content-end  align-items-center">
              <img
                src="./../../public/Icons/shopping-basket.png"
                style={{ width: "38px", height: "38px", borderRaduis: "50%" }}
              />
              <img
                src="./../../public/Icons/more.png"
                style={{
                  maxWidth: "46px",
                  maxHeight: "46px",
                  borderRaduis: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="2">
      <div className="container">
        <div className="img">
          <img
            src={books[1]?.thumbnailUrl}
            style={{
              maxHeight: "300px",
              maxWidth: "1250px",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="container">
          <Rating
            name="simple-controlled "
            style={{ marginTop: "10%" }}
            value={4}
            readOnly
          />
          <h5>{books[1]?.title}</h5>
          <p style={{ color: "#8f8f8f" }}>{books[1]?.authors[0]}</p>
        </div>
        <div className="container">
          <div
            style={{
              backgroundColor: "#eedff4",
              padding: "5px",
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              marginTop: "15%",
            }}
          >
            <p className="mt-3">{books[1]?.price} L.E.</p>
            <div className="icon d-flex justify-content-end  align-items-center">
              <img
                src="./../../public/Icons/shopping-basket.png"
                style={{ width: "38px", height: "38px", borderRaduis: "50%" }}
              />
              <img
                src="./../../public/Icons/more.png"
                style={{
                  maxWidth: "46px",
                  maxHeight: "46px",
                  borderRaduis: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="3">
      <div className="container">
        <div className="img">
          <img
            src={books[2]?.thumbnailUrl}
            style={{
              maxHeight: "300px",
              maxWidth: "1250px",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="container">
          <Rating
            name="simple-controlled "
            style={{ marginTop: "10%" }}
            value={4}
            readOnly
          />
          <h5>{books[2]?.title}</h5>
          <p style={{ color: "#8f8f8f" }}>{books[2]?.authors[0]}</p>
        </div>
        <div className="container">
          <div
            style={{
              backgroundColor: "#eedff4",
              padding: "5px",
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              marginTop: "15%",
            }}
          >
            <p className="mt-3">{books[2]?.price} L.E.</p>
            <div className="icon d-flex justify-content-end  align-items-center">
              <img
                src="./../../public/Icons/shopping-basket.png"
                style={{ width: "38px", height: "38px", borderRaduis: "50%" }}
              />
              <img
                src="./../../public/Icons/more.png"
                style={{
                  maxWidth: "46px",
                  maxHeight: "46px",
                  borderRaduis: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="4">
      <div className="container">
        <div className="img">
          <img
            src={books[3]?.thumbnailUrl}
            style={{
              maxHeight: "300px",
              maxWidth: "1250px",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="container">
          <Rating
            name="simple-controlled "
            style={{ marginTop: "10%" }}
            value={4}
            readOnly
          />
          <h5>{books[3]?.title}</h5>
          <p style={{ color: "#8f8f8f" }}>{books[3]?.authors[0]}</p>
        </div>
        <div className="container">
          <div
            style={{
              backgroundColor: "#eedff4",
              padding: "5px",
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              marginTop: "15%",
            }}
          >
            <p className="mt-3">{books[3]?.price} L.E.</p>
            <div className="icon d-flex justify-content-end  align-items-center">
              <img
                src="./../../public/Icons/shopping-basket.png"
                style={{ width: "38px", height: "38px", borderRaduis: "50%" }}
              />
              <img
                src="./../../public/Icons/more.png"
                style={{
                  maxWidth: "46px",
                  maxHeight: "46px",
                  borderRaduis: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="5">
      <div className="container">
        <div className="img">
          <img
            src={books[4]?.thumbnailUrl}
            style={{
              maxHeight: "300px",
              maxWidth: "1250px",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="container">
          <Rating
            name="simple-controlled "
            style={{ marginTop: "10%" }}
            value={4}
            readOnly
          />
          <h5>{books[4]?.title}</h5>
          <p style={{ color: "#8f8f8f" }}>{books[4]?.authors[0]}</p>
        </div>
        <div className="container">
          <div
            style={{
              backgroundColor: "#eedff4",
              padding: "5px",
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              marginTop: "15%",
            }}
          >
            <p className="mt-3">{books[4]?.price} L.E.</p>
            <div className="icon d-flex justify-content-end  align-items-center">
              <img
                src="./../../public/Icons/shopping-basket.png"
                style={{ width: "38px", height: "38px", borderRaduis: "50%" }}
              />
              <img
                src="./../../public/Icons/more.png"
                style={{
                  maxWidth: "46px",
                  maxHeight: "46px",
                  borderRaduis: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>,
  ];

  return (
    <>
      {/* Carousel Part */}
      <Carousel className="w-100">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>

      {/* Book Cards Part */}
      <div className="books-container text-center" style={{ marginTop: "7%" }}>
        <div className="container d-flex flex-column  justify-content-center align-items-center w-50">
          <h1>Trending this week </h1>
          <p className="mt-3">
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
      <div
        className="features d-flex justify-content-center"
        style={{ marginTop: "7%" }}
      >
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

      {/* Best Saleres Part */}
      <div className="bestSales" style={{ marginTop: "7%" }}>
        <h2 className="my-5 col-10 offset-1" style={{ marginLeft: "13%" }}>
          Best Sellers
        </h2>
        <div className="container d-flex flex-wrap  col-10 offset-1 ">
          <div className="div book-display-card col-12 col-lg-6 mt-4 mt-lg-0 d-flex justify-content-center ">
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
                  className="col-6 mx-1 mx-lg-0 col-lg-6"
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
                    justifyContent: "space-evenly",
                    maxHeight: "30px",
                    fontSize: "smaller",
                    fontWeight: "semi-bold",
                  }}
                  className="col-6 col-lg-3"
                >
                  <img
                    src="./../../public/Icons/star.png"
                    style={{ width: "18px", height: "18px" }}
                  />
                  <p>4.0</p>
                </div>
              </div>
              <div className="data-con w-100 ms-lg-4  ">
                <h5>{books[0]?.title}</h5>
                <p style={{ color: "#8f8f8f" }}>{books[0]?.authors[0]}</p>
              </div>
              <div className="data-con w-100 ms-lg-4 ">
                <h2 style={{ color: "#9436b2" }}>{books[0]?.price} L.E</h2>
              </div>
            </div>
          </div>

          <div className="div book-display-card col-12 col-lg-6 mt-4 mt-lg-0 d-flex justify-content-center">
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
                    textAlign: "center",
                    fontSize: "smaller",
                    fontWeight: "semi-bold",
                  }}
                  className="col-6 mx-1 mx-lg-0 col-lg-6"
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
                    justifyContent: "space-evenly",
                    maxHeight: "30px",
                    fontSize: "smaller",
                    fontWeight: "semi-bold",
                  }}
                  className="col-6 col-lg-3"
                >
                  <img
                    src="./../../public/Icons/star.png"
                    style={{ width: "18px", height: "18px" }}
                  />
                  <p>4.0</p>
                </div>
              </div>
              <div className="data-con w-100 ms-lg-4  ">
                <h5>{books[1]?.title}</h5>
                <p style={{ color: "#8f8f8f" }}>{books[1]?.authors[0]}</p>
              </div>
              <div className="data-con w-100 ms-lg-4 ">
                <h2 style={{ color: "#9436b2" }}>{books[1]?.price} L.E</h2>
              </div>
            </div>
          </div>

          <div className="div book-display-card col-12 col-lg-6 mt-4  d-flex justify-content-center">
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
                    textAlign: "center",
                    fontSize: "smaller",
                    fontWeight: "semi-bold",
                  }}
                  className="col-6 mx-1 mx-lg-0 col-lg-6"
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
                    justifyContent: "space-evenly",
                    maxHeight: "30px",
                    fontSize: "smaller",
                    fontWeight: "semi-bold",
                  }}
                  className="col-6 col-lg-3"
                >
                  <img
                    src="./../../public/Icons/star.png"
                    style={{ width: "18px", height: "18px" }}
                  />
                  <p>4.0</p>
                </div>
              </div>
              <div className="data-con w-100 ms-lg-4  ">
                <h5>{books[2]?.title}</h5>
                <p style={{ color: "#8f8f8f" }}>{books[2]?.authors[0]}</p>
              </div>
              <div className="data-con w-100 ms-lg-4 ">
                <h2 style={{ color: "#9436b2" }}>{books[2]?.price} L.E</h2>
              </div>
            </div>
          </div>

          <div className="div book-display-card col-12 col-lg-6 mt-4  d-flex justify-content-center">
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
                    textAlign: "center",
                    fontSize: "smaller",
                    fontWeight: "semi-bold",
                  }}
                  className="col-6 mx-1 mx-lg-0 col-lg-6"
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
                    justifyContent: "space-evenly",
                    maxHeight: "30px",
                    fontSize: "smaller",
                    fontWeight: "semi-bold",
                  }}
                  className="col-6 col-lg-3"
                >
                  <img
                    src="./../../public/Icons/star.png"
                    style={{ width: "18px", height: "18px" }}
                  />
                  <p>4.0</p>
                </div>
              </div>
              <div className="data-con w-100 ms-lg-4  ">
                <h5>{books[3]?.title}</h5>
                <p style={{ color: "#8f8f8f" }}>{books[3]?.authors[0]}</p>
              </div>
              <div className="data-con w-100 ms-lg-4 ">
                <h2 style={{ color: "#9436b2" }}>{books[3]?.price} L.E</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="categories-display" style={{ marginTop: "7%" }}>
        <h2 className="my-5 col-10 offset-1" style={{ marginLeft: "13%" }}>
          Categories
        </h2>

        <div className="container d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-center  ">
          {categories.map((ele) => {
            return <CategorieCard {...ele}></CategorieCard>;
          })}
        </div>
      </div>

      {/* Books Slider */}
      <div className="container w-75" style={{ marginTop: "7%" }}>
        <h2 className="my-5 col-10">Top 5 rated books</h2>
        <AliceCarousel
          mouseTracking
          items={items2}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>

      {/* Featured Books */}
      <div className="container col-12 col-lg-10" style={{ marginTop: "7%" }}>
        <h2 className="my-5 col-10">Featured Books</h2>

        <div className="container d-flex flex-column flex-lg-row  ">
          <div
            className=" book-display-card col-12 me-2 col-lg-6 mt-4 mt-lg-0 d-flex justify-content-center"
            style={{
              backgroundColor: "#fafafa",
              padding: "15px",
              borderRaduis: "15px",
            }}
          >
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
            <div className="data-con w-50 mx-2 d-flex flex-column justify-content-between h-100 ">
              <div className="d-flex justify-content-between align-items-baseline  ">
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
                  className="col-6 mx-1 mx-lg-0 col-lg-6"
                >
                  {books[2]?.categories[0]}
                </p>
                <h2 style={{ fontSize: "small", color: "#8f8f8f" }}>
                  Reviews : 150{" "}
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
                className="col-6 col-lg-6"
              >
                <Rating name="simple-controlled " value={3} readOnly />
              </div>

              <div className="data-con w-100 ms-lg-4  ">
                <h5>{books[2]?.title}</h5>
                <p style={{ color: "#8f8f8f" }}>{books[2]?.authors[0]}</p>
              </div>
              <div className="data-con w-100 ms-lg-4 ">
                <h2 style={{ color: "#9436b2" }}>{books[2]?.price} L.E</h2>
              </div>
              <div>
                <div className="d-flex flex-column flex-lg-row justify-content-center ">
                  <ButtonMui
                    variant="contained"
                    style={{ backgroundColor: "#8e67ae" }}
                  >
                    <img
                      className="me-2"
                      src="./../../public/Icons/shopping-cart (2).png"
                      style={{ width: "25px", height: "23px" }}
                    ></img>
                    Add to cart
                  </ButtonMui>
                  <ButtonMui
                    variant="outlined"
                    href="#outlined-buttons"
                    className="ms-2 mt-lg-2 "
                  >
                    <img
                      src="./../../public/Icons/heart.png"
                      style={{ width: "25px", height: "23px" }}
                    ></img>
                  </ButtonMui>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" book-display-card col-12 me-2 col-lg-6 mt-4 mt-lg-0 d-flex justify-content-center"
            style={{
              backgroundColor: "#fafafa",
              padding: "15px",
              borderRaduis: "15px",
            }}
          >
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
            <div className="data-con w-50 mx-2 d-flex flex-column justify-content-between h-100 ">
              <div className="d-flex justify-content-between align-items-baseline  ">
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
                  className="col-6 mx-1 mx-lg-0 col-lg-6"
                >
                  {books[2]?.categories[0]}
                </p>
                <h2 style={{ fontSize: "small", color: "#8f8f8f" }}>
                  Reviews : 150{" "}
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
                className="col-6 col-lg-6"
              >
                <Rating name="simple-controlled " value={3} readOnly />
              </div>

              <div className="data-con w-100 ms-lg-4  ">
                <h5>{books[2]?.title}</h5>
                <p style={{ color: "#8f8f8f" }}>{books[2]?.authors[0]}</p>
              </div>
              <div className="data-con w-100 ms-lg-4 ">
                <h2 style={{ color: "#9436b2" }}>{books[2]?.price} L.E</h2>
              </div>
              <div>
                <div className="d-flex flex-column flex-lg-row justify-content-center ">
                  <ButtonMui
                    variant="contained"
                    style={{ backgroundColor: "#8e67ae" }}
                  >
                    <img
                      className="me-2"
                      src="./../../public/Icons/shopping-cart (2).png"
                      style={{ width: "25px", height: "23px" }}
                    ></img>
                    Add to cart
                  </ButtonMui>
                  <ButtonMui
                    variant="outlined"
                    href="#outlined-buttons"
                    className="ms-2 mt-2 mt-lg-0"
                  >
                    <img
                      src="./../../public/Icons/heart.png"
                      style={{ width: "25px", height: "23px" }}
                    ></img>
                  </ButtonMui>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex flex-column flex-lg-row  mt-3 ">
          <div
            className=" book-display-card col-12 me-2 col-lg-6 mt-4 mt-lg-0 d-flex justify-content-center"
            style={{
              backgroundColor: "#fafafa",
              padding: "15px",
              borderRaduis: "15px",
            }}
          >
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
            <div className="data-con w-50 mx-2 d-flex flex-column justify-content-between h-100 ">
              <div className="d-flex flex-column flex-lg-row   justify-content-between align-items-baseline  ">
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
                  className="col-6 mx-1 mx-lg-0 col-lg-6"
                >
                  {books[2]?.categories[0]}
                </p>
                <h2 style={{ fontSize: "small", color: "#8f8f8f" }}>
                  Reviews : 150{" "}
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
                className="col-6 col-lg-6"
              >
                <Rating name="simple-controlled " value={3} readOnly />
              </div>

              <div className="data-con w-100 ms-lg-4  ">
                <h5>{books[2]?.title}</h5>
                <p style={{ color: "#8f8f8f" }}>{books[2]?.authors[0]}</p>
              </div>
              <div className="data-con w-100 ms-lg-4 ">
                <h2 style={{ color: "#9436b2" }}>{books[2]?.price} L.E</h2>
              </div>
              <div>
                <div className="d-flex flex-column flex-lg-row justify-content-center ">
                  <ButtonMui
                    variant="contained"
                    style={{ backgroundColor: "#8e67ae" }}
                  >
                    <img
                      className="me-2"
                      src="./../../public/Icons/shopping-cart (2).png"
                      style={{ width: "25px", height: "23px" }}
                    ></img>
                    Add to cart
                  </ButtonMui>
                  <ButtonMui
                    variant="outlined"
                    href="#outlined-buttons"
                    className="ms-2 mt-2 mt-lg-0"
                  >
                    <img
                      src="./../../public/Icons/heart.png"
                      style={{ width: "25px", height: "23px" }}
                    ></img>
                  </ButtonMui>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" book-display-card col-12 me-2 col-lg-6 mt-4 mt-lg-0 d-flex justify-content-center"
            style={{
              backgroundColor: "#fafafa",
              padding: "15px",
              borderRaduis: "15px",
            }}
          >
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
            <div className="data-con w-50 mx-2 d-flex flex-column justify-content-between h-100 ">
              <div className="d-flex flex-column flex-lg-row   justify-content-between align-items-baseline  ">
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
                  className="col-6 mx-1 mx-lg-0 col-lg-6"
                >
                  {books[2]?.categories[0]}
                </p>
                <h2 style={{ fontSize: "small", color: "#8f8f8f" }}>
                  Reviews : 150{" "}
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
                className="col-6 col-lg-6"
              >
                <Rating name="simple-controlled " value={3} readOnly />
              </div>

              <div className="data-con w-100 ms-lg-4  ">
                <h5>{books[2]?.title}</h5>
                <p style={{ color: "#8f8f8f" }}>{books[2]?.authors[0]}</p>
              </div>
              <div className="data-con w-100 ms-lg-4 ">
                <h2 style={{ color: "#9436b2" }}>{books[2]?.price} L.E</h2>
              </div>
              <div>
                <div className="d-flex flex-column flex-lg-row justify-content-center ">
                  <ButtonMui
                    variant="contained"
                    style={{ backgroundColor: "#8e67ae" }}
                  >
                    <img
                      className="me-2"
                      src="./../../public/Icons/shopping-cart (2).png"
                      style={{ width: "25px", height: "23px" }}
                    ></img>
                    Add to cart
                  </ButtonMui>
                  <ButtonMui
                    variant="outlined"
                    href="#outlined-buttons"
                    className="ms-2 mt-2 mt-lg-0"
                  >
                    <img
                      src="./../../public/Icons/heart.png"
                      style={{ width: "25px", height: "23px" }}
                    ></img>
                  </ButtonMui>
                </div>
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
