import React from 'react';
import './blog.scss'; 

const BlogArticleItem = ({ title, summary, image, link }) => {
  return (
    <a href="/blog/how_will_coders_co_program_with_ai">
    <div className="blog-article-item" href={link}>
      <div className="blog-article-image">
        <img src={image} alt={title} />
      </div>
      <div className="blog-article-content">
        <h3>{title}</h3>
        <p><em>{summary} <a href={link}>Read more here</a></em></p>
      </div>
    </div>
    </a>
  );
};

export default BlogArticleItem;
