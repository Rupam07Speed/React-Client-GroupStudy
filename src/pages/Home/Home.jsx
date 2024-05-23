import { useLoaderData } from "react-router-dom";
import Assignments from "../Assignments/Assignments";
import Banner from "../Banner/Banner";
import QnA from "../QnA/QnA";
import AssignmentHome from "../AssignmentHome/AssignmentHome";
import { useState } from "react";

const Home = () => {
  const allAssignment = useLoaderData();
  console.log(allAssignment);
  const [assignments, setAssignments] = useState(allAssignment);
  return (
    <div>
      <Banner></Banner>
      <AssignmentHome assignments={assignments}></AssignmentHome>
      <QnA></QnA>
    </div>
  );
};

export default Home;
