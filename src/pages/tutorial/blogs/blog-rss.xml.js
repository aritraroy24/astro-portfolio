import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import { marked } from 'marked';
import { formatBlogPosts } from '../../../assets/js/utils'

export async function get(context) {
    const allBlogs = await getCollection("blogs");
    const formattedBlogs = formatBlogPosts(allBlogs);
    return rss({
        xmlns: { atom: "http://www.w3.org/2005/Atom" },
        title: 'Aritra Roy | Blogs',
        description: 'I\'m a Theoretical Computational Chemist & Algorithm Enthusiast from India. If you subscribe to this RSS feed you will receive updates and summaries of my new posts about computational chemistry, programming and stuff.',
        site: context.site,
        author: "Aritra Roy",
        commentsUrl: "https://github.com/aritraroy24/astro-portfolio-comments/discussions",
        source: {
            title: "Aritra Roy | Blog RSS Feed",
            url: "https://valid-rss-hosted-styled.netlify.app/tutorial/blogs/blog-rss.xml"
        },
        items: formattedBlogs.map((blog) => ({
            title: blog.data.title,
            description: blog.data.description,
            pubDate: blog.data.pubDate,
            link: `/tutorial/blogs/${blog.slug}`,
            categories: ["Computational", "Chemistry", "Research", "PhD", "Post-doc", "CompChem", "Programming", "Coding", "Technology", "Update"],
            content: `${[sanitizeHtml(marked.parse(blog.body)) + sanitizeHtml(marked.parse("Subtitle: " + blog.data.subtitle)) + sanitizeHtml(marked.parse("Duration: " + blog.data.duration)) + sanitizeHtml(marked.parse("Tags: " + blog.data.tags))]}`,
        })),
        customData: `<atom:link href="https://valid-rss-hosted-styled.netlify.app/tutorial/blogs/blog-rss.xml" rel="self" type="application/rss+xml" />`,
        stylesheet: '/rss/blog-rss-styles.xsl',
    });
}