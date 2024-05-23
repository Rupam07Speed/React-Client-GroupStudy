import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateAssignments from "../pages/CreateAssignments/CreateAssignments";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import Assignments from "../pages/Assignments/Assignments";
import UpdateAssignments from "../pages/UpdateAssignments/UpdateAssignments";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import TakeAssignment from "../pages/TakeAssignment/TakeAssignment";
import PendingAssignments from "../pages/PendingAssignments/PendingAssignments";
import SubmittedAssignments from "../pages/SubmittedAssignments/SubmittedAssignments";
import MarkedAssignments from "../pages/MarkedAssignments/MarkedAssignments";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/createAssignments"),
      },
      {
        path: "/createAssignments",
        element: (
          <PrivateRoute>
            <CreateAssignments></CreateAssignments>
          </PrivateRoute>
        ),
      },
      {
        path: "/pendingAssignments",
        element: (
          <PrivateRoute>
            <PendingAssignments></PendingAssignments>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/pendingAssignments"),
      },
      {
        path: "/submittedAssignments/:email",
        element: (
          <PrivateRoute>
            <SubmittedAssignments></SubmittedAssignments>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/takeAssignments/user/${params.email}`),
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
        loader: () => fetch("http://localhost:5000/createAssignments"),
      },
      {
        path: "/createAssignments/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/createAssignments/${params.id}`),
      },
      {
        path: "/takeAssignment/:id",
        element: (
          <PrivateRoute>
            <TakeAssignment></TakeAssignment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/createAssignments/${params.id}`),
      },
      {
        path: "/markedAssignments/:id",
        element: (
          <PrivateRoute>
            <MarkedAssignments></MarkedAssignments>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/pendingAssignments/${params.id}`),
      },
      {
        path: "/updateAssignments/:id",
        element: <UpdateAssignments></UpdateAssignments>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/createAssignments/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
