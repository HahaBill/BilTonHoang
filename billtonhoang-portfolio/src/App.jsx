import './App.css'
import Experience from './components/Experience'
import Intro from './components/Introduction'
import SidebarNav from './components/SidebarNav'
import About from './components/About'
import Footer from './components/Footer'
import SoftwareCreations from './components/SoftwareCreations'

function App() {
  return (
    <div className='components'>
      <Intro/>
      <About/>
      <Experience/>
      <SoftwareCreations/>
      <Footer/>
      <div className='app'>
        
      </div>
      <SidebarNav></SidebarNav>
    </div>
  )
}

export default App
