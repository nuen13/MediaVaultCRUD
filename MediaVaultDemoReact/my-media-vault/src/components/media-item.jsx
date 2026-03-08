import React from 'react';
import {Row, Col} from 'react-bootstrap';

import NoImage from '../no-image.jpg';


const MediaItem = ({data}) => {
    return (
        <>
            <Row>
                <Col xs={12} md={2}>
                    <img src = {data?.coverImage || NoImage} alt = {data?.title} className = "img-fluid" />
                </Col>
                <Col xs={12} md={10}>
                    <div>
                        <b>{data?.title}</b>
                        <p>{data?.description}</p>
                        <div>Contributors: {data?.contributors?.map(x => x.name).join(', ')}</div>

                        
                    </div>

                    <Col>
                        <hr />
                    </Col>
                </Col>
            </Row>
        </>
    );
};

export default MediaItem;