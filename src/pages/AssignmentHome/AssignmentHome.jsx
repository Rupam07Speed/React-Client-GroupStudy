import AssignmentsCard from "../AssignmentsCard/AssignmentsCard";

const AssignmentHome = ({ assignments }) => {
  return (
    <div>
      <div className="text-center font-bold text-3xl my-5">All Assignments</div>
      <div className="grid col-span-4 grid-cols-3">
        {assignments.map((assignment) => (
          <AssignmentsCard
            key={assignment._id}
            assignment={assignment}
          ></AssignmentsCard>
        ))}
      </div>
    </div>
  );
};

export default AssignmentHome;
