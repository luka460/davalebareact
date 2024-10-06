
import './App.css'
import Nav from './components/navigation/Nav'

function App() {
let lastname = "bekoshvili"
  return (
    <div>
      <Nav firsline="home" meorexazi="suratebi" mesame="videos" meotxe="settings"/>
      <Nav/>

<h1>{lastname}</h1>
<p>addassaa</p>
<button>click me</button>
    </div>
  )
}

export default App
