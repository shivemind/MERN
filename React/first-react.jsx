let time = new Date().toLocaleString();

class App extends Component {
render() {
    return (
    <div className="App">
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        Hi {this.props.name}!
        </p>
        <p className="App-clock">
        The time is {time}.
        </p> 
    </div>
    );
}
}