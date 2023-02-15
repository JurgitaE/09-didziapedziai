import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import randColor from './Functions/randColor';
import { v4 as uuidv4 } from 'uuid';
import Sq from './Components/009/Sq';


function App() {
/* 
const [sqColor, setSqColor] = useState('crimson');
const [count, setCount] = useState(0);

const changeColor = () => {
    // sqColor = 'skyblue'; negalima 
    setSqColor('skyblue'); //naujos reiksmes priskyrimas
}
const addOne = () => {
    // setCount(count++); mirstat iskart
    // setCount(count + 1); ispejimas taip negalima
    // setCount(count + 1); reiksmes redagavimas
    // setCount(c => c + 1);
    // setCount(c => c + 1);
    setCount(c => c + 1);
}
const changeColor2 = () => {
    setSqColor(c => c === 'skyblue' ? 'crimson' : 'skyblue' );
} */

    const [sq, setSq] = useState([]);

    const addSq = () => {
        // setSq(sq.push(1)); NEGALIMA
        setSq(s => [...s, {color: randColor()}]);
    }

    return (
        <div className="App">
            <header className="App-header">

{/*                 <div className='sq-bin'>
                    <div className='sq' style={{backgroundColor: sqColor}}></div>
                    <div className='sq'>{count}</div>
                </div>
               <button className='blue' onClick={changeColor}>Make blue</button> 
               <button className='blue' onClick={changeColor2}>change 2</button> 
               <button className='red' onClick={addOne}>+1</button>  */}
             <div className="sq-bin">
                
                {
                    sq.map((s, i) => <Sq key={i} s={s}/>)
                }
                
            </div>   
            <button className='red' onClick={addSq}>+[]</button>
            </header>
        </div>
    );
}

export default App;
