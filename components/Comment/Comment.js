import React from "react";
import { Link } from "react-router-dom";
import { CardContent, InputAdornment, OutlinedInput, Avatar } from '@mui/material';

function Comment(props) {
    const { text, userId, userName } = props;

    const commentStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
    };

    const smallAvatarStyle = {
        width: 32,
        height: 32,
    };

    const linkStyle = {
        textDecoration: "none",
        boxShadow: "none",
        color: "white"
    };

    return (
        <CardContent style={commentStyle}>
            <OutlinedInput
                disabled
                id="outlined-adornment-amount"
                multiline
                inputProps={{ maxLength: 25 }}
                fullWidth
                value={text}
                startAdornment={
                    <InputAdornment position="start">
                        <Link style={linkStyle} to={{ pathname: '/users/' + userId }}>
                            <Avatar aria-label="recipe" style={smallAvatarStyle}>
                                {userName &&userName.charAt(0).toUpperCase()}
                            </Avatar>
                        </Link>
                    </InputAdornment>
                }
                style={{ color: "black", backgroundColor: 'white' }}
            ></OutlinedInput>
        </CardContent>
    );
}

export default Comment;
