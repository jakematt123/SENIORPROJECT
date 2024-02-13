"use client"
/*
    By default NextJS defaults everything to server components, so we need to use this to declare material-tailwind components as a client component.
    material-tailwind components can only ever be used on the client side. However they don't come as "use client" out of the box. So all we're doing is importing the components and exporting them as a client component.

    **Note:**
    Do not directly import from material-tailwind in your components. Always import from this file.
    If a component is not yet added to this file, you can add it by importing it from material-tailwind and exporting it here.


    More info: https://nextjs.org/learn/react-foundations/server-and-client-components
    https://www.youtube.com/watch?v=Qdkg_mrniLk
*/

import { Card, Button } from '@material-tailwind/react';


export { 
    Card, 
    Button,
}