import React from "react";
import "./style.css";
import NavBar from "./NavBar";
export default function UserHome() {
  return (
    <>
      <div className="container">
        {/* <NavBar /> */}
        <div className="navbar">
          <div className="navtitle">
            <img src="/images/navtitle.png" alt="pharmapurse"></img>
          </div>

          <div className="navcontrol">
            <button>Home</button>
            <button>Notification</button>
            <button>MyCart</button>
            <button>About Us</button>
            <img src="/images/account.png" alt="pharmapurse"></img>
          </div>
        </div>

        <div className="siteSection">
          <div className="left">
            <h1>
              Virtual Healthcare
              <br /> for you
            </h1>
            <p>
              PharmaPurse offers progressive and
              <br /> affordable healthcare accessible on mobile
              <br /> and online for everyone
            </p>
            <button>Explore Features</button>
          </div>
          <img src="/images/homesection.png" alt="pharmapurse"></img>
        </div>

        <div className="features">
          <div className="featurestext">
            <h2>App Features</h2>
            <hr />
            <p>
              Step into the future of healthcare with our virtual pharmacy!
              Explore our diverse product catalog, chat directly with
              experienced pharmacists for personalized advice, and simplify your
              medication routine with our virtual pillbox. Your well-being, our
              priority. Welcome to convenience and care in one place!
            </p>
          </div>
          <div className="fbox-container">
            <div className="fbox">
              <img src="/images/prodcat.png" alt="pharmapurse"></img>
              <h2>Product Catalog</h2>
              <p>
                Discover healthier living with our convenient pharmacy pre-order
                feature and extensive product catalog for all your wellness
                needs
              </p>
            </div>
            <div className="fbox">
              <img
                className="cutsup"
                src="/images/cutsup.png"
                alt="pharmapurse"
              ></img>
              <h2>Customer Support</h2>
              <p>
                Get Instant Help: Connect with Our Customer Support Chat for
                Quick and Friendly Assistance!
              </p>
            </div>
            <div className="fbox">
              <img
                className="vpill"
                src="/images/virtpill.png"
                alt="pharmapurse"
              ></img>
              <h2>Virtual Pillbox</h2>
              <p>
                Never Miss a Dose: Manage Your Medications with Ease Using Our
                Virtual Pillbox
              </p>
            </div>
          </div>
        </div>

        <div className="siteSection2">
          <img src="/images/homesection2.png" alt="pharmapurse"></img>
          <div className="left2">
            <h1>Your Health Hub</h1>
            <p>
              Welcome to your one-stop digital health destination. Explore our
              curated catalog, chat with expert pharmacists for instant advice,
              and simplify medication management with our virtual pillbox. Your
              well-being starts here—discover, connect, and thrive.
            </p>
          </div>
        </div>

        <footer>
          <div className="footer-container">
            <div className="navtitle">
              <img src="/images/navtitle.png" alt="pharmapurse"></img>
            </div>
            <p>
              PharmaPurse provides progressive, and affordable <br />
              healthcare, accessible on mobile and online <br /> for everyone
            </p>
            <p>©PharmaPurse PTY LTD 2020. All rights reserved</p>
          </div>
        </footer>
      </div>
    </>
  );
}
