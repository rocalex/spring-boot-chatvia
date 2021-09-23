import {useState} from "react";
import {useRouter} from "next/router";
import Link from 'next/link'
import axios from "axios";

import AuthLayout from "../layouts/AuthLayout";

const Login = () => {
  const router = useRouter();
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await axios.post('http://localhost:8081/api/auth/login', {username, password})
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      await router.push('/')
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
                  <img src="/assets/images/logo-dark.png" alt="" height="30" className="logo logo-dark"/>
                  <img src="/assets/images/logo-light.png" alt="" height="30" className="logo logo-light"/>
                </a>
              </Link>

              <h4>Sign in</h4>
              <p className="text-muted mb-4">Sign in to continue to Chatvia.</p>

            </div>

            <div className="card">
              <div className="card-body p-4">
                <div className="p-3">
                  <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <div className="input-group mb-3 bg-soft-light rounded-3">
                        <span className="input-group-text text-muted" id="basic-addon3"><i className="ri-user-2-line"/></span>
                        <input type="text"
                               className="form-control form-control-lg border-light bg-soft-light"
                               placeholder="Enter Username"
                               name={'username'}
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="float-end">
                        <a href="#" className="text-muted font-size-13">Forgot password?</a>
                      </div>
                      <label className="form-label">Password</label>
                      <div className="input-group mb-3 bg-soft-light rounded-3">
                        <span className="input-group-text text-muted" id="basic-addon4"><i className="ri-lock-2-line"/></span>
                        <input type="password"
                               className="form-control form-control-lg border-light bg-soft-light"
                               placeholder="Enter Password"
                               name={'password'}
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />

                      </div>
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary waves-effect waves-light" type="submit">Sign in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="mt-5 text-center">
              <p>
                Don't have an account ? <Link href={'/register'}><a className="fw-medium text-primary"> Signup now </a></Link>
              </p>
              <p>© 2021 Chatvia</p>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login