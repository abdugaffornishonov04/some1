import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Cards extends Component {
  render() {
    const {image, title, description, price, rating,category} = this.props
    const {rate} = rating
    return (
      <div className="cards">
        <Link to="/product" className="card-image">
          <img src={image} alt="" />
          <p className="category">{category}</p>
        </Link>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <div className="price-rating">
          <p className="price">{price} $</p>
          <p className="rating">{rate} ⭐</p>
        </div>
      </div>
    );
  }
}

export default Cards