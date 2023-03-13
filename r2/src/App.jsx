import 'bootstrap/dist/css/bootstrap.min.css';
import './style/app.scss';
import Create from './Components/Create';
import { GlobalProvider } from './Components/Global';
import List from './Components/List';
import ModalDelete from './Components/ModalDelete';

function App() {
    return (
        <GlobalProvider>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <Create />
                    </div>
                    <div className="col-7">
                        <List />
                    </div>
                </div>
            </div>
            <ModalDelete />
        </GlobalProvider>
    );
}

export default App;
