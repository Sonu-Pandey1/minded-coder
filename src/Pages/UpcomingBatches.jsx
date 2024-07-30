import Table from "../Components/Table/Table"
import "./UpcomingBatches.scss"

function UpcomingBatches() {
  return (
    <div className="MainContainer">
      <h1 className="text-center pt-5">Our Upcoming Batches</h1>
      <div className="container">
        <div className="row">
          <div className="col pt-5 pb-5">
            <Table/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingBatches
