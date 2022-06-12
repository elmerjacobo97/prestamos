const Resultado = ({ total, plazo, cantidad }) => {
    return (
        <div className='bg-white mt-10 p-5 rounded-md shadow-xl animate__animated animate__fadeIn text-center'>
            <h2 className='text-2xl font-bold text-sky-600'>Resumen</h2>
            <p className='font-semibold text-lg'>
                La cantidad solicitada es:{' '}
                <span className='font-normal'>${cantidad}</span>
            </p>
            <p className='font-semibold text-lg'>
                A pagar en: <span className='font-normal'>{plazo} meses</span>
            </p>
            <p className='font-semibold text-lg'>
                Su pago mensual:{' '}
                <span className='font-normal'>
                    ${(total / plazo).toFixed(2)}
                </span>
            </p>
            <p className='font-bold text-xl'>
                Total a pagar: ${total.toFixed(2)}
            </p>
        </div>
    );
};

export default Resultado;
