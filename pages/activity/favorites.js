import Layout from "../../components/Layout"
import { useState } from "react"
import activites from "../../data/activities"
import FavoritesList from "../../components/FavoritesList"

export default function Favorites() {
  
const [query, setQuery] = useState('')

  return <Layout onQueryChange={newQuery => setQuery(newQuery)} query={query}>
    <FavoritesList query={query} setQuerySearch={()=>setQuery("")}/>
  </Layout>
}
