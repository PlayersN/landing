import React,  { Component } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import Info from '../components/Info';
import Devices from '../components/Devices';
import Footer from '../components/Footer';

import "../stylesheets/base/fonts.css";
import "../stylesheets/base/global.css";
import "../stylesheets/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charset="utf-8"/>
          <title>PlayersN</title>
          <meta name="description" content="A great place to kickstart your social gamers network and a platform that provides you !"/>
          <meta name="keywords" content="gaming network, gamers social networks, gamers social network platform, social gamers network inc, social gamers network linkedin, social gamers network pathfinder, social gamers network news, video gamers social network, online gamers social networking sites, gamers in social networking sites a growing concern, gamers social network sites, online gamers social network, gamers social network app, best gamers social network, come2play social gamers network, come play 2 gamers social network, social network gamers examples, social network for gamers, largest social network for gamers, social network gamers industry, mobile social gamers network, cgn social network of gamers, pc gamers social network, social network gamers play, social network analysis and gamers survey of the current state of art, top gamers social network sites"/>
          <meta name="robots" content="index,  follow" />
          <meta content="width=device-width,  initial-scale=1" name="viewport"/>
          <link rel="author" href="https://www.playersn.com" />
          <link rel="canonical" href="https://www.playersn.com" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-POYwD7xcktv3gUeZO5s/9nUbRJG/WOmV6jfEGikMJu77LGYO8Rfs2X7URG822aum" crossorigin="anonymous"/>
        </Helmet>
        <Hero />
        <main>
          <Info />
          <Devices />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
