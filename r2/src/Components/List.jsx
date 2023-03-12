import { useContext } from 'react';
import { Global } from './Global';

function List() {
    const { list } = useContext(Global);

    return (
        <div className="card mt-4">
            <div className="card-header">Your selected lucky numbers</div>
            <div className="card-body">
                <ul className="list-group">
                    {list?.map(n => (
                        <li
                            className="list-group-item"
                            key={n.id}>
                            {n.number}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default List;
