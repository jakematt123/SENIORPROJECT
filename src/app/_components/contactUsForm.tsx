"use client"
import {Button} from "./ClientExports"
import React, {useState} from "react"
import { CiPaperplane } from "react-icons/ci";

const ContactUsButton = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendMessage = () => {
        
    }

    return (
        <div>
            <form className="mt-8 space-y-1 border-solid border-2 border-blue-500 rounded">
            <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500" />
            <input type='email' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}
                className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500" />
            <textarea placeholder='Message' value={message} onChange={(e)=> setMessage(e.target.value)}
                className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-blue-500"></textarea>
            <Button onClick={sendMessage} fullWidth ripple={true} variant="gradient" placeholder={undefined} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><CiPaperplane className="mr-2 text-xl text-center" />Send</Button>
            </form>
        </div>
    )
}

export default ContactUsButton;