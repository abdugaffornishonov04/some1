import axios from "axios";
import React, { Component } from "react";
import Cards from "../components/Cards/Cards";

export class HomePage extends Component {
  state = {
    data: []
  }
    async getData() {
      try {
        let { data } = await axios("https://fakestoreapi.com/products");
        console.log(data);
        this.setState({data: data})
      } catch (err) {
        console.log(err);
      }
    }
  componentDidMount() {
    this.getData()
  }
  render() {
    const {data} = this.state
    console.log(data);
    return (
      <section>
        <div className="container">
          <h1>HomePage</h1>
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

export default HomePage;
