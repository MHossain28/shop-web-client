import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Footer.css";

const Footer = () => {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <footer className="footer p-10 bg-cyan-700 text-base-content footer-css">
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
                required
              />
              <button
                onClick={notify}
                className="btn btn-info absolute top-0 right-0 rounded-l-none"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover text-white">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Design
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
