import React, { useEffect, useState } from 'react';
import Tools from './Tools';

const Tool = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    // const tools = [
    //     {
    //         "_id": '1',
    //         "img": "https://i.ibb.co/2N1SVG1/category-1.jpg",
    //         "Mqty": "05",
    //         "available": "500",
    //         "name": "Brandix Screwdriver",
    //         "Uprice": "$850",
    //         "description": "A screwdriver is a tool, manual or powered, used for driving screws. A typical simple screwdriver has a handle and a shaft, ending in a tip the user puts into the screw head before turning the handle."
    //     },
    //     {
    //         "_id": '2',
    //         "img": "https://i.ibb.co/0hDM02R/category-2.jpg",
    //         "Mqty": "05",
    //         "available": "500",
    //         "name": "Brandix Pliers",
    //         "Uprice": "$24.00",
    //         "description": "Pliers are a hand tool used to hold objects firmly, possibly developed from tongs used to handle hot metal in Bronze Age Europe. They are also useful for bending and physically compressing a wide range of materials."
    //     },
    //     {
    //         "_id": '3',
    //         "img": "https://i.ibb.co/f0m00vN/category-3.jpg",
    //         "Mqty": "05",
    //         "available": "500",
    //         "name": "Generators",
    //         "Uprice": "$1550",
    //         "description": "In electricity generation, a generator is a device that converts motive power (mechanical energy) into electric power for use in an external circuit."
    //     },
    // ]

    return (
        <>
            <h2 className='text-xl font-semibold divider'>TOOLS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {/* <div class="divider"></div> */}
                {
                    tools.map(tool => <Tools

                        key={tool._id}
                        tool={tool}

                    ></Tools>)
                }
            </div>
        </>
    );
};

export default Tool;