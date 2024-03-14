/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://csml.co.in/?ref=bdr-user-archive-footer">
             CSML
            </NavLink>
          </NavItem>
         
          <NavItem>
            <NavLink href="https://www.bing.com/ck/a?!&&p=f1ba4d723bb1ac4fJmltdHM9MTcxMDM3NDQwMCZpZ3VpZD0zMGZmN2ZhZS02ZDc1LTY1MjItMDhhYS02ZWFhNmNkODY0MzQmaW5zaWQ9NTIwOA&ptn=3&ver=2&hsh=3&fclid=30ff7fae-6d75-6522-08aa-6eaa6cd86434&psq=BLOGS+ABOUT+CSML&u=a1aHR0cHM6Ly9ibG9nLmNzbWwuZGV2Lw&ntb=1?ref=bdr-user-archive-footer">
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        
      </Container>
    </footer>
  );
}

export default Footer;
