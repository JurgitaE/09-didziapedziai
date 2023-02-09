import './App.css';
import Animal from './Components/jb/Animal';

function App() { 
    // const fox = <u>FOX: number {rand(100, 199)}</u>;

    // const labas = <i>Labas</i>


    return (
        <div className="App">
            <header className="App-header">

                <Animal animalName='Racoon' color='coral'/>
                <Animal animalName='Fox' color='crimson'/>
                <Animal animalName='Rabbit' color='black'/>

            </header>
        </div>
    );
}

export default App;
