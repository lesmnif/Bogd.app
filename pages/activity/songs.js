import Layout from "../../components/Layout"
import { useState } from "react"
import List from "../../components/songsList"
import Footer from "../../components/Footer"

export default function Index() {
  
  const [query, setQuery] = useState('')

  return <div><Layout onQueryChange={newQuery => setQuery(newQuery)} query={query} breadcrumbs={[
    { name: 'Cançons', href: '/activity/songs', current: false},
  ]} titol="Cançoner">
    <List query={query} setQuerySearch={() => setQuery("")}/>
  </Layout>
  <Footer/>
  </div>

}