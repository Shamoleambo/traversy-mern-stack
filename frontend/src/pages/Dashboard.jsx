import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import { getGoals, reset } from '../features/goals/goalSlice'
import Spinner from '../components/Spinner'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    state => state.goals
  )

  useEffect(() => {
    if (isError) console.log(message)

    if (!user) navigate('/login')

    dispatch(getGoals())

    /*
      Commented out because this was looping, and the following warning was being displayed in the browser's console:
        -->Throttling history state changes to prevent the browser from hanging<--
    */
    // return () => {
    //   dispatch(reset())
    // }
  }, [user, isError, message, navigate, dispatch])

  if (isLoading) return <Spinner />

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
    </>
  )
}

export default Dashboard
