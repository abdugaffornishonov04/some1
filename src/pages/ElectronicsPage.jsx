import axios from "axios";
import React, { Component } from "react";
import Cards from "../components/Cards/Cards";

export class ElectronicsPage extends Component {
  state = {
    data: [],
  };
  async getData() {
    try { 
      let { data } = await axios("https://fakestoreapi.com/products/category/electronics");
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
    console.log(window.location.pathname.split("/").at(-1));
    return (
      <section>
        <div className="container">
          <h1>ElectronicsPage</h1>
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

export default ElectronicsPage;
