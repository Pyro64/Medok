import React from 'react'
import style from './Blog.module.scss'
import Blogitem from './BlogItem/BlogItem'

export default function Blog(props) {
    let state = props.blogPage;
    let step = state.step;
    let pageSize = state.pageSize;
    let isFull = state.isFull;

    let blogElements = state.blogData.map(blog =>
        <Blogitem
            id={blog.id}
            img={blog.img}
            title={blog.title}
            text={blog.text}
            avatar={blog.avatar}
            name={blog.name}
            time={blog.time}
            read={blog.read}
            key={blog.id}
        />
    ).reverse()
    let page = blogElements.slice(0, pageSize)
    let showMore = () => {
        let value = pageSize + step;
        props.addPage(value)
        if (value >= blogElements.length) {
            props.isFull();
        }
    }
    function ShowMore(props) {
        if (props.isFull) {
            return null
        } else {
            return <button className='btn' onClick={showMore}>Показать еще</button>
        }
    }
    return (
        <div className={style.container}>
            <div className={style.block}>
                {page}
            </div>
            <ShowMore isFull={isFull} />
        </div>
    )
}
