import { useContext, useState } from 'react';
import { Global } from './Global';

function Create() {
    const [number, setNumber] = useState(1);
    const { setCreate } = useContext(Global);

    const add = () => {
        setCreate({ number: parseInt(number) });
        setNumber(1);
    };

    return (
        <div className="card mt-4">
            <div className="card-header">Your number is: {number}</div>
            <div className="card-body">
                <h5 className="card-title">Add new number</h5>
                <label
                    htmlFor="customRange1"
                    className="form-label">
                    Slide your number
                </label>
                <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                    min="1"
                    max="99"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
                <button
                    className="btn btn-primary"
                    onClick={add}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default Create;
