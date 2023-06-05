import React from "react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import "../App.css";



function Footer() {
  return (
    <footer className="footer-distributed w-full h-[450px] bg-primary">
      <div className="footer-left">
        <h3>ECELL VSSUT</h3>
        <p className="footer-links">
          <a href="#">Home</a>|<a href="#">About</a>|<a href="#">Contact</a>|
          <a href="#">Blog</a>
        </p>
        <p className="footer-company-name">
          Copyright © 2023 <strong>ECELL VSSUT</strong> All rights reserved{" "}
        </p>
      </div>{" "}
      <div className="footer-center">
        <div>
          <div className="icon color-#fff ml-2">
          <LocationOnIcon  />
          </div>
          <p>
            <span>Burla</span>
            Odisha
          </p>
        </div>
        <div>
          <PhoneEnabledIcon color="#fff" />
          <p>+91 7064214870</p>
        </div>
        <div>
          <p>
            <MailIcon />
            <a href="mailto:sagar00001.co@gmail.com">ecellvssut@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the Club</span>
          <strong>Entrepreneurship Cell</strong> is a non-profit organization
          run by students of VSSUT, Odisha. We create awareness among students
          about Entrepreneurship through our various sessions such as workshops,
          speaker sessions etc.
        </p>
        <div className="footer-icons">
          <a href="https://www.facebook.com/ecellvssut/">
            <i className="fa fa-facebook" />
          </a>
          <a href="https://www.instagram.com/ecellvssut/">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/company/ecellvssut/mycompany/">
            {" "}
            <i className="fa fa-linkedin" />
          </a>
          <a href="https://twitter.com/ecellvssut?lang=en">
            <i className="fa fa-twitter" />
          </a>
          <a href="https://www.youtube.com/@EntrepreneurshipCellVSSUT">
            <i className="fa fa-youtube" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
