import { convertToRaw } from 'draft-js';
import React from 'react'
import profilePicture from "../../../static/assets/images/bio/professional_photo.jpg";

export default function about() {
    return (
        <div className="content-page-wrapper">
            <div 
            className="left-column"
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"

            }}
            />
            <div className="right-column">
               I am a well studied mathematician who is looking to expand my abilities and become a software devloper. I am 
               currently a teacher where I have impacted many students lives, but I feel it is time to move on to grander adventures
               and explore a new world. My world was truly turned upside down when I found out how exciting creating a new website is. It 
               truly felt like I had just solved a complex equation for the first time. I feel like my patcience and perserverance that 
               mathematics has taught me is a usueful skill in the developing world. I do not give up and do not stop until the job is done. 
            </div>
        </div>
    )
}
