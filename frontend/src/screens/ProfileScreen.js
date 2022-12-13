import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserDetails, login, register, updateUserProfile } from '../actions/userAction'
import FormSection from '../components/FormSection'
import { useNavigate, useLocation } from 'react-router-dom'
import Message from '../components/Message'
import Loading from '../components/Loading'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'


const ProfileScreen = () => {
    const [firstname, setFirstname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch() 
    const history = useNavigate()
    const location = useLocation()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo} = userLogin

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            history('/login')
        } else {
            if (!user || !user.name || success ) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
            } else {
                setFirstname(user.name)
                setEmail(user.username)
            }
        }
    }, [dispatch, history, userInfo, user, success])

    const submiHandler = (e) =>{
        e.preventDefault()
        if (password != confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({
                'name': firstname,
                'username':email,
                'email': email,
                'password': password
            }))
        }
        
    }

  return (
    <div className='mx-auto max-w-7xl md:px-10 '>
      <div className='w-1/2'>
        <FormSection>
                <form onSubmit={submiHandler}>
                    <p className='uppercase text-3xl' >Sing up</p>
                    {message && <Message>{message}</Message>}
                    {error && <Message>{error}</Message>}
                    {loading && <Loading />}
                    <div className='mt-[25px] opacity-75'>
                        <p className='font-semibold' >Firstname</p>
                        <input value={firstname} onChange={(e) => setFirstname(e.target.value)} type={'text'} placeholder='John' className='bg-gray-100 w-full py-[15px] px-[25px] mt-[10px]' />
                    </div>
                    <div className='mt-[25px] opacity-75'>
                        <p className='font-semibold' >Email</p>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type={'text'} placeholder='example@gmail.com' className='bg-gray-100 w-full py-[15px] px-[25px] mt-[10px]' />
                    </div>
                    <div className='mt-[25px] opacity-75'>
                        <p className='font-semibold' >Password</p>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type={'password'} placeholder='*********' className='bg-gray-100 w-full py-[15px] px-[25px] mt-[10px]' />
                    </div>
                    <div className='mt-[25px] opacity-75'>
                        <p className='font-semibold' >Confirm Password</p>
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type={'password'} placeholder='*********' className='bg-gray-100 w-full py-[15px] px-[25px] mt-[10px]' />
                    </div>
                    <button type={'submit'} className='bg-black text-white px-[25px] py-[15px] mt-[25px] uppercase'>
                        Update
                    </button>
                </form>
                <div className='flex mt-[10px]'>
                    <p className='opacity-50'>New Customer?</p> <p className='opacity-100' >Register</p> 
                </div>
            </FormSection>
      </div>
      <div className='w-1/2'>

      </div>
    </div>
  )
}

export default ProfileScreen
