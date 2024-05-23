import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const AssignmentsCard = ({ assignment, allAssignments, setAllAssignments }) => {
  const { user } = useAuth();
  const {
    _id,
    photoURL,
    title,
    marks,
    difficulty,
    dueDate,
    userEmail,
    shortDescription,
  } = assignment;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/createAssignments/user/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = allAssignments.filter(
                (tour) => tour._id !== _id
              );
              setAllAssignments(remaining);
            }
          });
      }
    });
  };
  const handleDelete1 = (_id) => {
    console.log(_id);
    Swal.fire({
      icon: "error",
      title: "Action not permitted",
      text: "Something wrong",
      confirmButtonText: "Ok",
    });
  };

  return (
    <div className="flex items-center justify-center m-6 ">
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-xl  hover:shadow-2xl transition duration-300 bg-gradient-to-br from-[#2C3E50] to-[#4CA1AF]">
        <div className="p-10 ">
          <img
            className="object-cover object-center w-full h-56 rounded-xl"
            src={photoURL}
            alt="avatar"
          />
        </div>

        <div className="flex justify-center mt-4 gap-4">
          <div className="flex items-center lg:px-3 lg:py-3 bg-gray-900 border-teal-600 border-2 rounded-lg">
            <h1 className="mx-3 text-lg font-semibold text-white">
              Marks : <span>{marks}</span>
            </h1>
          </div>
          <div className="flex items-center px-3 py-3 bg-gray-900 border-teal-600 border-2 rounded-lg">
            <h1 className="mx-3 text-lg font-semibold text-white">
              Difficulty : <span>{difficulty}</span>
            </h1>
          </div>
        </div>
        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h1>

          <p className="py-2 text-white ">
            Full Stack maker & UI / UX Designer , love hip hop music Author of
            Building UI.
          </p>

          <div className="flex gap-2 justify-center">
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <div className="grid  place-content-center bg-slate-900">
                <Link to={`/createAssignments/${_id}`}>
                  <DrawOutlineButton>View Details</DrawOutlineButton>
                </Link>
              </div>
            </div>

            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <div className="grid  place-content-center bg-slate-900">
                <Link to={`/updateAssignments/${_id}`}>
                  <DrawOutlineButton>Update</DrawOutlineButton>
                </Link>
              </div>
            </div>

            {user && user.email === userEmail ? (
              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <div className="grid  place-content-center bg-slate-900">
                  <DrawOutlineButton onClick={() => handleDelete(_id)}>
                    Delete
                  </DrawOutlineButton>
                </div>
              </div>
            ) : (
              <div className=" items-center mt-4 text-gray-400 dark:text-gray-200">
                <div className="grid  place-content-center bg-slate-900">
                  <DrawOutlineButton onClick={() => handleDelete1(_id)}>
                    Delete
                  </DrawOutlineButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-teal-300"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-teal-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-teal-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-teal-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-teal-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default AssignmentsCard;
