import React from 'react'
import './Section.css'

export default function ({title, content, isLast}) {
    return (
        <section className={`section${isLast?" section-last":""}`}>
            <h2 className="section--title">{title}</h2>
            <p className="section--content">{content}</p>
        </section>
    )
}