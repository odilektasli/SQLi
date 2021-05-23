import React from "react"

import {
    Button,
    Form,
    Label,
    Input,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalFooter,
    ModalBody,

} from "reactstrap"
import Loader from "./Loader"

import styles from "./LoggedIn.module.css"
class LoggedIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uname: "",
            password: "",
            modal: false,
            load: false,
            success: false,
            items: undefined,
            loader: false,
            info: [],
        }

        this.loadForm = () => {
            this.setState({ load: true })
        }

        this.submit = () => {
            const { uname, password } = this.state
            const postObj = { uname, password }
            this.setState({ loader: true }, () => {
                fetch('/api/login', {
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
                        alert("LOFIN FAILED!")
                        throw new Error('Failed to login')
                    }
                }).then(data => {
                    localStorage.clear()
                    this.setState({ info: [], items: null, items: data }, () => {
                        this.state.items.map((element) => {
                            this.state.info.push('Username:' + element.UNAME + ',', element.INFO)
                            console.log(element.UNAME)
                        })
                    }, this.setState({ loader: false }))
                }).catch(err => {
                    this.setState({ loader: false })
                    console.error(err.message)
                })
            })
        }
    }
    componentDidMount() {
        if (JSON.parse(localStorage.getItem("items"))) {
            this.setState({ items: JSON.parse(localStorage.getItem("items")) }, () => {
                this.state.items.map((element) => {
                    // this.setState({ info: element.INFO.split(',') })
                    this.state.info.push('Username:' + element.UNAME + ',', element.INFO)
                    console.log(element.UNAME)
                })
            })
        }
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} >
                    <ModalHeader toggle={() => this.setState({ modal: false })}>
                    </ModalHeader>
                    <ModalBody>
                        {
                            this.state.info ? this.state.info.map(element => [
                                element.split(',').map(data => <p>{data}</p>),
                                <hr />
                            ]) : undefined
                        }
                    </ModalBody>
                </Modal>
                <div className={styles.LoggedIn}>
                    <h1>Injection: Protected</h1>
                    {
                        this.state.items ?
                            <h2 className>Welcome {this.state.items.map(element => (<p>{element.NAME}</p>))}</h2> : undefined

                    }
                    <Button color="dark" onClick={() => this.setState({ modal: !this.state.modal })}>Informations</Button>
                    <Button color="dark" className="mx-3" onClick={() => this.setState({ load: !this.state.load })}>{this.state.load ? 'Close Form' : 'Re-Login'}</Button>

                    {
                        this.state.load ? <div className="demo-container">
                            <Row >
                                <Col className="d-flex justify-content-center">
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
                        </div> : undefined
                    }

                </div>
            </div>
        )
    }
}

export default LoggedIn