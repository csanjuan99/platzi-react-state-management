import React, {PropsWithChildren} from "react";

interface Props {
    name: string
}

class ClassState extends React.Component {

    constructor(props: PropsWithChildren<Props>) {
        super(props);

        this.state = {
            error: false
        }
    }

    render() {

        return (
            <>
                <h2>
                    Eliminar {this.props.name}
                </h2>
                <p>
                    Por favor, ingresa el código de seguridad
                </p>

                {this.state.error && <p style={{color: 'red'}}>Código incorrecto</p>}


                <input type="text" placeholder="Codigo de seguridad"/>

                <button onClick={() => this.setState({error: !this.state.error})}>
                    Comprobar
                </button>
            </>
        )
    }
}

export {ClassState};
