import Layout from "../../components/Layout"
import { useState } from "react"
import List from "../../components/topList"
import Footer from "../../components/Footer"
export default function Index() {
  const [query, setQuery] = useState('')

  return <div><Layout onQueryChange={newQuery => setQuery(newQuery)} query={query}  breadcrumbs={[
    { name: 'Tendències', href: '/activity/list', current: false},
  ]} titol="Tendències">
    <List query={query} setQuerySearch={() => setQuery("")}/>
  </Layout>
  <Footer/>
  </div>
}
