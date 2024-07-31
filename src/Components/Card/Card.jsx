import "./Card.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faBarChart } from "@fortawesome/free-regular-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { faChalkboardTeacher, } from "@fortawesome/free-solid-svg-icons"
// import { faHouseChimney } from "@fortawesome/free-solid-svg-icons"
// import { faRegistered } from "@fortawesome/fre-regular-svg-icons"


function Card({ imgUrl, title, lessons, type, icons, pera }) {
    return (
        <>
            <div className="card " style={{ width: "19rem", borderRadius: "10px" }}>
                <img className="card-img-top m-auto  p-4 " src={imgUrl} alt="Card image" />
                <div className="card-body">
                    <h1 className={` pb-3 card-title ${icons?"ms-4":""} title`}>{title}</h1>
                    <p className="card-text">{pera}</p>
                    {icons ? <ul className="d-flex justify-content-around list-unstyled ">
                        <li><a className="text-decoration-none text-dark icon1 " href="#"><FontAwesomeIcon icon={faBars} /> {type}</a></li>
                        <li><a className="text-decoration-none text-dark icon2 " href="#"><FontAwesomeIcon icon={faChalkboardTeacher} /> {lessons}</a></li>
                        {/* todo change text color+- */}
                    </ul> : null}
                </div>
            </div>
        </>
    )
}

export default Card
