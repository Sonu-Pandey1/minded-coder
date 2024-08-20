
import Table from "../Components/Table/Table"
import "./UpcomingBatches.scss"

function UpcomingBatches() {
  return (
    <div className="MainContainer my-5">
      <h1 className="text-center mb-4">Our Upcoming Batches</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 overflow-auto">
            <Table />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingBatches

