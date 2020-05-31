import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import './Frame.css';
import Header from './Header';
import Top from './Top';
import Footer from './Footer';
import Me from './Me';
import Contact from './Contact';
import WorksContainer from './WorksContainer'
import ContactSend from './ContactSend';
import Switch from 'react-router-dom/Switch';


const topPage = () => <Top />
const page1 = () => <Me />
const page2 = (props) => <WorksContainer {...props} />
const page3 = () => <Contact />
const page4 = () => <ContactSend />



class Frame extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <ScrollToTop>
            <div className="nonFooter" id="content">
              <Header />
              <div className="mainContents">
                <Switch>
                <Route path='/' exact component={topPage} />
                <Route path='/me' exact component={page1} />
                <Route path='/works/' component={page2} />
                <Route path='/contact' exact component={page3} />
                <Route path='/contactsend' exact component={page4} />
                <Route component={topPage} />
                </Switch>
              </div>
            </div>
            <Footer />
          </ScrollToTop>
        </React.Fragment>
      </Router>

    );
  }
}

export default Frame;