'use client'
import React from "react"
import { Button } from "@material-tailwind/react"

const Store: React.FC = () => {

    const buttonPress = () => {
        alert("Button is pressed")
    }

    return (
        <div>
            <h1>Hello World</h1>
            <button className="border 2px solid green" onClick={buttonPress}>Wow</button>
            <br/>
            <Button fullWidth className="rounded-full" color="amber" loading={true} placeholder={undefined}>Loading</Button>
        </div>
    )
}

export default Store