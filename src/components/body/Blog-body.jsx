import React from 'react';
import { Col, ToastBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
    const {title, body, id} = props.blog;
    const index = props.i;
    const photo = props.photo[index];
    const fromPost = props.fromPost;

    return (
        <Col md={4}>
    <Card className='border-0' >
      <Card.Img variant="top" src= {photo} />
      <Card.Body>
        <Card.Title> <h5>{title}  </h5> </Card.Title>
        <Card.Text>
          <p className='text-dark' >
           { fromPost? body :  body.slice(0, 80) + "..." } { fromPost ? null : <Link className=' text-decoration-none ' to = {`/post/${id}`} ><Button variant="outline-dark" size='sm' className=' text-decoration-none m-2 d-inline'>Read More</Button></Link>}
          </p>
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
    );
};

export default BlogCard;