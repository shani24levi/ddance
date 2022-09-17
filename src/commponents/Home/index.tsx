import React, { useEffect, useState } from 'react'
import { Container, Typography, Stack, Box, Grid } from '@mui/material'
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
    // indexs of the 3 main item -index from the all 7.
    const [currIndex, setCurrIndex] = useState<number>(2) // first index showned in the view from the images array
    const [currEndIndex, setCurrEndIndex] = useState<number>(5) // end index showned in the view from the images array
    // indexs of the all 7 items
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
            setCurrView(Adata.slice(currIndex, currEndIndex))
        }
    }, [])

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(false)
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [error])

    //handel clicked up and dowm btn
    const onUpChange = () => {
        let remove = images[images.length - 1]
        let add = data[startIndex + 1]
        if (currIndex < 1) {
            setError(true)
            return
        } else if (images.find((el) => el.url === add.url)) {
            setCurrIndex(currIndex - 1)
            setCurrEndIndex(currEndIndex - 1)
            setCurrView(images.slice(currIndex - 1, currEndIndex - 1))
            return
        } else if (!(currIndex === 1 || currIndex === 2)) {
            removeDataIntoCache(remove.url)
            addDataIntoCache(add.url)
        }
        //change the index of 3 main elments
        setCurrIndex(currIndex - 1)
        setCurrEndIndex(currEndIndex - 1)
        //change the index of 7 elments
        setStartIndex(startIndex + 1)
        setEndIndex(endIndex - 1)
        setImage(data.slice(startIndex + 1, endIndex - 1))
        setCurrView(images.slice(currIndex - 1, currEndIndex - 1))
    }

    const onDownChange = () => {
        console.log('onDownChange')
        console.log('dkdkd', images, images.length - 1)
        console.log(
            '1',
            currView,
            images,
            currIndex,
            currEndIndex,
            'startIndex',
            startIndex,
            'endIndex',
            endIndex
        )
        let remove = images[0]
        let add = data[endIndex + 1]
        console.log('====================================')
        console.log(currIndex < data.length - 1, currIndex, data.length - 1)
        console.log('====================================')
        if (currIndex > data.length - 1) {
            setError(true)
            return
        }
        if (currIndex !== data.length - 8) {
            console.log(
                'currIndex < data.length - 1',
                currEndIndex,
                currIndex,
                data.length - 1
            )
            removeDataIntoCache(remove.url)
            addDataIntoCache(add.url)
            setCurrIndex(currIndex + 1)
            setCurrEndIndex(currEndIndex + 1)
            setStartIndex(startIndex + 1)
            setEndIndex(endIndex + 1)
            console.log('lldldlldld', startIndex + 1, endIndex + 1)
            setImage(data.slice(startIndex + 1, endIndex + 1))
            setCurrView(data.slice(currIndex + 1, currEndIndex + 1))
        } else if (images.find((el) => el.url === add.url)) {
            console.log('jjjjjjj')
            setCurrIndex(currIndex + 1)
            setCurrEndIndex(currEndIndex + 1)
            setCurrView(images.slice(currIndex + 1, currEndIndex + 1))
            console.log('currView2', currView)
        }
    }

    console.log('2', currView, images, currIndex, currEndIndex)

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

            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={3}
            >
                <CardList
                    currView={currView}
                    onCardClicked={onCardClicked}
                    clicked={clicked}
                />
            </Grid>
        </Container>
    )
}

export default Home
