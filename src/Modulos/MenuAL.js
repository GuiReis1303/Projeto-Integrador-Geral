import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";


const MenuAL = () => {
    require('./MenuAL.css');
    return (
        <div className="menu">
            <Navbar collapseOnSelect expand="md" fixed="top" className="sla">
                <Nav.Link href="/Home"><img src={require("./logobranca.png")} className="logoMenuAL"/></Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Container fluid>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"/>
                        <Nav className="me-auto">
                            <Nav.Link href="/Home" className="editMenuH1">Home</Nav.Link>
                            <Nav.Link href="/Assinatura" className="editMenuH1">Assinatura</Nav.Link>
                            <Nav.Link href="/Cursos" className="editMenuH1">Cursos</Nav.Link>
                            <Nav.Link href="/Comunidade" className="editMenuH1">Comunidade</Nav.Link>
                            <Nav.Link href="/FAQ" className="editMenuH1">FAQ</Nav.Link>
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