import './App.css';
import Header from './Header'
import React, {Component} from 'react';
import JumboImage from './JumboImage';
import NewsletterSubscription from './newsletter.jsx';
import FeaturedTutorials from './FeaturedTutorials';
import Footer from './footer';

class App extends Component { 
  render() {
  return (
    <div className="App">
      <Header />
      <NewsletterSubscription />
      <JumboImage />
      <FeaturedTutorials />
      <Footer />
    </div>
  );
}
}

export default App;
