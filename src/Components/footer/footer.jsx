import React, { Component } from 'react';

import {Grid, Row, Col, Glyphicon} from 'react-bootstrap';

import './footer.css';
export default class Footer extends Component{
    
    render(){
        return(
            <div className = "container-fluid footer">
                <Grid>
                    <Row className = "show-grid">
                    <Col lg = {2} md = {2}></Col>
                    <center><Col lg = {7} md = {7} style = {{marginTop: 25+'px'}}>
                        <Col lg = {6} md = {6} style = {{paddingLeft:0+'px', paddingRight:0+'px'}}>
                            <Col lg = {2} md = {2} style = {{paddingRight:0 + 'px',paddingLeft:0+'px'}}>
                                <Glyphicon glyph = "glyphicon glyphicon-map-marker"/>
                            </Col>
                            <Col lg = {10} md = {10} style = {{paddingLeft:0+'px', textAlign:'left'}}>
                            <p>Teatinos N° 251 | Oficina 601 |  Santiago</p>
                            </Col>
                        </Col>
                        <Col lg = {3} md = {3}>
                        <Col lg = {2} md = {2} style = {{paddingRight:0 + 'px',paddingLeft:0+'px'}}>
                                <Glyphicon glyph = "glyphicon glyphicon-earphone"/>
                            </Col>
                            <Col lg = {10} md = {10} style = {{paddingLeft:0+'px'}}>
                                <p> 600 Recicla</p>    
                            </Col>                        
                        </Col>
                        <Col lg = {3} md = {3}>
                            <Col lg = {2} md = {2} style = {{paddingRight:0 + 'px',paddingLeft:0+'px'}}>
                                <Glyphicon glyph = "glyphicon glyphicon-envelope"/>
                            </Col>
                            <Col lg = {10} md = {10}>
                                <p>contacto@vinculoverde.cl</p>
                            </Col>                        
                        </Col>
                                    
                    </Col></center>
                    <Col lg = {3} md = {3}></Col>
                    </Row>
                    
                </Grid>
            </div>
            
        )
    }
}