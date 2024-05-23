import { useForm } from "react-hook-form";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
const TakeAssignment = () => {
    const { user } = useAuth()
    const takeassign = useLoaderData();
    const {
        _id, photoURL, title, marks, difficulty, dueDate, userEmail, shortDescription
    } = takeassign;
    const {
        email, displayName

    } = user;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, event) => {
        event.preventDefault()
        const { url, message } = data;
        const status = 'Pending';
        const getMarks = '0';
        const assignmentId = takeassign._id;
        if (email === userEmail) {
            console.log("Form has errors");
            Swal.fire({
                icon: "error",
                title: "Action not permitted",
                text: "Something wrong",
                confirmButtonText: "Ok",
            });
            return
        }
        const newTakeAssignment = {
            _id, photoURL, title, marks, difficulty, dueDate, userEmail, shortDescription, url, message, status, email, displayName, getMarks, assignmentId

        };
        console.table(newTakeAssignment);

        // const submitData = {
        //     _id, photoURL, title, marks, difficulty, dueDate, userEmail, shortDescription, url, message, status, email
        // }

        if (Object.keys(errors).length === 0) {
            fetch("http://localhost:5000/takeAssignments", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newTakeAssignment),
            })
                .then((res) => res.json())
                .then((data1) => {
                    console.log(data1);
                    Swal.fire({
                        icon: "success",
                        title: "Yeah....",
                        text: "Assignment Submitted Successfully.",
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

    }
    return (
        <div>
            <div className="container mx-auto">
                <div className="mt-2 lg:flex lg:flex-col lg:items-center">

                    <div className="mt-2 lg:w-1/2 lg:mt-0  ">
                        {/* <div className="">
                            <p className="text-sm font-medium text-white uppercase bg-teal-600 w-[15%] rounded-md p-1 text-center">{takeassign.difficulty}</p>
                        </div> */}

                        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                            {/* <div className="grid  place-content-center bg-slate-900">
                                <Link to={`/takeAssignment/${locations._id}`}>
                                    <DrawOutlineButton>Take Assignment</DrawOutlineButton>
                                </Link>
                            </div> */}
                        </div>

                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-gray-700 ">{takeassign.title}</h1>
                            <h1 className="text-md font-semibold text-gray-700 ">Marks: <span className="text-orange-600">{takeassign.marks}</span></h1>
                            <h1 className="text-md font-semibold text-gray-700 ">Due Date: <span className="text-teal-600">{takeassign.dueDate}</span></h1>
                        </div>
                    </div>
                </div>

                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-10 bg-gradient-to-br from-teal-600 to-teal-700">
                    <h2 className="text-2xl font-bold text-white capitalize ">Submission</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 gap-6 mt-2 sm:grid-cols-1">

                            <div>
                                <label className="text-white" htmlFor="url"> PDF/doc link</label>
                                <input
                                    id="url"
                                    type="url"
                                    placeholder="Enter PDF/doc link"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-orange-400 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring"
                                    {...register("url", { required: true })}
                                />
                            </div>
                            <div>
                                <label className="text-white" htmlFor="message">Note</label>
                                <textarea
                                    id="message"
                                    placeholder="Note"
                                    rows="4"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-orange-400 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring"
                                    {...register("message", { required: true })}
                                ></textarea>
                            </div>


                        </div>

                        <div className="flex justify-end mt-6">
                            <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>

    );
};

export default TakeAssignment;