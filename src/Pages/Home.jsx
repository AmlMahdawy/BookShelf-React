import React from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";
import LoginPage from "./LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  var items = [
    {
      img: " https://images.unsplash.com/photo-1529007196863-d07650a3f0ea?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

  return (
    <>
      <Carousel className="w-100">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};
function Item(props) {
  return (
    <>
      <Paper>
        <div className={"containerItems "}>
          <div className="img-container">
            <img src={props.item.img}></img>
            <div class="overlay"></div>
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
