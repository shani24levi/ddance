import React, { useEffect, useState } from 'react'
import { Container, Typography, Stack, Button, Grid } from '@mui/material'
import data from '../../data/index.json'
import isEmpty from '../../helpers/isEmpty'
import {
    initallDataIntoCache,
    addDataIntoCache,
    removeDataIntoCache,
} from '../../helpers/ceche'
import CardList from './Card/CardList'
import ScrollBtn from '../ScrollBtn'
import ErrorAlert from '../Alerts/ErrorAlert'

export interface IState {
    image: {
        description: string
        url: string
    }[]
}

const Home = () => {
    const [images, setImage] = useState<IState['image']>([]) // all 7 items
    const [currView, setCurrView] = useState<IState['image']>([]) // 3 main items
    const [currIndex, setCurrIndex] = useState<number>(2) // first index showned in the view from the images array
    const [currEndIndex, setCurrEndIndex] = useState<number>(5) // end index showned in the view from the images array

    const [startIndex, setStartIndex] = useState<number>(0)
    const [endIndex, setEndIndex] = useState<number>(7)
    const [error, setError] = useState<Boolean>(false)

    //handels the click item elemnt
    // need to set it in the father commponent for the use of both childs components
    const [clicked, setClicked] = React.useState<String>('')

    const onCardClicked = (url: string) => {
      //case clicked not in the main view then clear clicked element
        if (!isEmpty(clicked) && currView.find((el) => el.url !== clicked))
            setClicked('')
        setClicked(url)
    }

    useEffect(() => {
        //set initial states when commpnent is called
        if (!isEmpty(data) && isEmpty(currView)) {
            let Adata = data.filter((el, i) => i >= startIndex && i <= endIndex)
            let Acache = Adata.map((el) => el.url)

            setImage(Adata)
            initallDataIntoCache(Acache) //set all 7 items in cache storag

            //Adata.slice(2, 5)
            setCurrView(Adata.slice(currIndex, currEndIndex))
            // console.log('Cdata', Cdata)
        }
    }, [])

    //handel clicked up and dowm btn
    const onUpChange = () => {
        console.log('up', images, currIndex, currEndIndex)
        console.log('dkdkd', images, images.length - 1)
        let remove = images[images.length - 1]
        let add = data[startIndex + 1]
        if (currIndex < 0) {
            setError(true)
            return
        } else if (images.find((el) => el.url === add.url)) {
            setCurrIndex((currIndex) => currIndex - 1)
            setCurrEndIndex((currEndIndex) => currEndIndex - 1)
            setCurrView(images.slice(currIndex, currEndIndex))
            return
        } else if (!(currIndex === 1 || currIndex === 2)) {
            removeDataIntoCache(remove.url)
            addDataIntoCache(add.url)
        }
        setCurrIndex((currIndex) => currIndex - 1)
        setCurrEndIndex((currEndIndex) => currEndIndex - 1)
        setCurrView(images.slice(currIndex, currEndIndex))
    }

    const onDownChange = () => {
        console.log('onDownChange')
        console.log('dkdkd', images, images.length - 1)
        let remove = images[0]
        let add = data[endIndex + 1]
        if (currIndex < data.length - 1) {
            setError(true)
            return
        }
        removeDataIntoCache(remove.url)
        addDataIntoCache(add.url)
        setCurrIndex((currIndex) => currIndex + 1)
        setCurrEndIndex((currEndIndex) => currEndIndex + 1)
        setCurrView(images.slice(currIndex, currEndIndex))
    }

    return (
        <Container fixed>
            {error && <ErrorAlert />}
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt={3}
                mb={1}
            >
                <Typography variant="h4" gutterBottom>
                    React Images Scroller
                </Typography>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mt={3}
                    mb={1}
                >
                    <ScrollBtn type="up" onUpChange={onUpChange} />
                    <ScrollBtn type="down" onDownChange={onDownChange} />
                </Stack>
            </Stack>

            <CardList
                currView={currView}
                onCardClicked={onCardClicked}
                clicked={clicked}
            />
        </Container>
    )
}

export default Home
