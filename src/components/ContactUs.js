import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebaseDB from "./firebase";

export default function App() {
    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        profession: "",
        message: "",
    });

    const { name, email, subject, profession, message } = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !profession || !message) {
            toast.error("Please provide value in each input field");
        } else {
            firebaseDB.ref("contacts").push(state);
            setState({ name: "", email: "", subject: "", profession: "", message: "" });
            toast.success("Form Submitted Successfully");
        }
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    return (
        <div>
            <ToastContainer position="top-center" />
            <form
                id="contactForm"
                className="contactForm"
                onSubmit={handleSubmit}
            >
                <div className="input-box">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleInputChange}
                        value={name}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        value={email}
                    />
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        onChange={handleInputChange}
                        value={subject}
                    />
                </div>
                <div className="radio">
                <div className="label">
                    <h1>Profession</h1>
                </div>
                    <div>
                        <h3>Student</h3>
                        <input
                            type="radio"
                            name="profession"
                            onChange={handleInputChange}
                            value="student"
                        />
                    </div>
                    <div>
                        <h3>Professional</h3>
                        <input
                            type="radio"
                            name="profession"
                            onChange={handleInputChange}
                            value="Professional"
                        />
                    </div>
                </div>
                <div className="input-box">
                    <textarea
                        type="text"
                        name="message"
                        placeholder="Message"
                        cols="30"
                        rows="10"
                        onChange={handleInputChange}
                        value={message}
                    ></textarea>
                </div>
                <div className="btn">
                    <input
                        type="submit"
                        value="Send Message"
                    />
                </div>
            </form>
        </div>
    )
}
