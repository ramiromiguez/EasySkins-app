import React from 'react'
import { Link } from 'react-router-dom'

const category = [
    {
        category: "knife",
        key: 0
    },
    {
        category: "ak",
        key: 1
    },
    {
        category: "m4a1-s",
        key: 2
    },
    {
        category: "gloves",
        key: 3
    },
    {category: "awp",
        key: 4
    },
    {
        category: "usp-s",
        key: 5
    },
]

export const NavbarItemsCategory = () => {
    return (
        <>
            {
                category.map((element, key) =>
                <Link className="nav-link active navlinks" aria-current="page" to={`/category/${element.category}`}> {`${element.category}`} </Link>)
            }
        </>
    )
}

export default NavbarItemsCategory
