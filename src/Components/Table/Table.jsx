import "./Table.scss"

function Table() {
    const data = [
        { id: 1, batch: "Html", startingDate: "18 Jul 2024", instructor: "Jone Doe", time: "06:00 PM", branch: "Remote", mode: "ONLINE" },
        { id: 2, batch: "Css/Bootstrap", startingDate: "08 Jul 2024", instructor: "Jone Doe", time: "06:00 PM", branch: "Remote", mode: "OFFLINE" },
        { id: 3, batch: "JavaScript", startingDate: "15 Jul 2024", instructor: "Jone Doe", time: "06:00 PM", branch: "Remote", mode: "ONLINE" },
        { id: 4, batch: "React", startingDate: "12 Jul 2024", instructor: "Jone Doe", time: "06:00 PM", branch: "Remote", mode: "ONLINE" },
        { id: 5, batch: "Redux/Toolkit", startingDate: "11 Jul 2024", instructor: "Jone Doe", time: "06:00 PM", branch: "Remote", mode: "OFFLINE" },
        { id: 6, batch: "MongoDB", startingDate: "24 Jul 2024", instructor: "Jone Doe", time: "06:00 PM", branch: "Remote", mode: "ONLINE" },
        { id: 7, batch: "NodeJs/Express", startingDate: "1 Jul 2024", instructor: "Jone Doe", time: "06:00 PM", branch: "Remote", mode: "ONLINE" },
        { id: 8, batch: "NextJs", startingDate: "29 Jul 2024", instructor: "Jone Doe", time: "06:00 PM", branch: "Remote", mode: "OFFLINE" },
    ];

    return (
        <div className="table-responsive">
            <table className="table table-striped text-center">
                <thead className="table-head table-warning">
                    <tr>
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
                    {data.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.batch}</td>
                            <td>{item.startingDate}</td>
                            <td>{item.instructor}</td>
                            <td>{item.time}</td>
                            <td>{item.branch}</td>
                            <td>{item.mode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
