import useStyles from "./style"
import React, { useState } from "react"
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64"
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
const Form = () => {
    
    const [postData, setPostData] = useState({
        company: "", title: "", description: "", tags: "", selectedFile: ""
    })
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handle trigered")
        dispatch(createPost(postData))
    }
    const clear = () => {

    }
    return (
        <form onSubmit={handleSubmit}>

        <label>
            Company
            <input type="text" 
            value={postData.company}
            onChange={(e) => setPostData({ ...postData, company: e.target.value })}
            />
        </label>
        <br/>
        <label>
            Title
            <input type="text" 
            value={postData.title}
            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
            />
        </label>
        <br/>
        <label>
            Description
            <input type="text" 
            value={postData.description}
            onChange={(e) => setPostData({ ...postData, description: e.target.value })}
            />
        </label>
        <br/>
        <label>
            Tags
            <input type="text" 
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
            />
        </label>
        <br/>
        <label>
            Upload file
            <input type="file"
            onChange={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
            />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    )
}
export default Form