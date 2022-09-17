import * as React from 'react'
import { IconButton } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const ScrollBtn = (props: any) => {
    const { type, onUpChange, onDownChange } = props

    return (
        <IconButton
            onClick={type === 'up' ? onUpChange : onDownChange}
            aria-label="scroll"
            size="large"
            color="secondary"
        >
            {type === 'up' && <KeyboardArrowUpIcon fontSize="large" />}
            {type === 'down' && <KeyboardArrowDownIcon fontSize="large" />}
        </IconButton>
    )
}

export default ScrollBtn
