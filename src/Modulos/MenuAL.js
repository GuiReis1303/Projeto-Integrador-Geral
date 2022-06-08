import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const MenuAL = () => {
    require('./MenuAL.css');
    return (
        <div className="menuALgeral">
            <Navbar collapseOnSelect expand="md" fixed="top" className="CorMenuAL" variant="#00ff88">
                <Nav.Link href="/"><img src={require("./logobranca.png")} className="logoMenuAL"/></Nav.Link>
                <Navbar.Toggle className="testes01"><FontAwesomeIcon icon={faBars}/></Navbar.Toggle>
                <Container fluid>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"/>
                        <Nav className="me-auto testes13">
                            <Nav.Link href="/" className="editMenuALH1">Home</Nav.Link>
                            <Nav.Link href="/Assinatura" className="editMenuALH1">Assinatura</Nav.Link>
                            <Nav.Link href="/Cursos" className="editMenuALH1">Cursos</Nav.Link>
                            <Nav.Link href="/Comunidade" className="editMenuALH1">Comunidade</Nav.Link>
                            <Nav.Link href="/FAQ" className="editMenuALH1">FAQ</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/Cadastro" className="editMenuALH2">Cadastro</Nav.Link>
                            <Nav.Link href="/Login2" className="editMenuALH2">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
     );
}
 
export default MenuAL;