import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import AsyncImage from '../../AsyncImage'

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignitems: 'center',
    marginBottom: '10px',
    padding: '5px !important',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    border: '2px solid rgba(255, 255, 255, 0.568)',
    borderRadius: '7px',
    boxShadow: '5px 5px 25px black',
    animation: 'fadeInMove 1s ease',
    backgroundPosition: 'top right',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05) !important',
        opacity: 0.85,
    },
    [theme.breakpoints.down('sm')]: {
        padding: '10px !important',
    },
    '&.MuiCardMedia-img': {
        width: '150px',
        minHeight: '150px',
        height: '100%',
        objectFit: 'cover',
    },
    '&.MuiCardContent-root': {
        paddingBottom: '0px !important',
        color: '#fff',
    },
}))

const StyledImage = styled('img')`
    display: flex;
    width: 50%;
    height: 50%;
    object-fit: cover;
    object-position: center center;
    background-color: #131313;
    border-radius: 10px;
`
interface IProps {
    url: string
    description: string
    onCardClicked: Function
    clicked: String
}

const CardItem: React.FC<IProps> = ({
    description,
    url,
    onCardClicked,
    clicked,
}) => {
    return (
        <StyledCard
            elevation={6}
            onClick={() => {
                onCardClicked(url)
            }}
            style={{
                background:
                    clicked === url
                        ? 'linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca)'
                        : 'none',
            }}
        >
            <CardActionArea>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <AsyncImage src={url} />

                    {/* <CardMedia
                        component="img"
                        height="100"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjY-235jkJPa4ooe8-EC5QsZkTBCHxFnEuKd8eQkuhvEv5x4mSq27y6iImzsQ_XDW4zU&usqp=CAU"
                        alt="green iguana"
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {description}
                        </Typography>
                    </CardContent>
                </Box>
            </CardActionArea>
            {/* </ButtonBase> */}
        </StyledCard>
    )
}

export default CardItem
