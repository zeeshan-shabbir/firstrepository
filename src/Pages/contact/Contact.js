import React from 'react'
import "./contact.css"

export default function Contact() {
    // const row_style={
    // width:"70rem",
    // margin:"0px auto",
    // }
    const form_style={
        width:"50%",
        margin:"auto",
        marginTop : "2rem",
    }
    return (
        <div className="container-100 contact-cont capitalize">
            <div className="center">
            <h1 className="contact-h1">contacts</h1>
            </div>
            <div className="cont-row" >
                <form action="" className="cont-form" style={form_style}>
                    <div className="feilds flex justify-between ">
                        <div className="fname">
                            <input type="text" className="form-feild" placeholder="Your first name *" required />
                        </div>
                        <div className="lname">
                            <input type="text" className="form-feild " placeholder="Your last name *" required />
                        </div>
                    </div>
                    <div className="feilds flex justify-between">
                        <div className="email">
                            <input type="text" className="form-feild" placeholder="Your email *" required/>
                        </div>
                        <div className="phone">
                            <input type="text" className="form-feild" placeholder="Your phone *" required/>
                        </div>
                    </div>
                    <div className="msg-feilds">
                        <div className="message">
                            <textarea name="" id="" placeholder="your message for me *" className="form-feild" required></textarea>
                        </div>
                    </div>
                 
                        <div className="btn-inp">
                            <input type="button" value="Send message" className="btn contbtn" />
                        </div>
                
                </form>
                
            </div>
        </div>
    )
}
