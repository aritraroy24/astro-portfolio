import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import { marked } from 'marked';
import { formatBlogPosts } from '../../../assets/js/utils'

export async function get(context) {
    const allBlogs = await getCollection("blogs");
    const formattedBlogs = formatBlogPosts(allBlogs);
    return rss({
        title: 'Aritra Roy | Blogs',
        description: 'I\'m a Theoretical Computational Chemist & Algorithm Enthusiast from India. If you subscribe to this RSS feed you will receive updates and summaries of my new posts about computational chemistry, programming and stuff.',
        site: context.site,
        items: formattedBlogs.map((blog) => ({
            title: blog.data.title,
            pubDate: blog.data.pubDate,
            link: `/tutorial/blogs/${blog.slug}`,
            content: sanitizeHtml(marked.parse(blog.body)),
            description: blog.data.description,
            // subtitle: blog.data.subtitle,
            // duration: blog.data.duration,
            // cover: blog.data.cover,
            // tags: blog.data.tags,
        })),
        stylesheet: '/rss/styles.xsl',
    });
}