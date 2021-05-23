import React from 'react'
import {
  Button,
  Input,
  Label,
  Row,
  Col,
  Form,
} from 'reactstrap'
import { Redirect } from "react-router-dom"
import './Home.css'
import Loader from './Loader'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: "",
      password: "",
      success: false,
      loader: false
    }


    this.submit = () => {
      const { uname, password } = this.state
      const postObj = { uname, password }
      this.setState({ loader: true }, () => {
        fetch('/api/sqli', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postObj)
        }).then(res => {
          if (res.ok) {
            alert("LOGIN SUCCESFUL")
            return (res.json())
          } else {
            alert("LOGIN FAILED")
            throw new Error('Failed to login')
          }
        }).then(data => {
          localStorage.setItem("items", JSON.stringify(data))
          {
            this.setState({ success: true, loader: false })
          }
        }).catch(err => {
          this.setState({ loader: false })
          console.error(err.message)
        })
      })

    }
  }
  componentDidMount() {
    localStorage.removeItem("items")
  }
  render() {
    return (
      this.state.success ? <Redirect to="/loggedin" /> :
        <div className="demo-container">
          <h1>Injection: Not Protected</h1>
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
                  {this.state.loader ? <Loader /> : undefined}
                  <Label >Username</Label>
                  <Input className="mb-3" onChange={(event) => this.setState({ uname: event.target.value })}></Input>
                  <Label>Password</Label>
                  <Input onChange={(event) => this.setState({ password: event.target.value })}></Input>
                  <Button className="mt-3 btn btn-primary btn-lg w-100 shadow-lg" color="dark" onClick={() => this.submit()}>SIGN IN</Button>
                  <p className="m-0 py-4"><a href="" className="text-muted">Forget password?</a></p>
                </Form>
                <div className="text-center pt-4">
                  <p className="m-0">Do not have an account? <a href="" className="text-dark font-weight-bold">Sign Up</a></p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
    )
  }
}

export default Home