import React from 'react'
import BlogContainer from '../Blog/BlogContainer'
import Title from '../Title/Title'

export default function Benefit(props) {
    return (
        <div>
            <Title text="Чем наш сервис может быть вам полезен?" />
            <BlogContainer />
        </div>
    )
}
