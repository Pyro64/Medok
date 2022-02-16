import React from 'react'
import Blog from '../Blog/Blog'
import Title from '../Title/Title'

export default function Benefit(props) {
    return (
        <div>
            <Title text="Чем наш сервис может быть вам полезен?" />
            <Blog blogData={props.blogData} />
        </div>
    )
}
