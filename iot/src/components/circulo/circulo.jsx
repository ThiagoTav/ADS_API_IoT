import React from 'react';
import './circulo.css'; // Importe o arquivo CSS para estilização do círculo

function Circulo({ cor }) {
  const estiloDoCirculo = {
    backgroundColor: cor // Define a cor do fundo do círculo dinamicamente
  };

  return (
    <div className="circle">
      <span className="box" style={estiloDoCirculo}></span>
    </div>
  );
}

export default Circulo;
