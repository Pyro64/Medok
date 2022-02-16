import React from 'react'
import style from './Blog.module.scss'
import Blogitem from './BlogItem/BlogItem'

export default function Blog(props) {
    let blogElements = props.blogData.map(blog =>
        <Blogitem
            id={blog.id}
            img={blog.img}
            title={blog.title}
            text={blog.text}
            avatar={blog.avatar}
            name={blog.name}
            time={blog.time}
            read={blog.read}
        />
    )
    return (
        <div className={style.container}>
            {blogElements}
        </div>
    )
}
