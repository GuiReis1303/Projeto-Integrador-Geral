import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const MenuAL = () => {
    require('./MenuAL.css');
    return (
        <div className="menu">
            <Navbar collapseOnSelect expand="md" fixed="top" className="sla" variant="#00ff88">
                <Nav.Link href="/Home"><img src={require("./logobranca.png")} className="logoMenuAL"/></Nav.Link>
                <Navbar.Toggle className="testes01"><FontAwesomeIcon icon={faBars}/></Navbar.Toggle>
                <Container fluid>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"/>
                        <Nav className="me-auto testes13">
                            <Nav.Link href="/Home" className="editMenuH1">Home</Nav.Link>
                            <Nav.Link href="/Assinatura" className="editMenuH1">Assinatura</Nav.Link>
                            <Nav.Link href="/Cursos" className="editMenuH1">Cursos</Nav.Link>
                            <Nav.Link href="/Comunidade" className="editMenuH1">Comunidade</Nav.Link>
                            <Nav.Link href="/FAQ" className="editMenuH2">FAQ</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/Cadastro" className="editMenuH2">Cadastro</Nav.Link>
                            <Nav.Link href="/Login2" className="editMenuH2">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
     );
}
 
export default MenuAL;