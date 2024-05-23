import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AssignmentDetails = () => {
    const locations = useLoaderData();
    const { user } = useAuth()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sendCopy, setSendCopy] = useState(true);
    const [takeAssignment, setTakeAssignment] = useState([]);
    const [isTake, setIsTake] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
    };

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/pendingAssignmentsEmail/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setTakeAssignment(data);
                })
                .catch(error => {
                    console.error('Error fetching tourist spots:', error);
                });
        }
    }, [user]);

    useEffect(() => {
        const result =
            takeAssignment && takeAssignment.some((item) => item.assignmentId === locations._id);
        setIsTake(result);
        console.log(result)
    }, [takeAssignment, locations._id]);
    console.log(isTake)

    return (
        <div>
            <section className="bg-white ">
                <div className="container lg:px-20 py-10 mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 capitalize lg:text-3xl ">Assignment Details</h1>

                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={locations.photoURL} alt="" />

                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <p className="text-sm font-medium text-teal-600 uppercase">{locations.difficulty}</p>

                            <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline ">
                                {locations.title}
                            </a>

                            <p className="mt-2 text-sm text-gray-500  md:text-sm">
                                {locations.shortDescription}
                            </p>

                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <div className={isTake ? 'btn-disabled bg-slate-400' : 'grid  place-content-center bg-slate-900'}>
                                    <Link to={`/takeAssignment/${locations._id}`}>
                                        <DrawOutlineButton>Take Assignment</DrawOutlineButton>

                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center mt-6">
                                <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                <div className="mx-4">
                                    <h1 className="text-md font-semibold text-gray-700 ">Marks: <span className="text-orange-600">{locations.marks}</span></h1>
                                    <h1 className="text-md font-semibold text-gray-700 ">Due Date: <span className="text-teal-600">{locations.dueDate}</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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


export default AssignmentDetails;