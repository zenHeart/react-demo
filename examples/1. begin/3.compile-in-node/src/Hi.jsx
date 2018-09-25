function Hi(props) {
    return <p>Hi {props.name}</p>
}

ReactDOM.render(<Hi name="react"></Hi>,document.getElementById('root'));