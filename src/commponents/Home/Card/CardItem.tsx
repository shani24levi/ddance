import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
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
}))

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
        <>
            <Grid item xs={6} md={4} lg={4}>
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

                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {description}
                                </Typography>
                            </CardContent>
                        </Box>
                    </CardActionArea>
                </StyledCard>
            </Grid>
        </>
    )
}

export default CardItem
