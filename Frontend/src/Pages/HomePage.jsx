import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../Redux/AppReducer/action';

const HomePage = () => {
    // * Getting store_data 
    const tasks = useSelector((state) => state.AppReducer.tasks);
    const dispatch = useDispatch();
    let data = tasks[0];
    console.log(data)

    useEffect(() => {
        if (tasks.length === 0) dispatch(getTasks())
    }, [tasks.length, dispatch])


    return (
        <div className='w-[60%] pt-32 flex m-auto border-2 border-black min-h-screen'>


            {/* //  ! coloum Todo //  */}

            <div className='w-[28%] ml-1 border-2 border-red-400'>
                <div className='w-20 flex items-center mt-2 ml-3 '>
                    <h2 className='w-16  font-semibold  bg-pink-200 rounded px-3'>Todo
                    </h2>
                    <span className='font-medium mx-2 text-gray-400'>1</span>
                </div>


                {/*// ! Map todo tasks and show multiple cards */}
                <div className='min-w-11/12 h-fit pl-3 m-auto mt-2 mx-3 border border-gray-300 bg-slate-50 hover:border-blue-500 hover:cursor-pointer'>
                    <div>

                        <h1 className='text-2xl font-semibold py-2'>{data && data.description}</h1>

                        {
                            data && data.subTasks?.map((items) => (
                                <div className="w-11/12 h-10  flex items-center truncate">
                                    <input type="checkbox" value={items.status} name="bordered-checkbox" className="min-w-[15px] h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="bordered-checkbox-1" className="w-full h-16 py-5 ml-2 text-base font-light text-gray-500 dark:text-gray-300">{
                                        items.subTaskTitle}</label>
                                </div>
                            ))
                        }
                    </div>
                    {/* // * Title */}
                    <div className="w-full h-fit pb-2 border-t-[1px]  border-gray-400">
                        <div className='pl-1 pt-1 flex items-center gap-3'>
                            <ion-icon name={data && data.icon} style={{ color: "blue", size: "large" }}></ion-icon>
                            <p className='text'>{data && data.title}</p>
                        </div>
                    </div>


                    {/* // ! New section  */}
                </div>
                <div className='w-11/12 ml-2 mt-2 py-2 flex items-center gap-2 hover:bg-gray-100 hover:cursor-pointer rounded-md'>
                    <button className='flex items-center gap-2 ml-1'>
                        <ion-icon name="add-outline"></ion-icon>
                        <p className='font-semibold text-base text-gray-400'>New</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage