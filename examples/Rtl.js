import React, { Component } from "react";
import Slider from "../src/slider";

export default class Rtl extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      variableWidth: false,
      rtl: true
    };
    return (
      <div>
        <h2>Right to Left (finite)</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
