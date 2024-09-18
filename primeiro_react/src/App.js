import './App.css';
import { useState } from 'react';
import { Button } from './componentes/Button';

function App() {
  // Estado para controlar o valor de "numero"
  const [numero, setNumero] = useState(0); // Aqui usamos useState para criar um estado
  let nome = "Mizerê";

  // Função para somar 1
  const somar = () => {
    setNumero(numero +1); // Atualizando o estado com setNumero
  }

  // Função para diminuir 1
  const diminuir = () => {
    setNumero(numero -1); // Atualizando o estado com setNumero
  }
  const multiplicar = () => {
    setNumero(numero + numero); // Atualizando o estado com setNumero
  }
  const zerar = () => {
    setNumero(0); // Atualizando o estado com setNumero
  }

  return (
    <div className="App">
        <h1>Olá {nome}, Segue o contador Abaixo: </h1>
        <h1>{numero}</h1>
        
        {/* Botão para somar */}
        <Button operacao="Aumentar" somadiminui={somar} />
        
        {/* Botão para diminuir */}
        <Button operacao="Diminuir" somadiminui={diminuir} />
        <Button operacao="Dobrar" somadiminui={multiplicar} />
        <Button operacao="Zerar" somadiminui={zerar} />
    </div>
  );
}

export default App;
