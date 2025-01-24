function Greetings(props){
    const word = 'bem-vindo(a)'

    return(
        <p>Seja muito {word} {props.name}!</p>
    );
}

export default Greetings