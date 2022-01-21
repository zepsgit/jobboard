import Post from "./Post/Post";
import useStyle from "./style"
import { useSelector } from "react-redux";
const Posts=()=>{
    const classes=useStyle()
    const posts=useSelector((state)=>state.posts)
    return (
        <div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
        
    )
}
export default Posts