import Post from "./Post/Post";
import useStyle from "./style"
const Posts=()=>{
    const classes=useStyle()
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