function Button({label, mathOperation}){
    return(
        <button onClick={() => alert(mathOperation)}>{label}</button>
    );
}

export default Button
