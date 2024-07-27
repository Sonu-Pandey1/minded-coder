import { Route,  Routes } from "react-router-dom"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home"
import Courses from "./Pages/Courses"
import Tutorial from "./Pages/Tutorial"
import UpcomingBatches from "./Pages/UpcomingBatches"
import About from "./Pages/AboutUs"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import Hader from "./Components/Hader/Hader"


function App() {


  return (
    <>
    <Hader/>
    <Navbar/>
      <Routes>
        <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="courses" element={<Courses/>}/>
        <Route path="tutorial" element={<Tutorial/>}/>
        <Route path="upcomingbatches" element={<UpcomingBatches/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
