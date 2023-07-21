import React from 'react';
import arrow1 from "../../asset/arrow1.png"

const ContractorCart = () => {
    return (
        <div className="p-5 lg:p-14 mt-10 bg-[#FFF] rounded-2xl ">
            <div className=''>
                <p className=''>All</p>
                <p className='mt-3'>Unverified </p>
                <p className='mt-3'>verified </p>
                <p className='mt-3'>Reccomended </p>
            </div>
            <div className='mt-5 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4'>
                <div className='mr-4'>
                    <h1 className='font-bold'>Status</h1>
                    <div className='bg-[#E5EBE4] flex w-42 p-3 rounded  justify-between mt-3'>
                        <button>Unverified</button>
                        <img src={arrow1} alt="" />
                    </div>
                </div>
                <div className='mr-4'>
                    <h1 className='font-bold'>Trade</h1>
                    <div className='bg-[#E5EBE4] flex w-42 p-3 rounded  justify-between mt-3'>
                        <button>Bu</button>
                        <img src={arrow1} alt="" />
                    </div>
                </div>
                <div className='mr-4'>
                    <h1 className='font-bold'>Type</h1>
                    <div className='bg-[#E5EBE4] flex w-42 p-3 rounded  justify-between mt-3'>
                        <button>Limited company     </button>
                        <img src={arrow1} alt="" />
                    </div>
                </div>
                <div className='mr-4'>
                    <h1 className='font-bold'>Registration date </h1>
                    <div className='bg-[#E5EBE4] flex w-42 p-3 rounded  justify-between mt-3'>
                        <button>00/00/00</button>
                        <img src={arrow1} alt="" />
                    </div>
                </div>
                <div className='mr-4'>
                    <h1 className='font-bold'>Account</h1>
                    <div className='bg-[#E5EBE4] flex w-42 p-3 rounded  justify-between mt-3'>
                        <button>Active</button>
                        <img src={arrow1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContractorCart;