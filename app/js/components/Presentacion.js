'use strict';

import React        from  'react';
import styled       from  'styled-components';

/* Styled Components */
const Grid = styled.section`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-areas: "c m";

    section.presentacion {
        grid-area: c;
    }
`;

class Presentacion extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render(){
        return (
            <Grid>
                <section className="presentacion">
                    <p>El próximo 24 de marzo, en Londres, queremos pegarnos un gran atracón de diseño en el primer gran Design Crawl que organizaremos entre los alumnos del Máster en Diseño Gráfico y de Interfaz, antiguos alumnos y todos los profesionales del sector que nos quieran acompañar.</p>
                    <p>El programa es sencillo y se realiza en tres actos.</p>
                    <ul>
                        <li><b>Mañana:</b> 6 charlas 6, en las oficinas de Designit en Londres, a partir de las 11 de la mañana</li>
                        <li><b>Tarde:</b> Visita al museo del diseño</li>
                        <li><b>Noche:</b>Acabaremos en el pub para lo que el cuerpo aguante.</li>
                    </ul>
                </section>
            </Grid>
        );
    }

    /* Functions */
    
}
export default Presentacion