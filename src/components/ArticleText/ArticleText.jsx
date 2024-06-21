import React from 'react'
import "./ArticleText.css"
import { Container } from 'react-bootstrap'

export default function ArticleText({title, text1 ,text2}) {
    return (
        <Container className='py-5'>
            <h2>{title}</h2>
            <p>{text1}</p>
            <p>{text2}</p>
        </Container>
    )
}
