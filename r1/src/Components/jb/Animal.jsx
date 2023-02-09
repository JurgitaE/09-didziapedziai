import rand from "../../Functions/rand";
import ShowName from "./ShowName";

function  Animal({color, animalName }) {

    const fontFamily = 'monospace';

    return (
        <h1 style={{
                color,
                backgroundColor: 'skyblue',
                padding: '8px 20px',
                fontSize: rand(20, 50) + 'px',
                letterSpacing: rand(0, 1) ? '5px' : null,
                fontFamily,
            }}><ShowName animalName={animalName}/> No: {
                
                rand(11, 15)
                
            }</h1>
    )
}

export default Animal;