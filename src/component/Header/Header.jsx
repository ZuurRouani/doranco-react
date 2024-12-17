import classes from "./header.module.css";

export function Header() {
    return (
        <header className={classes.container}>
            <h1 className={classes.titre}>Bienvenue</h1>
            <p
                style={{
                    backgroundColor: "green",
                    fontSize: "1.2em",
                }}
            >
                Premier paragraphe
            </p>
        </header>
    );
}
