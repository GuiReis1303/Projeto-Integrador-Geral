import React from "react";
import { Link } from "react-router-dom";

const NovoPost = () => {
    require('./NovoPost.css')
    return ( 
        <div className="container">
            <div className="btn-newPost" >
                <Link to="/post" >
                    <button>New Post</button>
                </Link>
            </div>
        </div>
     );
}
 
export default NovoPost;