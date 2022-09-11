import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <input placeholder='username' type="text"/>
        <input placeholder='email' type="text"/>
        <input placeholder='password'type="text"/>
        <button>Login</button>
    </div>
  )
}

export default Login