import { useState } from 'react';
import Alerta from './Alerta';
import { calcularTotal } from '../helpers';

const Formulario = ({
    cantidad,
    plazo,
    setCantidad,
    setPlazo,
    setTotal,
    setCargando,
}) => {
    const [error, setError] = useState(false);

    // Cuando el usuario presiona submit
    const calcularPrestamo = (e) => {
        e.preventDefault();

        // Validar
        if (cantidad === 0 || plazo === '') {
            setError(true);
            return;
        }

        setError(false);

        // Habilitar el spinner
        setCargando(true);

        setTimeout(() => {
            // Realizar la cotización
            const total = calcularTotal(cantidad, plazo);

            // Una vez calculado, guardar el total
            setTotal(total);

            // Deshabilitar el spinner
            setCargando(false);
        }, 3000);
    };

    return (
        <form
            onSubmit={calcularPrestamo}
            className='bg-white mt-10 p-5 rounded-md shadow-xl'
        >
            {error && <Alerta mensaje='Todos los campos son obligatorios' />}

            <div>
                <label
                    htmlFor='cantidad'
                    className='block text-slate-700 font-medium'
                >
                    Cantidad
                </label>
                <input
                    id='cantidad'
                    className='block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        focus:transition mt-0.5'
                    type='number'
                    placeholder='Ejemplo: 3000'
                    onChange={(e) => setCantidad(parseInt(e.target.value))}
                />
            </div>
            <div className='mt-2'>
                <label
                    htmlFor='plazo'
                    className='block text-slate-700 font-medium'
                >
                    Plazo para Pagar
                </label>
                <select
                    id='plazo'
                    className='block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        focus:transition mt-0.5'
                    onChange={(e) => setPlazo(parseInt(e.target.value))}
                >
                    <option value=''>Seleccionar</option>
                    <option value='3'>3 meses</option>
                    <option value='6'>6 meses</option>
                    <option value='12'>12 meses</option>
                    <option value='24'>24 meses</option>
                </select>
            </div>
            <div className='mt-5 '>
                <button
                    type='submit'
                    className='p-2 text-white uppercase font-bold rounded-md w-full bg-gradient-to-r from-green-400 to-blue-500
                        hover:from-pink-500 hover:to-yellow-500'
                >
                    Calcular
                </button>
            </div>
        </form>
    );
};

export default Formulario;
