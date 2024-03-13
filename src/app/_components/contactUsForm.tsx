"use client"
import { Button } from "./ClientExports";
import React, { useState } from "react";
import { CiPaperplane } from "react-icons/ci";
import { Client } from "../api/Client";

const ContactUsButton: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [IamABot, setIamABot] = useState(""); // This is a honeypot field to prevent spam. If it's filled out, the form won't submit. [TODO: Implement this.]
    const [congrats, setCongrats] = useState(false);
    

    async function CreateDatabaseButCooler(name: string, email: string, message: string, honeypot: string): Promise<void> {
        if(honeypot.length) return console.log("You are a bot") // If the honeypot is filled out, it's a bot. Don't submit the form.;
        const newFeedback = Client.contactRouter.createContactForm.mutate({ name, email, message })
            .then(() => console.log("Form submitted successfully!"))
            .catch((e) => console.error(e));

        await newFeedback;

    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                void CreateDatabaseButCooler(name, email, message, IamABot); setCongrats(true) 
            }} className="mt-8 space-y-1 border-solid border-2 border-blue-500 rounded">
                <input 
                    type='text' 
                    placeholder='Name' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500" 
                />
                <input 
                    type='email' 
                    placeholder='Email' 
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)}
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500" 
                />
                <textarea 
                    placeholder='Message' 
                    value={message} 
                    onChange={(e)=> setMessage(e.target.value)}
                    className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-blue-500"
                ></textarea>
                <input
                    placeholder="lol"
                    value={IamABot}
                    onChange={(e) => setIamABot(e.target.value)}
                    className="hidden" />
                <Button 
                    type="submit" 
                    fullWidth
                    ripple={true} 
                    variant="gradient"
                    placeholder={undefined} 
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    <CiPaperplane className="mr-2 text-xl text-center" />Send
                </Button>
            </form>
            {
                congrats && <div className="mt-4 text-center text-green-500">
                    <p>{`Thank you for reaching out ${name}. We will get back to you as soon as possible.`}</p>
                </div>
            }
        </div>
    );
}

export default ContactUsButton;
