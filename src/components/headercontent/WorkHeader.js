import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

const WorkHeader = () => {
  return (
    <header className="page-header-content header- d-flex align-items-center justify-content-center text-center" style={{ height: '100vh' }}>
      <div className="container">
        <div className="col-md-12 mx-auto">
          {/* Work Breadcrumb Navigation */}
          <nav aria-label="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" className="text-decoration-none text-orange fw-bold" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="breadcrumb-item active text-white fw-bold" aria-current="page" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">Works</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>
          {/* Main Heading */}
          <h1 className="display-4 text-orange fw-bold">Our Portfolio</h1>
          <p className="lead text-white fw-bold">Check out our past projects</p>
        </div>
      </div>
    </header>
  );
};

export default WorkHeader;