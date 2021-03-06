import React, { Component } from 'react';
import { newsletterData } from './cms-data/newsletter-data';

class NewsletterForm extends Component {
  render() {
    return (
      <form action="POST">
        <label htmlFor="email">e-mail</label>
        <input type="email" name="email" id="email" placeholder={newsletterData.inputPlaceholder} />
        <input type="button" value={newsletterData.buttonValue} />
        <div className="accept">
          <input type="checkbox" name="" id="accept-PP" />
          <label htmlFor="accept-PP">{newsletterData.accept}<a href={newsletterData.PPLink}>{newsletterData.privacyPolicy}</a></label>
        </div>
      </form>
    )
  }
}

export class Newsletter extends Component {
  render() {
    return (
      <section className="newsletter">
        <div className="container">
          <div className="text">
            <h2>{newsletterData.heading}</h2>
            <span>{newsletterData.sub}</span>
          </div>
          <NewsletterForm />
        </div>
      </section>
    )
  }
};
