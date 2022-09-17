import React from 'react'
import { styled } from '@mui/material/styles'

const ImgStayle = styled('img')`
    display: flex;
    width: 100%;
    height: 180px;
    object-fit: cover;
    object-position: center center;
    background-color: #131313;
    border-radius: 10px;
    position: relative;

    @media screen and (max-width: 600px) {
        .img {
            height: 250px;
        }
    }
    @media screen and (max-width: 420px) {
        .img {
            height: 200px;
        }
    }
`

function AsyncImage(props: any) {
    const [loadedSrc, setLoadedSrc] = React.useState(null)
    React.useEffect(() => {
        setLoadedSrc(null)
        if (props.src) {
            const handleLoad = () => {
                setLoadedSrc(props.src)
            }
            const image = new Image()
            image.addEventListener('load', handleLoad)
            image.src = props.src
            return () => {
                image.removeEventListener('load', handleLoad)
            }
        }
    }, [props.src])
    if (loadedSrc === props.src) {
        return <ImgStayle {...props} />
    }
    return null
}

export default AsyncImage
