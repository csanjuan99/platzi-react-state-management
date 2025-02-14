import React from "react";

class ClassState extends React.Component {
    render() {
        return (
            <>
                <h2>
                    Eliminar ClassState
                </h2>
                <p>
                    Por favor, ingresa el código de seguridad
                </p>

                <input type="text" placeholder="Codigo de seguridad"/>
                <button>
                    Comprobar
                </button>
            </>
        )
    }
}

export {ClassState};
