import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import { post } from "../../dummmyData"
export default function Feed(){
    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.Map((P)) => (
                    <post.key
                )}

            </div>

        </div>
    )
}