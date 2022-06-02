import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Button, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";

const Cadastro = () => {
    require('./Cadastro.css')
    return ( 
        <div className="cadastro">
            <div className="caixaLogin">
                <Form>
                <Row className="mb-3">

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="nome" placeholder="Digite seu nome" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control type="sobrenome" placeholder="Digite seu sobrenome" />
                </Form.Group>
                </Row>

                <Row className="mb-3">

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="password" placeholder="Digite sua senha" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control type="password" placeholder="Repita sua senha" />
                </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control type="email" placeholder="Digite seu email" />
                </Form.Group>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Control type="cidade" placeholder="Digite sua cidade" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Select >
                        <option value="None">Selecione o Estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                        <option value="EX">Estrangeiro</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Control type="celular" placeholder="Digite seu celular"/>
                </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className="testes">
                    <Button variant="primary" type="submit" className="botao">
                        Enviar
                    </Button>
                    <Link to={"/"}>
                        <Button className="botao">
                            Cancelar
                        </Button>
                    </Link>
                    
                </div>
                
                </Form>
            </div>
        </div>
     );
}
 
export default Cadastro;