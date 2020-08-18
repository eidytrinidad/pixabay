import React from 'react'

function ModalGallery({ selectedImg,setSelectedImg}) {


const handleClick = (e)=>{
    if (e.target.classList.contains("modal")) {
        setSelectedImg(null)
    }
}

    return (
        <div className="modal" onClick={handleClick}>
            <img style={fullImage} src={selectedImg} alt="image"/>
        </div>
    )
}

export default ModalGallery


const fullImage={
    width:"60%",
    height:"500px"
}
