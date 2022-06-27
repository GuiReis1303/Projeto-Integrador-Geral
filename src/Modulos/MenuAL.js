import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const MenuAL = () => {

    const deslogaUser = () => {
        localStorage.removeItem("id")
    }

    require('../Styles/MenuAL.css');
    return (
        <div className="menuALgeral">
            <Navbar collapseOnSelect expand="md" fixed="top" className="CorMenuAL" variant="#00ff88">
                <Nav.Link href="/"><img src={require("./Imagens/logobranca.png")} className="logoMenuAL"/></Nav.Link>
                <Navbar.Toggle className="testes01"><FontAwesomeIcon icon={faBars}/></Navbar.Toggle>
                <Container fluid>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"/>
                        <Nav className="me-auto testes13">
                            <Nav.Link href="/" className="editMenuALH1" id="Home">Home</Nav.Link>
                            <Nav.Link href="/Assinatura" className="editMenuALH1" id="Assinatura">Assinatura</Nav.Link>
                            <Nav.Link href="/Cursos" className="editMenuALH1" id="Cursos">Cursos</Nav.Link>
                            <Nav.Link href="/Comunidade" className="editMenuALH1" id="Comunidade">Comunidade</Nav.Link>
                            <Nav.Link href="/FAQ" className="editMenuALH1" id="FAQ">FAQ</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/" className="editMenuALH2"><button className="editMenuALH2-button1" onClick={() => deslogaUser()}>Sair</button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
     );
}
 
export default MenuAL;