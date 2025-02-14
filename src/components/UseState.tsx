import React from 'react';

interface Props {
    name: string
}

const UseState = ({name}: Props) => {

    const [error, setError] = React.useState<boolean>(false);

    return (
        <>
            <h2>
                Eliminar {name}
            </h2>
            <p>
                Por favor, ingresa el código de seguridad
            </p>

            {error && <p style={{color: 'red'}}>Código incorrecto</p>}

            <input type="text" placeholder="Codigo de seguridad"/>
            <button
                onClick={() => setError(!error)}
            >
                Comprobar
            </button>
        </>
    )
}

export {UseState}
