import Header from './components/Header';
import Formulario from './components/Formulario';
import { useState } from 'react';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

function App() {
    const [cantidad, setCantidad] = useState(0);
    const [plazo, setPlazo] = useState('');
    const [total, setTotal] = useState(0);
    const [cargando, setCargando] = useState(false);

    let componente;
    if (cargando === true) {
        componente = <Spinner />;
    } else if (total === 0) {
        componente = <Mensaje />;
    } else {
        componente = (
            <Resultado total={total} plazo={plazo} cantidad={cantidad} />
        );
    }

    return (
        <>
            <Header title='Cotizador de Prestamos' />

            <div className='sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mx-auto'>
                <Formulario
                    cantidad={cantidad}
                    plazo={plazo}
                    total={total}
                    setCantidad={setCantidad}
                    setPlazo={setPlazo}
                    setTotal={setTotal}
                    setCargando={setCargando}
                />
            </div>

            <div className='sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mx-auto'>
                {componente}
            </div>
        </>
    );
}

export default App;
