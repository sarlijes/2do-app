import { AppBar, Link } from "@mui/material"
import { Component } from "react"
import { css } from "@emotion/react"

export default class Appbar extends Component {
    render() {
        return <AppBar position="static" sx={{ p: 1 }}>
            <Link href="/" variant="h4" css={css`text-decoration: none; color: white;`}>Todo app</Link>
        </AppBar>
    }
}
