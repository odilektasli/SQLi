import React from 'react'
import {
    Button,
    Input,
    Label,
    Container,
    Row,
    Col
} from 'reactstrap'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uname: "",
            pswd: ""
        }

        this.getStates = () => {
            console.log("state", this.state)
        }
    }
    render() {
        return (
            <Container className="shadow-lg p-5 mb-5 bg-white rounded" style={{ backgroundColor: "white", borderRadius: "10px" }}>
                <Label >Username</Label>
                <Input onChange={(event) => this.setState({ uname: event.target.value })}></Input>
                <Label>Password</Label>
                <Input onChange={(event) => this.setState({ pswd: event.target.value })}></Input>
                <Button className="mt-3" color="dark" onClick={() => this.getStates()}>Submit</Button>
            </Container>

        )
    }
}

export default Home