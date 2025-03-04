import React from 'react';

interface Props {
    name: string
}

const UseState = ({name}: Props) => {

    const [error, setError] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        console.log('Empezando efecto...')
        if (isLoading) {
            setTimeout(() => {
                console.log('Cambiando estado...')
                setIsLoading(false);
                console.log('Estado cambiado con éxito...')
            }, 1000);
        }
        console.log('Terminando efecto...')
    }, [isLoading]);

    return (
        <>
            <h2>
                Eliminar {name}
            </h2>
            <p>
                Por favor, ingresa el código de seguridad
            </p>

            {isLoading && <p>Cargando...</p>}

            {error && <p style={{color: 'red'}}>Código incorrecto</p>}

            <input type="text" placeholder="Codigo de seguridad"/>
            <button
                onClick={() => setIsLoading(true)}
            >
                Comprobar
            </button>
        </>
    )
}

export {UseState}
