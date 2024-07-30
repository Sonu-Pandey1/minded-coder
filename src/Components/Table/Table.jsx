import "./Table.scss"

function Table() {

    let data = [
        { id: 1, batch: "Html", startingDate: "18 Jul 2024", instructor: "Jone Doe", time: "06:00 PM", branch: "Remote", mode: "ONLINE" },
        { id: 2, batch: "Css/Bootstrap", startingDate: "08 Jul 2024", instructor: "Jone Doe", time: "06:00 PM", branch: "Remote", mode: "OFLINE" },
        { id: 3, batch: "javscript", startingDate: "15 Jul 2024", instructor: "Jone Doe", time: "06:00 PM", branch: "Remote", mode: "ONLINE" },
        { id: 4, batch: "React", startingDate: "12 Jul 2024", instructor: "Jone Doe", time: "06:00 PM", branch: "Remote", mode: "ONLINE" },
        { id: 5, batch: "Redux/Toolkit", startingDate: "11 Jul 2024", instructor: "Jone Doe", time: "06:00 PM", branch: "Remote", mode: "OFLINE" },
        { id: 6, batch: "MongoDb", startingDate: "24 Jul 2024", instructor: "Jone Doe", time: "06:00 PM", branch: "Remote", mode: "ONLINE" },
        { id: 7, batch: "NodeJs/Express", startingDate: "1 Jul 2024", instructor: "Jone Doe", time: "06:00 PM", branch: "Remote", mode: "ONLINE" },
        { id: 8, batch: "NextJs", startingDate: "29 Jul 2024", instructor: "Jone Doe", time: "06:00 PM", branch: "Remote", mode: "OFLINE" },
    ]
    return (
        <>
            <table className="table table-striped text-center">
                <thead className="table-head table-warning ">
                    <tr className=" ">
                        <th scope="col">S.No.</th>
                        <th scope="col">Batch</th>
                        <th scope="col">Starting Date</th>
                        <th scope="col">Instructor</th>
                        <th scope="col">Time</th>
                        <th scope="col">Branch</th>
                        <th scope="col">Mode</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {data.map((items)=>{
                       return(
                        <tr key={items.id}>
                            <th className="" scope="row">{items.id}</th>
                            <td>{items.batch}</td>
                            <td>{items.startingDate}</td>
                            <td>{items.instructor}</td>
                            <td>{items.time}</td>
                            <td>{items.branch}</td>
                            <td>{items.mode}</td>
                        </tr>
                       )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table
