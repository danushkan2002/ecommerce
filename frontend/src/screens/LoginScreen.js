import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../actions/userAction'
import FormSection from '../components/FormSection'
import { useNavigate, useLocation, Link } from 'react-router-dom'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch() 
    const history = useNavigate()
    const location = useLocation()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo} = userLogin

    useEffect(() => {
        if (userInfo) {
            history(redirect)
        }
    }, [history, redirect, userInfo])

    const submiHandler = (e) =>{
        e.preventDefault()
        dispatch(login(email, password))
    }

  return (
    <FormSection>
        <form onSubmit={submiHandler}>
            <p className='uppercase text-3xl' >Sing in</p>
            <div className='mt-[25px] opacity-75'>
                <p className='font-semibold' >Email</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type={'text'} placeholder='example@gmail.com' className='bg-gray-100 w-full py-[15px] px-[25px] mt-[10px]' />
            </div>
            <div className='mt-[25px] opacity-75'>
                <p className='font-semibold' >Password</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type={'password'} placeholder='*********' className='bg-gray-100 w-full py-[15px] px-[25px] mt-[10px]' />
            </div>
            <button type={'submit'} className='bg-black text-white px-[25px] py-[15px] mt-[25px] uppercase'>
                Sing in
            </button>
        </form>
        <div className='flex mt-[10px]'>
            <p className='opacity-50'>New Customer?</p> <Link to='/Register' className='opacity-100' >Register</Link> 
        </div>
    </FormSection>
  )
}

export default LoginScreen
