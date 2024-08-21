import { Route, Routes } from "react-router-dom"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home"
import Courses from "./Pages/Courses"
import CoursesView from "./Pages/CoursesView.jsx"
import Tutorial from "./Pages/Tutorial"
import TutorialView from "./Pages/TutorialView.jsx"
import UpcomingBatches from "./Pages/UpcomingBatches"
import About from "./Pages/AboutUs"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import Hader from "./Components/Hader/Hader"
import Footer from "./Components/Footer/Footer"
import "./App.css"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import PWABadge from "./PWABadge.jsx"

function App() {


  return (
    <>
      <Hader />
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="courses">
            <Route index element={<Courses />} />
            <Route path=":id" element={<CoursesView />} />
          </Route>
          <Route path="tutorial">
            <Route index element={<Tutorial />}></Route>
            <Route path=":id" element={<TutorialView />}></Route>
          </Route>
          <Route path="upcomingbatches" element={<UpcomingBatches />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<h1>404 Page Not Found </h1>} />
        </Route>
      </Routes>
      <Footer />
      <PWABadge />
    </>
  )
}

export default App