import React, { Component } from 'react';
import {Grid, Col, Row, Button, FormGroup, Form, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

import './login.css'
import vv from "../../Components/assets/image001.png"

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password:'',
            height:props.height
        }
    }

    componentWillMount(){
        this.setState({height:window.innerHeight})
    }

    render(){
        return(
            <Grid>
                <Row className = "show-grid">
                    <Col lg = {3} md = {3}></Col>
                    <Col lg = {5} md = {5} style = {{marginTop:this.state.height/6 + 'px'}}>
                        <center><div className = "cardLogin" style = {{height:this.state.height/2}}>
                            <img src = {vv}   style = {{marginTop:20+'px'}}/>
                            <Form horizontal>
                                <FormGroup controlId = "controlUsername">
                                <Col lg = {6} md = {6} lgOffset = {3} mdOffset = {3} style = {{marginTop:25+'px'}}>
                                    <InputGroup>
                                        <InputGroup.Addon>
                                            <Glyphicon glyph="user" />
                                        </InputGroup.Addon>
                                        <FormControl className = "myInput" type = "text" placeholder = "Nombre de usuario" />                                        
                                    </InputGroup>                                    
                                </Col>
                                </FormGroup>
                                <FormGroup controlId = "controlPassword">
                                    <Col lg = {6} md = {6}  lgOffset = {3} mdOffset = {3} >
                                        <InputGroup>
                                            <InputGroup.Addon>
                                                <Glyphicon glyph="lock" />
                                            </InputGroup.Addon>
                                            <FormControl className = "myInput" type = "password" placeholder = "Contraseña" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col lg = {6} md = {6} lgOffset = {3} mdOffset = {3} >
                                        <Button type = "submit" className = "btnSubmit">Ingresar</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div></center>
                    </Col>
                    <Col lg = {3} md = {3}></Col>
                </Row>
            </Grid>
        )
    }

}