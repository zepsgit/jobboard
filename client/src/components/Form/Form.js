import useStyles from "./style"
import React, { useState } from "react"
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64"
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
const Form = () => {
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        company: "", title: "", description: "", tags: "", selectedFile: ""
    })
    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData))
    }
    const clear = () => {

    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">Post a Job</Typography>
                <TextField
                    name="company"
                    variant="outlined"
                    label="Company"
                    fullWidth
                    value={postData.company}
                    onChange={(e) => setPostData({...postData,  company: e.target.value })}
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="description"
                    variant="outlined"
                    label="Description"
                    fullWidth
                    value={postData.description}
                    onChange={(e) => setPostData({ ...postData, description: e.target.value })}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
                <FileBase
                    type="file"
                    multiple={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    )
}
export default Form