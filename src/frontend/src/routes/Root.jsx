import { Component } from "react"
import {  Box, Button, Link } from "@mui/material"

export default class Root extends Component {
    render() {
        return <Box margin="normal" sx={{ m: 1 }}>
                <Button variant="contained" onClick={() => alert('Hello world')}>Hello world</Button>
            </Box>
    }
}
