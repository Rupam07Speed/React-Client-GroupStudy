import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState, useEffect } from "react";

const PendingAssignments = () => {
    const { user } = useAuth();
    const userAssignment = useLoaderData();
    const [pendingUserAssignment, setPendingUserAssignment] = useState(null);
    console.log(userAssignment)
    console.table(userAssignment[0].title);
    useEffect(() => {
        if (user) {
            fetch('http://localhost:5000/pendingAssignments')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setPendingUserAssignment(data);
                })
                .catch(error => {
                    console.error('Error fetching assignments:', error);
                });
        }
    }, [user]);

    return (
        <div className="">
            {/* <h1 className="text-center text-4xl font-bold  text-white pt-10">My List</h1> */}
            {/* <div className="container p-2 mx-auto sm:p-4 text-black ">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs uppercase">
                        <thead className="bg-white">
                            <tr className="text-left">
                                <th className="p-3">Title</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Examinee Name</th>
                                <th className="p-3">Marks</th>
                                <th className="p-3">Give Mark</th>
                            </tr>
                        </thead>
                        {
                            userAssignment && userAssignment.map(pendingAssignmentCard =>
                                <PendingAssignmentsCard
                                    key={pendingAssignmentCard._id}
                                    pendingAssignmentCard={pendingAssignmentCard}
                                    userAssignment={userAssignment}
                                    setUserAssignment={setUserAssignment}
                                >
                                </PendingAssignmentsCard >)
                        }
                    </table>
                </div>
            </div> */}

            <section className='container px-4 mx-auto pt-12 w-[80%]'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-2xl font-medium text-teal-600 '>Pending Assignments</h2>

                    <span className='px-3 py-1 text-sm text-orange-600 bg-orange-100 rounded-full '>
                        {userAssignment.length} Pending
                    </span>
                </div>

                <div className='flex flex-col mt-6'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                <table className='min-w-full divide-y divide-gray-200'>
                                    <thead className='bg-gray-50'>
                                        <tr>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <div className='flex items-center gap-x-3'>
                                                    <span>Title</span>
                                                </div>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <span>Marks</span>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <button className='flex items-center gap-x-2'>
                                                    <span>Examinee Name</span>
                                                </button>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                Status
                                            </th>

                                            <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                Give Marks
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-200 '>
                                        {userAssignment.map(pendingAssignmentCard => (
                                            <tr key={pendingAssignmentCard._id}>
                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    {pendingAssignmentCard.title}
                                                </td>

                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    {pendingAssignmentCard.marks}
                                                </td>

                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    {pendingAssignmentCard.displayName}
                                                </td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                    <div className='flex items-center gap-x-2'>
                                                        <p
                                                            className='px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                        text-xs'
                                                        >
                                                            {pendingAssignmentCard.status}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                    <div className='flex items-center gap-x-6'>

                                                        <button className={user.email === pendingAssignmentCard.email ? 'btn-disabled text-gray-400' : 'text-black transition-colors duration-200   hover:text-yellow-500 focus:outline-none'}>
                                                            <Link to={`/markedAssignments/${pendingAssignmentCard._id}`}>
                                                                <svg
                                                                    xmlns='http://www.w3.org/2000/svg'
                                                                    fill='none'
                                                                    viewBox='0 0 24 24'
                                                                    strokeWidth='1.5'
                                                                    stroke='currentColor'
                                                                    className='w-5 h-5'
                                                                >
                                                                    <path
                                                                        strokeLinecap='round'
                                                                        strokeLinejoin='round'
                                                                        d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                                                                    />
                                                                </svg>
                                                            </Link>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )

                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PendingAssignments;