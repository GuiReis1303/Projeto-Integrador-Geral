import React from "react";
import { Link } from "react-router-dom";
import {bootstrap} from "bootstrap";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";


const MenuAL = () => {
    require('./MenuAL.css');
    return (
        <div className="menu">
            <Navbar collapseOnSelect expand="md" fixed="top" className="sla">
                <img src={require("./logobranca.png")} className="logoMenuAL"/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Container fluid>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"/>
                        <Nav className="me-auto">
                            <Nav.Link href="/" className="editMenuH1">Home</Nav.Link>
                            <Nav.Link href="/Assinatura" className="editMenuH1">Assinatura</Nav.Link>
                            <Nav.Link href="/Cursos" className="editMenuH1">Cursos</Nav.Link>
                            <Nav.Link href="/Comunidade" className="editMenuH1">Comunidade</Nav.Link>
                            <Nav.Link href="/FAQ" className="editMenuH1">FAQ</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/Cadastro" className="editMenuH2">Cadastro</Nav.Link>
                            <Nav.Link href="/Login" className="editMenuH2">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
     );
}
 
export default MenuAL;