
import React, { useEffect, useState } from 'react'
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi'

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    )

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light')
        }
    }, [theme])

    return (
        <div>
            {
                theme === 'dark' ? 
                <BiSolidSun className={`text-2xl cursor-pointer`}
                    onClick={() => setTheme('light')} /> :

                    <BiSolidMoon className={`text-2xl cursor-pointer`}
                        onClick={() => setTheme('dark')} />
            }
        </div>
    )
}

export default DarkMode
