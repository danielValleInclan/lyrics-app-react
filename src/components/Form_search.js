import React, { Component } from 'react';
import { Form, Button, Row, Col, FormGroup } from 'react-bootstrap';

class Form_search extends Component {

    constructor() {
        super()
        this.state = {
            artist: '',
            title: ''
        }
    }
    //Método que gestiona cuando se produce un cambio en algún campo del formualario
    //Obtiene la info del evento y actualiza el estado
    //La actualización del estado, implica la llamada al método render()
    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { artist, title } = this.state;

        try {
            const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
            const data = await response.json();

            // Comprueba si se obtuvo la letra de la canción correctamente
            if (response.ok && data.lyrics) {
                const lyricsData = {
                    artist: artist,
                    title: title,
                    lyric: data.lyrics
                };

                // Llama a la función de devolución de llamada del padre
                this.props.passParams(lyricsData);

                // Limpia el estado del formulario después de la llamada exitosa
                this.setState({
                    artist: '',
                    title: ''
                });
            } else {
                console.error('Error al obtener la letra de la canción');
            }
        } catch (error) {
            console.error('Error en la solicitud a la API', error);
        }
    }

    render() {
        return (
        <Form onSubmit={this.handleSubmit}>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Artista</Form.Label>
                        <Form.Control required type="string" min="1" placeholder="Nombre artista" name="artist" value={this.state.artist} onChange={this.handleChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Título:</Form.Label>
                        <Form.Control required placeholder="Título canción" name="title" value={this.state.title} onChange={this.handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <FormGroup>
                    <Button type="submit" >Buscar </Button>
                </FormGroup>
            </Row>
        </Form>)
    }
}

export default Form_search;