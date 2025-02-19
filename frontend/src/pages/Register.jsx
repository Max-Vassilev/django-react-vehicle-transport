import Form from "../components/LoginRegisterForm"

function Register() {
    return <Form route="/api/user/register/" method="register" />
}

export default Register