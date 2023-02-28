import './App.scss';
import { useEffect, useState } from 'react';
import Home from './Components/016/Home';
import Menu from './Components/016/Menu';
import axios from 'axios';
import Racoon from './Components/016/Racoon';
import Fox from './Components/016/Fox';

function App() {
    const [page, setPage] = useState('home');

    const [content, setContent] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/api/' + page).then(res => {
            setContent(res.data);
        });
    }, [page]);

    return (
        <div className="App">
            <header className="App-header">
                <Menu setPage={setPage} />
                {page === 'home' && null !== content ? <Home title={content.title} /> : null}
                {page === 'racoon' && null !== content ? <Racoon title="test" /> : null}
                {page === 'fox' && null !== content ? <Fox title="test" /> : null}

                {null == content ? <h1>Loading...</h1> : null}
            </header>
        </div>
    );
}

export default App;
