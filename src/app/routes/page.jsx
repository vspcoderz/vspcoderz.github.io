import Link from 'next/link'
import React from 'react'


const Path = (props) => {
    return (
        <Link className={`hover:text-blue-400 cursor-pointer ${props.className}`} href={props.href}>
            <span className="bg-zinc-700 rounded-md p-['1px'] w-min text-zinc-300">

                {props.href}
            </span>

            ({props.name}) </Link>

    )
}

const page = () => {
    return (
        <div className='bg-zinc-200 text-zinc-900 min-h-screen w-full font-space-mono p-16'>
            <h1 className='text-lg sm:text-2xl md:text-4xl text-center'>Some Project / Tools</h1>
            <pre>
                <Path href="/" name="Portfolio" />
                <br />
                <Path href="/api/user" className="pl-4" name="Fake User" />

            </pre>
        </div>
    )
}

export default page