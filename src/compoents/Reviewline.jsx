import React from 'react'

export default function Reviewline() {
    return (
        <div>
            <div className='lg:w-250 space-y-3 mt-5 '>
                <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Quality</h3>
                    <span className="text-sm text-gray-800 dark:text-white">25%</span>
                </div>
                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-red-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-red-500" style={{width:"  25%"}}></div>
                </div>

                 <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Progress title</h3>
                    <span className="text-sm text-gray-800 dark:text-white">45%</span>
                </div>
                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-red-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-red-500" style={{width:"  45%"}}></div>
                </div>

                 <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Progress title</h3>
                    <span className="text-sm text-gray-800 dark:text-white">75%</span>
                </div>
                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-red-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-red-500" style={{width:"  75%"}}></div>
                </div>

                 <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Progress title</h3>
                    <span className="text-sm text-gray-800 dark:text-white">95%</span>
                </div>
                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-red-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-red-500" style={{width:"  95%"}}></div>
                </div>
            </div>
        </div>
    )
}
