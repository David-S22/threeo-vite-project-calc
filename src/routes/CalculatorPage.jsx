import {useState} from 'react';
import Title from '../components/Title';
import Greetings from '../components/Greetings';
import Button from '../components/Button';
import { Link } from 'react-router-dom';


const CalculatorPage = () => {
  // DECLARAÇÃO DE VARIÁVEIS
  const userName = 'Username'


  //NUMBER FIELD ONE
  const [valueOne, setValueOne] = useState(0);

  const handleChangeOne = (eventOne) => {
    setValueOne(eventOne.target.value);
  };


  //NUMBER FIELD TWO
  const [valueTwo, setValueTwo] = useState(0);
  const handleChangeTwo = (eventTwo) => {
    setValueTwo(eventTwo.target.value);
  };


  //FUNÇÕES - OPERAÇÕES MATEMÁTICAS
  function somar(x, y){
    return x + y;
  }

  function subtrair(x, y){
    return x - y;
  }

  function multiplicar(x, y){
    return x * y;
  }

  function dividir(x, y){
    return x / y;
  }


  return (
    <div id="Calculator" className="App">
      <Title />
      <Greetings name={userName}/>
      
      <section id="TextFieldNumberSection">
        <div>
          <p>Primeiro valor:</p>
          <input type="number" onChange={handleChangeOne}></input>
        </div>
        <p>Segundo valor:</p>
        <div className="TextFieldNumber" onChange={handleChangeTwo}>
          <input type="number"></input>
        </div>
      </section>
      
      {/* BOTÕES */}
      <div id="Buttons">
        <Button id="SomarButton" label='Somar' mathOperation={somar(parseFloat(valueOne), parseFloat(valueTwo))}/>
        <Button label='Subtrair' mathOperation={subtrair(parseFloat(valueOne), parseFloat(valueTwo))}/>
        <Button label='Multiplicar' mathOperation={multiplicar(parseFloat(valueOne), parseFloat(valueTwo))}/>
        <Button label='Dividir' mathOperation={dividir(parseFloat(valueOne), parseFloat(valueTwo))}/>
      </div>
      <div style={{margin: '10px 0px 0px 0px'}}>
        <Link to="/">Sair</Link>
      </div>
    </div>
  );
}

export default CalculatorPage;
