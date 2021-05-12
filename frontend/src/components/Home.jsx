import React from 'react'
import {
  Button,
  Input,
  Label,
  Container,
  Row,
  Col,
  Form,
  Alert
} from 'reactstrap'

import './Login.css'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: "",
      pswd: "",
      success: true
    }

    this.getStates = () => {
      console.log("state", this.state)
    }
  }
  render() {
    return (
      <div >
        <Alert color="success" isOpen={this.state.success} toggle={() => this.setState({ success: false })} >Login succesful</Alert>
        <div className="demo-container">
          <Row >
            <Col className="pt-3 d-flex justify-content-center">
              <div className="text-center image-size-small position-relative">
                <img src="https://annedece.sirv.com/Images/user-vector.jpg" className="rounded-circle p-2 bg-white" />
              </div>
            </Col>
          </Row>
          <Row >
            <Col className="d-flex justify-content-center">
              <div className="p-5 bg-white rounded shadow-lg">
                <h3 className="mb-2 text-center pt-5">Sign In</h3>
                <p className="text-center lead">Sign In to manage all your devices</p>
                <Form>
                  <Label >Username</Label>
                  <Input className="mb-3" onChange={(event) => this.setState({ uname: event.target.value })}></Input>
                  <Label>Password</Label>
                  <Input onChange={(event) => this.setState({ pswd: event.target.value })}></Input>
                  <Button className="mt-3 btn btn-primary btn-lg w-100 shadow-lg" color="dark" onClick={() => this.getStates()}>SIGN IN</Button>
                  <p className="m-0 py-4"><a href="" className="text-muted">Forget password?</a></p>
                </Form>
                <div className="text-center pt-4">
                  <p className="m-0">Do not have an account? <a href="" className="text-dark font-weight-bold">Sign Up</a></p>
                </div>
              </div>
            </Col>
          </Row>

        </div>
      </div>





    )
  }
}

export default Home