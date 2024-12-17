export function Bouton({ couleur}) {

    return (
        <button style={{
            backgroundColor: couleur ? couleur : "black",
            color: "whitesmoke",
          border: "none",
          borderRadius: "5px"
         }}>
        Valider
        </button>
    )
}


