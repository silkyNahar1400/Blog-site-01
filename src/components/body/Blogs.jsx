import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import BlogCard from './Blog-body';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [numbers, setNumbers] = useState(3);
    const photos  = useContext(MyContext);
    const handelSetNumber = () =>{
        setNumbers(numbers + 3);
    }

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then (data => setBlogs(data.slice(0, numbers)));
     
    }, [numbers])


    let photo =  photos.map(photo => photo = photo.webformatURL )
   
    
    return (
<Container>
    <Row className='g-4' >
    { blogs.map((blog, index) =>   <BlogCard blog={blog} photo = {photo} i= {index} fromPost = {false} />  )}
    </Row>
    <Button variant='primary' size='lg' className='d-block w-100' onClick={()=> handelSetNumber()}  > Load More</Button>

    </Container>
    );
};

export default Blogs;