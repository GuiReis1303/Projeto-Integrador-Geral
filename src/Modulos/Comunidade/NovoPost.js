import React from "react";
import { Link } from "react-router-dom";

const NovoPost = () => {
    require('./NovoPost.css')
    return ( 
        <div className="container">
            <div className="btn-newPost" >
                <Link to="/CriarPost" >
                    <button>New Post</button>
                </Link>
            </div>
        </div>
     );
}
 
export default NovoPost;