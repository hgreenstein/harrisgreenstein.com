import React from 'react';
import './blog.scss';
import BlogArticleItem from './BlogArticleCard.jsx';
import DalleCoverPhoto from './assets/dalleCoverPhoto.png';
function Landing() {
    const articles = [
        {
            title: 'How Coders Will Co-Program With AI',
            summary: "   This article explores the future of programming alongside AI, emphasizing a collaborative approach where coders and artificial intelligence systems enhance each other's capabilities. It introduces the innovative \“//py\” mode, designed for seamless integration of natural language and coding, and discusses the transformative impact of Nova Mode on ChatGPT's functionality. The piece highlights how these advancements will enable programmers to express complex coding logic in simpler terms, revolutionizing the way we interact with coding languages. ",
            image: DalleCoverPhoto,
            link: "/blog/how_will_coders_co_program_with_ai",
        },
    ];
    return (
        <section id="landing">
            <h1 className="blog-title">
                Articles
            </h1>
            {articles.map((article, index) => (
                <BlogArticleItem
                    key={index}
                    title={article.title}
                    summary={article.summary}
                    image={article.image}
                    link={article.link}
                />
            ))}
        </section>
    );
}
export default Landing;
