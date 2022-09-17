import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ErrorAlert: React.FC = () => {
    useEffect(() => {
        notify()
    }, [])

    const notify = () =>
        toast.error('You have reached the end of the list', {
            autoClose: 10000,
            position: toast.POSITION.BOTTOM_RIGHT,
        })

    return <ToastContainer />
}

export default ErrorAlert
