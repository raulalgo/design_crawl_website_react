'use strict';

import React from 'react';
import styled from 'styled-components';

const Pie = styled.footer`
  padding: 48px 0
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  section {
    div {
      text-align: center;
    }
  }
  section.right {
    text-align: right;
  }

`;

class Footer extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Pie className="">
        <Grid>
            <section className="organiza">
                <h4>Organiza</h4>
                <div>Master de diseño grafico y de interfaz</div>
            </section>
            <section className="patrocina right">
                <h4>Colabora</h4>
                <div>DesignIt</div>
            </section>
        </Grid>
    </Pie>
    );
  }

}

export default Footer;
