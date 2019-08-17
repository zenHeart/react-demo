function Hi(props) {
    return React.createElement(
        "p",
        null,
        "Hi ",
        props.name
    );
}

ReactDOM.render(React.createElement(Hi, { name: "react" }), document.getElementById('root'));