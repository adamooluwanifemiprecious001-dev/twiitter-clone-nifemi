import "./profile.css";
import Sidebar from "../../component/sidebar/Sidebar";
import Topbar from "../../component/topbar/Topbar"
import Feed from "../../component/feed/Feed"
import Rightbar from "../../component/righbar/Rightbar";

            export default function profile() {
                return (
                    <>
                    <Topbar/>
                    <div className="profileRight">
                    <Sidebar/>
                    <div className="profileRightTop">
                    <div className="profileCover">
                    <img
                    className="profileCover"
                    src="assest/post/3.jpeg"
                    alt=""
                    />
                    <img
                    className="profileUserImg"
                    src="asset/person/7.jpeg"
                    alt=""
                    />
                    </div>
                    <div className="profileInfo">
                    <h4 className="profileInfoName">jane doe</h4>
                    <span className="profileInfoName">
                    hello my friends!
                    </span>
                    </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                    </div>
                    </>
                )
            }

            