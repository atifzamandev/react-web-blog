import React from 'react';
import Button from './button';

function BlogPosts({blogimage}) {
  return (

  <section className='blogContainer'>
    <div className="postImg">
        <img src={blogimage} alt="" />
    </div>
      <div className="postText">
        <h2>Title of the post</h2>
        <h4>Sub heading of post</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque possimus nemo ut, ipsa quasi dolorem accusantium delectus id, consequuntur alias sint totam error eligendi eum blanditiis voluptas aliquam. Aut, adipisci!</p>
        <Button title = 'Read More' />
    </div>



  </section>


  );
}

export default BlogPosts;
