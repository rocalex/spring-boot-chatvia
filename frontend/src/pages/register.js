import Link from 'next/link'

import AuthLayout from "../layouts/AuthLayout";
import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await axios.post('http://localhost:8081/api/auth/register', {username, password})
      await router.push('/login')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <AuthLayout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="text-center mb-4">
              <Link href={"/"}>
                <a className="auth-logo mb-5 d-block">
                  <img src="assets/images/logo-dark.png" alt="" height="30" className="logo logo-dark"/>
                  <img src="assets/images/logo-light.png" alt="" height="30" className="logo logo-light"/>
                </a>
              </Link>

              <h4>Sign up</h4>
              <p className="text-muted mb-4">Get your Chatvia account now.</p>

            </div>

            <div className="card">
              <div className="card-body p-4">
                <div className="p-3">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <div className="input-group bg-soft-light mb-3 rounded-3">
                        <span className="input-group-text border-light text-muted" id="basic-addon6"><i
                          className="ri-user-2-line"/></span>
                        <input type="text" 
                               className="form-control form-control-lg bg-soft-light border-light"
                               placeholder="Enter Username"
                               name={username}
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label">Password</label>
                      <div className="input-group bg-soft-light mb-3 rounded-3">
                        <span className="input-group-text border-light text-muted" id="basic-addon7"><i
                          className="ri-lock-2-line"/></span>
                        <input type="password" 
                               className="form-control form-control-lg bg-soft-light border-light"
                               placeholder="Enter Password"
                               value={password}
                               onChange={e => setPassword(e.target.value)}
                        />
                      </div>
                    </div>


                    <div className="d-grid">
                      <button className="btn btn-primary waves-effect waves-light" type="submit">Sign up</button>
                    </div>

                    <div className="mt-4 text-center">
                      <p className="text-muted mb-0">By registering you agree to the Chatvia
                        <a href="#" className="text-primary">Terms of Use</a></p>
                    </div>

                  </form>
                </div>
              </div>
            </div>

            <div className="mt-5 text-center">
              <p>Already have an account ? <Link href={'/login'}>
                <a className="fw-medium text-primary"> Signin </a></Link></p>
              <p>© 2021 Chatvia</p>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Register