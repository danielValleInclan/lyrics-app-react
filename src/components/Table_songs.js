import React, { Component } from 'react';
import { Table } from 'react-bootstrap';


class Table_songs extends Component {
    constructor() {
        super()
    }

    renderData(data, index) {
        return (
            <tr key={index}>
                <td>{data.artist}</td>
                <td>{data.title}</td>
                <td>{data.lyric}</td>
            </tr>
        )
    }
    render() {
        return (
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Artista</th>
                        <th>Título</th>
                        <th>Letra</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map(this.renderData)}
                </tbody>
            </Table>)
    }
}

export default Table_songs;