import { Table } from "react-bootstrap";

const ResponsiveTable = () => {
  const tableData = [
    {
      id: 1,
      name: "John Doe",
      fname: "jorj",
      age: 25,
      year: 2002,
      location: "New York",
    },
    {
      id: 1,
      name: "John Doe",
      fname: "jorj",
      age: 25,
      year: 2002,
      location: "New York",
    },
    {
      id: 2,
      name: "Jane Smith",
      fname: "jorj",
      age: 25,
      year: 2002,
      location: "",
    },
    {
      id: 2,
      name: "Jane Smith",
      fname: "jorj",
      age: 25,
      year: 2002,
      location: "",
    },
    {
      id: 3,
      name: "Amit Kumar",
      fname: "jorj",
      age: 25,
      year: 2002,
      location: "India",
    },
    {
      id: 4,
      name: "John Wick",
      fname: "jorj",
      age: 25,
      year: 2002,
      location: "USA",
    },
    // Add more data here if needed
  ];

  return (
    <div
      style={{
        transition: "all 0.3",
      }}
    >
      <h1>Bootstrap Table In React.</h1>

      <div>
        <Table striped="columns" responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
              <th>year</th>
              <th>firstname</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) =>
              data.age === 25 ? (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.location}</td>
                  <td>{data.year}</td>
                  <td>{data.fname}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ResponsiveTable;
