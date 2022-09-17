import React from 'react'

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
        return <img height="100" {...props} />
    }
    return null
}

export default AsyncImage
