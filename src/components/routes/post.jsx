import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../App';
import BlogCard from '../body/Blog-body';
import CommentBody from '../body/CommentBody';

const Post = () => {

    const photos  = useContext(MyContext);
let id = useParams();
id = id.id;

let n =parseInt(id);

    const [post, setPost] = useState({});
    useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
},[])

const [comments, setComments] = useState([]);
    useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(res => res.json())
      .then(data => setComments(data))
},[])

let photo =  photos.map(photo => photo = photo.webformatURL )
    return (

        <div className='d-flex justify-content-center flex-column align-items-center' >
        <BlogCard  blog= {post} photo = {photo} i= {n-1} fromPost = {true} /> 
        <h2 className='' >Comments</h2>
        <div className=''  >
        {comments.map(comment => <CommentBody comment={comment} key={comment.id} />)}
        </div>

        </div>
    );
};

export default Post;