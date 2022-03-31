import Layout from "../../components/Layout"
import { useState } from "react"
import activites from "../../data/activities"
import List from "../../components/List"

export default function Favorites() {
  
const [query, setQuery] = useState('')

  return <Layout onQueryChange={newQuery => setQuery(newQuery)} query={query}>
    <List query={query}/>
  </Layout>
}
