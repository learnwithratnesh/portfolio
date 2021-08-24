import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <ul className="social-links">
                <li>
                  <a href="mailto:ratneshtanj26@gmail.com">
                    <i className="fa fa-envelope" />
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
