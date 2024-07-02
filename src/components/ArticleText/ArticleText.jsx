import React from 'react'
import "./ArticleText.css"

export default function ArticleText({prop}) {
    return (
        <section className='DJ-articleText'>
            <h2>{prop.title}</h2>
            <p>{prop.text1}</p>
            <p>{prop.text2}</p>
        </section>
    )
}
