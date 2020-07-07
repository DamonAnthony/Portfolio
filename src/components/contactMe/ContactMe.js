import React, { useEffect, Fragment } from "react";
import "./ContactMe.css";
import M from "../../../node_modules/materialize-css/dist/js/materialize.min";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const ContactMe = () => {
  useEffect(() => {
    M.Modal.init();
  });
  return (
    <Fragment>
      <footer class="page-footer transparent">
        <div class="container">
          <div className="row row1">
            <div class="col 14 offset-12 s12">
              <h1 id="contactMe" class="contact-heading white-text">
                ContactMe
              </h1>
              <ul>
                <li>
                  <a
                    href="https://github.com/DamonAnthony"
                    class="waves-effect waves-light light-green accent-3 btn"
                  >
                    <i className="material-icons left">
                      <GitHubIcon />
                    </i>
                    GitHub
                  </a>
                </li>
                <br />
                <li>
                  {/*eslint-disable-next-line */}
                  <a
                    data-target="message-modal"
                    class="waves-effect waves-light light-green accent-3 btn modal-trigger"
                  >
                    Message Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-copyright">
          <div class="container footer-bottom">
            <span className="made-by">
              <strong>Made by Damon Anthony</strong>
            </span>
            <a
              href="https://github.com/DamonAnthony"
              class="btn-floating btn waves-effect waves-light light-green accent-3 right bottom-button"
            >
              <i class="material-icons">
                <GitHubIcon />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/damon-anthony-78abaa1aa/"
              class="btn-floating btn waves-effect waves-light light-green accent-3 right bottom-button"
            >
              <i class="material-icons">
                <LinkedInIcon />
              </i>
            </a>
          </div>
        </div>
      </footer>

      <div id="message-modal" class="modal">
        <div class="modal-content">
          <form action="https://formspree.io/xvowwqyv" method="POST">
            <label>
              Your email:
              <input type="text" name="_replyto" />
            </label>
            <label>
              Your message:
              <textarea name="message"></textarea>
            </label>
            <button
              className="modal-close waves-effect waves-green btn-flat"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div class="modal-footer"></div>
      </div>
    </Fragment>
  );
};

export default ContactMe;
