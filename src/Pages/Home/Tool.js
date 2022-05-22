import React from 'react';
import Tools from './Tools';

const Tool = () => {

    const tools = [
        {
            _id: '1',
            img: 'https://i.ibb.co/2N1SVG1/category-1.jpg',
            Mqty: '05',
            available: '50',
            name: 'Brandix Screwdriver',
            Uprice: '$850',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.'
        },
        {
            _id: '2',
            img: 'https://i.ibb.co/0hDM02R/category-2.jpg',
            Mqty: '05',
            available: '50',
            name: 'Brandix Pliers',
            Uprice: '$24.00',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.'
        },
        {
            _id: '3',
            img: 'https://i.ibb.co/f0m00vN/category-3.jpg',
            Mqty: '05',
            available: '50',
            name: 'Generators',
            Uprice: '$1550',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.'
        },
    ]

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