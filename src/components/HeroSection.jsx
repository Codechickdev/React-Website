import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" loop muted autoPlay />
      <h1>ADVENTURE BEGINS</h1>
      <p>What are you waiting for ?</p>
      <div className="hero-btns">
        <Button buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button buttonSize="btn--medium" buttonStyle="btn--primary">
          WATCH TRAILER <i className="fas fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
