import Form from "../components/LoginRegisterForm"

function Login() {
    return <Form route="/api/token/" method="login" />
}

export default Login