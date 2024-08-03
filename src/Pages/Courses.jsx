import "./Courses.scss"

function Courses() {
  return (
    <>
      <div className="coursesContainer">
        <div className="container-fluid">
          <div className="row">

            <div className="col-8 videoContainer"><iframe className=" videoFrame rounded-4" width="100%" height="100%" src="https://www.youtube.com/embed/ER9SspLe4Hg?si=NmeyWOA-qf1pIPg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

            <div className="col-4 sidebarContainer">

              <div className="row">
                <div className="col-3 col1 bg-dark p-2">
                  <img src="https://admin.ducatindia.com/tutorial/technology/1712151078432javascript.png" alt="logo" />
                </div>
                <div className="col-9 col2 bg-dark p-2 text-white">
                  <h1 className="ps-5 pt-1">Javscript</h1>
                </div>
              </div>

              <ul className="sidebarItems list-unstyled">
                <li className="ulHanding p-4 fw-bold text-bg-white">Topics</li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
                <li className="sidebarItem  "><a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.</a></li>
              </ul>
            </div>

          </div>

          <div className="row">
            <div className="col bg-info p-2 ">
            <nav className="">
              <button>Overview</button>
              <button>Q&A</button>
            </nav>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Courses
