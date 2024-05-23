import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const CreateAssignments = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    // const deadline = startDate;
    const {
      photoURL,
      title,
      marks,
      difficulty,
      dueDate,
      userEmail,
      shortDescription,
    } = data;
    const { email } = user;
    const newAssignment = {
      photoURL,
      title,
      marks,
      difficulty,
      dueDate,
      userEmail,
      shortDescription,
      email,
    };
    console.log(newAssignment);
    if (Object.keys(errors).length === 0) {
      fetch("http://localhost:5000/createAssignments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newAssignment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          Swal.fire({
            icon: "success",
            title: "Yeah....",
            text: "Successfully added.",
            confirmButtonText: "Cool",
          }).then(() => {
            // reset(); // Reset the form after success message
          });
        });
    } else {
      // Handle form errors
      console.log("Form has errors");
      Swal.fire({
        icon: "error",
        title: "Oppps....",
        text: "Something wrong",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div className="">
      <div className="">
        <div className="flex justify-center items-center">
          <div className="bg-gradient-to-br from-[#2C3E50] to-[#4CA1AF] bg-opacity-50 my-10s w-[60%] p-12 rounded-lg shadow-xl mt-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
              Create Assignment
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700">
                    Thumbnail Image URL:
                  </label>
                  <input
                    type="url"
                    placeholder="Enter Thumbnail URL"
                    {...register("photoURL", { required: true })}
                    className="w-full mt-2 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Title:</label>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    {...register("title", { required: true })}
                    className="w-full mt-2 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700">Marks:</label>
                  <input
                    type="text"
                    placeholder="Enter Marks"
                    {...register("marks", { required: true })}
                    className="w-full mt-2 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    Difficulty Level:
                  </label>
                  <select
                    {...register("difficulty", { required: true })}
                    className="w-full mt-2 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select Difficulty - </option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-gray-700">Average Cost:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Average Cost"
                                        {...register("averageCost", { required: true })}
                                        className="w-full mt-2 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Travel Time:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Travel Time"
                                        {...register("travelTime", { required: true })}
                                        className="w-full mt-2 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Total Visitors Per Year:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Total Visitors Per Year"
                                        {...register("totalVisitors", { required: true })}
                                        className="w-full mt-2 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700">User Email:</label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    placeholder="Enter User Email"
                    {...register("userEmail", { required: true })}
                    className="w-full mt-2 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                  />
                </div>
                {/* <div>
                                    <label className="block text-gray-700">User Name:</label>
                                    <input
                                        type="text"

                                        placeholder="Enter User Name"
                                        {...register("userName", { required: true })}
                                        className="w-full mt-2 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                                    />
                                </div> */}
                <div>
                  <label className="block text-gray-700">Due Date:</label>
                  <input
                    type="date"
                    placeholder="Enter Due Date"
                    {...register("dueDate", { required: true })}
                    className="w-full mt-2 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700"> Description:</label>
                <textarea
                  {...register("shortDescription", { required: true })}
                  placeholder="Enter Description"
                  rows="4"
                  className="w-full mt-2 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="border-white border-[1px] text-white py-3 px-6 rounded-md cursor-pointer hover:bg-orange-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignments;
