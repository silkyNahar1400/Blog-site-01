import React from 'react';
import Blogs from './Blogs';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const data = [
    {
        id: 1,
        title: 'Covid 19 Outbreak',
        body: "amet consectetur adipisicing elit. Ex, fugiat accusantium ducimus asperiores distinctio temporibus reprehenderit ipsa sed dicta nulla rem, alias deserunt vitae veniam, recusandae unde corporis dolorem vero!",
        img: "https://images.unsplash.com/photo-1616101746997-66ec55fa004f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y292aWR8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 2,
        title: 'Mysteries Wild Jungle',
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nobis vero veniam et ratione dolores atque id facilis eum velit explicabo, at eius vitae illum dicta ex inventore est? Veritatis.",
    img: "https://plus.unsplash.com/premium_photo-1687428554441-eaf342557fc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 3,
        title: 'Deep Under The Ocean',
        body:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia quo veritatis incidunt architecto deserunt earum accusantium, quidem, commodi in, impedit consequatur quam hic doloribus totam? Dolores deleniti esse neque.",
        img: "https://images.unsplash.com/photo-1683009427666-340595e57e43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8b2NlYW58ZW58MHx8MHx8fDA%3D"
    }
]
const MainBody = () => {
    return (
        <Row className='p-3 gx-4' >
            <Col md={10} >
                <Blogs />
            </Col >
           
            <Col md={2} className='mt-5 pt-5'>
            <h2 className='border-top border-bottom text-center py-1 mt-3' > Most Popular </h2>
            {data.map(data => { return(

<Card className='border-0'> 
<Card.Img variant="top" src= {data.img} />
<Card.Body>
  <Card.Title> {data.title} </Card.Title>
  <Card.Text>
  <p className='text-dark' >
      {data.body.slice(0, 100) + "..." }  <Button variant="outline-dark" size='sm' className='  m-2 d-inline'>Read More</Button>
    </p>
  </Card.Text>
</Card.Body>
</Card>
    )})}  
            </Col>
        </Row>
    );
};

export default MainBody;