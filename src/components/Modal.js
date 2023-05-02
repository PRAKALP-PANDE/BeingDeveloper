import React from 'react';

export default function Modal({ isVisible, onClose }) {

    let data = require('./data.json')

    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }
    return (
        <div>
            <form id="wrapper" onClick={handleClose}><div className="body bg-white dark:bg-[#0F172A]">
                <div className="bg-black before:animate-pulse before:bg-gradient-to-b before:from-gray-900 overflow-hidden before:via-[#00FF00] before:to-gray-900 before:absolute ">
                    <div id="myDIV" >
                        <div className="w-[100vw] h-[100vh] px-3 sm:px-5 flex items-center justify-center absolute">
                            <div className="bg-black opacity-90 row-span-2 w-full sm:w-1/2 lg:2/3 px-6 bg-gray-500 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-50 py-4  rounded-lg">
                                {/* <div className="w-full flex justify-center text-xl mb:2 md:mb-5">
                                    {data.toast_tagLine}
                                </div> */}
                                    <div className="modal-box">
                                        <h2><span>{data.toast_tagLine}</span></h2>
                                        <p>{data.toast_para1}</p><br/>
                                        <p>{data.toast_para2}</p><br/>
                                        <p>{data.toast_para3}</p>
                                    </div>


                                <div className="flex justify-between items-baseline">
                                    <button className="mt-4 w-40 h-12 rounded-lg  bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition" onClick={() => onClose()}>
                                        Close
                                    </button>
                                    <button href='#careers' className="mt-4 w-40 h-12 rounded-lg  bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form >
        </div >
    )
}
