export function Bouton( props) {

    return (
        <button style={{
        backgroundColor: props.couleur ? props.couleur ,
        color: "whitesmoke",
        padding: "0.7em",
        border: "none",
        borderRadius: "5px"
         }}>
        {props.children}
        </button>
    )
}


