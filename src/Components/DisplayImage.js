import React from 'react';

const DisplayImage = ({image}) => {
    console.log(image);
    // const handl=()=>{
    //     fetch(`http://localhost:5000/addImage`,{
    //         method:'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //           },
    //         body:JSON.stringify(image)
    //     })
    // }
    return (
        <div>
            {/* <img src={image}alt="" style={{ width: '300px' }}/> */}
        </div>
    );
};

export default DisplayImage;