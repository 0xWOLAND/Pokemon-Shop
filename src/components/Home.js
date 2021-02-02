import React from "react";
import profile from "./images/profile.jpg";
import "./styles/Home.css";
function Home() {
  return (
    <div id="intro_container">
      <img id="profile" src={profile} alt="Profile Image" />
      <h1>hi, im the dev</h1>
      <p id="intro">
        Hi there! My name is Bhargav and I am a web developer. This site is a
        pokémon shop to show various statistics and images of over a thousand
        pokémon. This site is powered using ReactJS, NodeJS, and Firebase. The
        programming languages utilized include Javascript, JSX, HTML (I don't
        consider this a programming language), and CSS. The API utilized for the
        pokémon information is the RESTful Pokémon API or PokéAPI created by
        Paul Hallett. I also do a lot of work in backend, machine learning, app development with Swift, and
        other cool technologies. You can contact me at bhargav.annem@gmail.com
        or check out my Github repositories below!
      </p>
    </div>
  );
}

export default Home;
