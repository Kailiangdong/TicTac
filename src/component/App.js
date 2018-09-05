import React, {Component} from 'react';
import Table from './Table';
import '../css/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startStatus: 'START',
        };
        this.handlestart = this.handlestart.bind(this);
    }

    handlestart() {
        if (this.state.startStatus == 'START') {
            this.setState({
                startStatus: 'RESTART',
            });
        }
        else {
            this.setState({
                startStatus: 'START',
            });
            window.location.reload();
        }
    }

    render() {
        return (
            <div>
                <div className="table">
                    <Table startStatus={this.state.startStatus}/>
                </div>
                <button className={"start"} onClick={this.handlestart}> {this.state.startStatus} </button>
            </div>
        );
    }
}

export default App;
