import React from 'react'
import loginImg from "../../../static/assets/images/auth/login.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function about() {
    return (
        <div className="content-page-wrapper">
            <div 
            className="left-column"
            style={{
                background: "url(" + loginImg + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"

            }}
            />
            <div className="right-column">

                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>                      
                        <div className="text">
                            318-243-6892
                        </div>
                    </div>

                </div>

                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </div>                      
                        <div className="text">
                            cmturner072@gmail.com
                        </div>
                    </div>

                </div>

                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon={faAddressBook} />
                        </div>                      
                        <div className="text">
                            Lafayette, La 
                        </div>
                    </div>

                </div>


                
            </div>
        </div>
    )
}
