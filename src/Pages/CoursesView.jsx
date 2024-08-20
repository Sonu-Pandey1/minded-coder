import { useState, useEffect } from "react";
import "./CoursesView.scss";
import Overview from "../Pages/Overview";
import QA from "../Pages/QA";
import { useParams } from "react-router-dom";

function Courses() {
  const [iframeSrc, setIframeSrc] = useState(
    "https://www.youtube.com/embed/ER9SspLe4Hg?si=NmeyWOA-qf1pIPg8"
  );
  const [currentSession, setCurrentSession] = useState("overview");
  const [data, setData] = useState([]);
  const { id: params } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/htmlCourse");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const course = data.find((item) => item.id === params);
      if (course) {
        setIframeSrc(course.src);
      }
    }
  }, [data, params]);

  const getCourseInfo = (field) => {
    const course = data.find((item) => item.id === params);
    return course ? course[field] : null;
  };

  const renderSession = () => {
    switch (currentSession) {
      case "overview":
        return <Overview />;
      case "QA":
        return <QA />;
      default:
        return <Overview />;
    }
  };

  // if (data.length === 0) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <div className="coursesContainer">
        <div className="container-fluid">
          <div className="row">
            {/* videoContainer */}
            <div className="col-8 videoContainer">
              <iframe
                id={"fname"}
                className="videoFrame rounded-4"
                width="100%"
                height="100%"
                src={iframeSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            {/* Sidebar  */}
            <div className="col-4 sidebarContainer">
              <div className="row">
                <div className="col-3 col1 bg-dark p-2">
                  <img
                    src={getCourseInfo('courseImgSrc')}
                    alt="logo"
                  />
                </div>
                <div className="col-9 col2 bg-dark p-2 text-white">
                  <h1 className="ps-5 pt-1">{getCourseInfo('topicName')}</h1>
                </div>
              </div>
              <ul className="sidebarItems list-unstyled">
                {data.length > 0 && data.map((item, index) => (
                  <li key={index} className="sidebarItem">
                    <a
                      onClick={() => setIframeSrc(item.src)}
                    >
                      {item.topicName}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Overview and QA Session */}
          <div className="row">
            <div className="col p-2">
              <nav className="coursesNav">
                <div className="btnsContainer">
                  <span
                    className={`btns ${currentSession === "overview" ? "active" : ""}`}
                    onClick={() => setCurrentSession("overview")}
                  >
                    Overview
                  </span>
                  <span
                    className={`btns ms-4 ${currentSession === "QA" ? "active" : ""}`}
                    onClick={() => setCurrentSession("QA")}
                  >
                    Q&A
                  </span>
                </div>
                <div className="NavPages">{renderSession()}</div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;