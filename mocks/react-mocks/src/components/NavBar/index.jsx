import React from "react";
import styles from "./navbar.module.css";

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accesibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
export default function NavBar() {
  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <nav className="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
        <a className="navbar-brand" href="/">
          Project Name
        </a>
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/masterdetail">
            Master Detail
          </a>
          <a className="nav-item nav-link active" href="/grid">
            Content Grid
          </a>
          <a className="nav-item nav-link active" href="/list">
            List
          </a>
          <a className="nav-item nav-link active" href="/blank">
            Blank
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
}
