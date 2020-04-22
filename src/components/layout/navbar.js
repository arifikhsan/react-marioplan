import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./signed-in-links";
import SignedOutLinks from "./signed-out-links";
import { connect } from "react-redux";

const Navbar = ({ auth }) => {
  console.log(auth);
  const link = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {auth.isLoaded && link}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
