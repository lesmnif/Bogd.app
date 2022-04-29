import Layout from "../../components/Layout"
import { useState, useEffect } from "react"
import activites from "../../data/activities"
import FavoritesList from "../../components/FavoritesList"
import Footer from "../../components/Footer"
import Breadcrumbs from "../../components/Breadcrumbs"
import useLocalStorage from "../../components/useLocalStorage"
import { useRouter } from 'next/router'
import toast from "react-hot-toast"
import useGlobalState from '../../components/ListState';
import useGlobalStateHot from "../../components/topState"

export default function Favorites() {

  const router = useRouter();
  const [localActivities, setLocalActivities] = useLocalStorage(
    "localActivities",
    []
  );
  
  const [maxAge, setMaxAge] = useGlobalState('maxAge')
  const [etiquetesFilter, setEtiquetesFilter] = useGlobalState('etiquetesFilter');
  const [maxPart, setMaxPart] = useGlobalState('maxPart');
  const [maxAgeHot, setMaxAgeHot] = useGlobalStateHot('maxAgeHot')
  const [etiquetesFilterHot, setEtiquetesFilterHot] = useGlobalStateHot('etiquetesFilterHot');
  const [maxPartHot, setMaxPartHot] = useGlobalStateHot('maxPartHot');
  
  
  useEffect(()=>{
    setMaxAge([])
    setEtiquetesFilter([])
    setMaxPart([])
    setMaxAgeHot([])
    setEtiquetesFilterHot([])
    setMaxPartHot([])
  },[])

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

const [query, setQuery] = useState('')
const [favoritesIds, setFavoritesIds] = useLocalStorage("favorites",[])

  return <div><Layout onQueryChange={newQuery => setQuery(newQuery)} query={query} breadcrumbs={[
    { name: 'Activitats', href: '/activity/list', current: true },
    { name: 'Preferits', href: '/activity/favorites', current: false },
  ]} titol="Activitats preferides">
    <FavoritesList query={query} setQuerySearch={()=>setQuery("")} onClickDelete={onClickDelete}/>
  </Layout>
  <Footer
  />
  </div>
}
