import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import MediaList from '../components/media-list';
import CreateMovieModel from '../components/create-movie-model';


const Landing = () => {
    return (
        <> 
            <Row> 
                <Col xs={12} md={10}>
                    <h2>Media</h2>
                </Col>
                <Col xs={12} md={2} className = "align-self-center">
                    <Button className ="float-right" onClick = {() => {}}>Add New Media</Button>
                </Col>
            </Row>
            <MediaList />
            <CreateMovieModel />
        </>
    );
};

export default Landing;
