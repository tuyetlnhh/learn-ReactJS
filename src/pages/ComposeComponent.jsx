import React from 'react'
import Avatar from '../components/Avatar'
import Content from '../components/Content'

// utils
import { formatDate } from '../utils/formatDate'

function ComposeComponent() {
    const date = new Date().toString();
    const imageUrl = "https://placekitten.com/g/64/64";
    const formattedDate = formatDate(date);

    return (
        <>
            <div className='border_type'>
                <Avatar imageUrl={imageUrl}/>
                <Content textContent="Hello Kitty" />
                <Content textContent="I hope you enjoy learning React!" />
                <Content textContent={formattedDate} />
            </div>
        </>
    )
}

export default ComposeComponent