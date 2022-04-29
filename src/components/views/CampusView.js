/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link, useHistory } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const { campus } = props;
  const history = useHistory();

  if (!campus) return <h1>No campus found</h1>;
  // Render a single Campus view with list of its students
  return (
    <div style={{ marginTop: "20px" }}>
      <img src={campus.imageUrl} alt={campus.name} height="200px" />
      <h1>{campus.name}</h1>
      <button
        onClick={() => {
          history.push(`/campus/${campus.id}/edit`);
        }}
      >
        Edit Campus
      </button>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      {campus.students.length === 0 ? (
        <h3>No students listed for this campus.</h3>
      ) : (
        campus.students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2>{name}</h2>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CampusView;
