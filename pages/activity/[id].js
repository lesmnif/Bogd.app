import { useRouter } from "next/router";
import activitiesData from "../../data/activities";
import Activity from "../../components/Activity";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import useLocalStorage from "../../components/useLocalStorage";
import toast, { Toaster } from "react-hot-toast";


const Post = () => {
  const [activities, setActivities] = useState([...activitiesData]);
  

  function getActivityById(id) {
    return activities[parseInt(id) - 1];
  }

  useEffect(() => {
    const localActivities = JSON.parse(localStorage.getItem("localActivities"));
    if (localActivities != null) {
      for (let i = 0; i < localActivities.length; i++) {
        if (!activities.id?.includes(localActivities[i].id)) {
          setActivities((prevState) => {
            const newActivities = [...prevState];
            newActivities.push(localActivities[i]);
            return newActivities;
          });
        }
      }
    }
  }, [activities.id]);
  
  const [localActivities, setLocalActivities] = useLocalStorage(
    "localActivities",
    activities
  );

  const [favoritesIds, setFavoritesIds] = useLocalStorage("favorites",[])
   
  const router = useRouter();
  const { id } = router.query;
  const activity = getActivityById(id);

  function onClickDelete(id){
    if (confirm('Segur que vols borrar la activitat ?')) {
      const myActivities = JSON.parse(localStorage.getItem("localActivities"))
      const myIds = myActivities.map((activity) => activity.id)
      const index = myIds.indexOf(id)
      if(favoritesIds.includes(id)){
        const idsIndex = favoritesIds.indexOf(id)
        setFavoritesIds((prevState) =>{
          const newIds = [...prevState]
          newIds.splice(idsIndex, 1)
          return newIds
        })}
      myActivities.splice(index, 1)
      router.push("/")
      toast.success("Activitat borrada! 🔥")
      setLocalActivities(myActivities)
    }
  }

  return (
    <Layout breadcrumbs={ activity?.isSong ? [
      { name: 'Cançoner', href: '/activity/songs', current: true},
      { name: activity?.title, href: '/activity/list', current: false},
    ] : activity?.isHot ? [
      { name: 'Tendències', href: '/activity/favorites', current: true},
      { name: activity?.title, href: '/activity/list', current: false},
    ] : [
      { name: 'Activitats', href: '/activity/list', current: true},
      { name: activity?.title, href: '/activity/list', current: false},
    ] } isHidden={true}>
      <Activity activity={activity} onClickDelete={onClickDelete} />
    </Layout>
  );
};

export default Post;
