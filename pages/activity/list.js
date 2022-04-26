import Layout from "../../components/Layout"
import { useState } from "react"
import List from "../../components/List"
import Footer from "../../components/Footer"

export default function Index() {
  
  const [query, setQuery] = useState('')

  return <div><Layout onQueryChange={newQuery => setQuery(newQuery)} query={query} breadcrumbs={[
    { name: 'Activitats', href: 'activity/list', current: false},
  ]} titol="Jocs">
    <List query={query} setQuerySearch={() => setQuery("")}/>
  </Layout>
  <Footer/>
  </div>

}

