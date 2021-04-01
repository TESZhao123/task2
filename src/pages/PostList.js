// PostList.js
import React from "react";
import {useSelector, useDispatch} from "react-redux";

import Post from "../components/Post";
import {actionCreators as postActions} from "../redux/modules/post";

const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);//post list 가져오기
    const user_info = useSelector((state) => state.user.user);

    React.useEffect(() => {

        if(post_list.length === 0){
             dispatch(postActions.getPostFB());
        }
       
    }, []);

    return (
        <React.Fragment>
            {/* <Post/> */}
            {post_list.map((p, idx) => {//p는 게시글 수
                if(p.user_info.user_id === user_info?.uid){//post 리덕스에 정보주기
                    return <Post key={p.id} {...p} is_me/>;    
                }else{
                    return <Post key={p.id} {...p} />;
                }
                
            })}
        </React.Fragment>
    )
}

export default PostList;

