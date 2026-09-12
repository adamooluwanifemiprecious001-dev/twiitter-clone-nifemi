import "./sidebar.css"
import{
    RssFeed,
    Chat,
    playCircleFilledOutLined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
    PlayCircleFilledOutlined,
} from "@material-ui/icons"
import {users} from "../../dummyData"
import { CloseFriend  } from "../closeFriend/CloseFriend"
export default function sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListiItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText"> Feed</span>

                    </li>
                    <li  className="sidebarListen">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText"> Chat</span>
                    </li>
                    <li className="sidebarListen">
                        <PlayCircleFilledOutlined  className="sidebarIcon"/>
                         <span className="sidebarListItemText"> Videos</span>
                    </li>
                    <li className="sidebarListen">
                        <Group  className="sidebarIcon"/>
                         <span className="sidebarListItemText"> Group</span>
                    </li>
                    <li className="sidebarListen">
                        <Bookmark  className="sidebarIcon"/>
                         <span className="sidebarListItemText"> Bookmark</span>
                    </li>
                    <li className="sidebarListen">
                        <HelpOutline  className="sidebarIcon"/>
                         <span className="sidebarListItemText"> Question</span>
                    </li>
                    <li className="sidebarListen">
                        <WorkOutline  className="sidebarIcon"/>
                         <span className="sidebarListItemText"> Jobs</span>
                    </li>
                    <li className="sidebarListen">
                        <Event  className="sidebarIcon"/>
                         <span className="sidebarListItemText"> Event</span>
                    </li>
                    <li className="sidebarListen">
                        <School  className="sidebarIcon"/>
                         <span className="sidebarListItemText"> coursea</span>
                    </li>
                </ul>
                <button className="sidebarButton">show More</button>
                <hr  className="sidebarHr"/>
                {users.map((u)) => ((
                     < CloseFriend key={ u.id}  user={u}/>
                ))};
            </div>
        </div>
    )
}