import axios from "axios";
import React, { Component } from "react";
import Cards from "../components/Cards/Cards";

export class JeweleryPage extends Component {
  state = {
    data: [],
  };
  async getData() {
    try {
      let { data } = await axios("https://fakestoreapi.com/products/category/jewelery");
      console.log(data);
      this.setState({ data: data });
    } catch (err) {
      console.log(err);
    }
  }
  componentDidMount() {
    this.getData();
  }
  render() {
     const { data } = this.state;
    return (
      <section>
        <div className="container">
          <h1>JeweleryPage</h1>
          <div className="home-page-wrapper container">
            {data.map((el) => (
              <Cards key={el.id} {...el} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default JeweleryPage;
