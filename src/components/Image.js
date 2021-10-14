import React, { useRef, useState } from 'react'

const Image = ({src, alt, className, ...props}) => {

    const [loading, setLoading] = useState(true);
    return (
        <>
            <div className={loading ? 'block h-full w-full bg-gray-300' : "hidden"}></div> 
            <img src={src} alt={alt} {...props} onLoad={() => setLoading(false)} className={loading ? `hidden`: `block ${className}`}/>
        </>
    )
}

export default Image
