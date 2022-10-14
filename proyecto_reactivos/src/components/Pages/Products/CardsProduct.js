import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const CardsProduct = () =>{
    const [db, setDb] = useState([])

    useEffect(() => {
        fetch('db.json')
        .then(res =>res.json())
        .then(data => {setDb(data) })
    }, []);
    
    return (
        <Row xs={ 1 } md={ 2 } className="g-4">
            {db.map(({id,nombre,descripcion, marca,imagen,precio}) => (
            <Col md={ 3 }>
                <Card>
                <Card.Img variant="top" src={ imagen } stule={{ objectFit: 'cover'}} />
                <Card.Body>
                    <Card.Title>{ nombre }</Card.Title>
                    <h2 style={{ height: '2em'}}>{ marca }</h2>
                    <Container className='py-4'>
                        <Row>
                            <Col><b>Código:</b> {id.substring(0, 8)}</Col>
                            <Col><b>Precio:</b> { precio}</Col>
                        </Row>
                    </Container>
                    <Card.Text>
                        {descripcion.substring(0, 75)}...
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
    );
}