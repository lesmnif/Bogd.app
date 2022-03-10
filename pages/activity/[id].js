import { useRouter } from 'next/router'
import activities from '../../data/activities'
import Activity from '../../components/Activity'
import Layout from '../../components/Layout'

function getActivityById(id) {
  return activities[parseInt(id) - 1]
}

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  const activity = getActivityById(id)
  console.log(id)
  

  return <Layout>
    <Activity 
  activity={activity}
  />
  </Layout>
  // return <p>Post: {activity?.id}{id}</p>
}

export default Post