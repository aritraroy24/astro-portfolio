// package import
import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import { marked } from 'marked';

// function import
import { getCollection } from 'astro:content';
import { formatPosts } from '@js/utils'

export async function GET(context) {
    const allProgrammingProjects = await getCollection("programming");
    const formattedProgrammingProjects = formatPosts(allProgrammingProjects, {
        filterOutFuturePosts: false,
    });
    const currentDate = new Date();
    return rss({
        xmlns: { atom: "http://www.w3.org/2005/Atom" },
        title: 'Aritra Roy | Programming Projects',
        description: 'I\'m a Theoretical Computational Chemist & Algorithm Enthusiast from India. If you subscribe to this RSS feed you will receive updates and summaries of my new projects on programming.',
        site: context.site,
        author: "Aritra Roy",
        commentsUrl: "https://github.com/aritraroy24/astro-portfolio-comments/discussions",
        source: {
            title: "Aritra Roy | Programming Project RSS Feed",
            url: "https://aritraroy.live/projects/programming/rss.xml"
        },
        items: formattedProgrammingProjects.map((project) => ({
            title: project.data.title,
            description: project.data.description,
            pubDate: currentDate,
            link: `/projects/programming/${project.slug}`,
            categories: ["Computational", "Programming", "Research", "PhD", "Post-doc", "CompChem", "Publication", "News", "Update"],
            content: `${[
                sanitizeHtml(marked.parse(project.body))
                + sanitizeHtml(marked.parse("Duration: " + project.data.duration))
                + sanitizeHtml(marked.parse("Tags: " + project.data.tags))
                + sanitizeHtml(marked.parse("Status: " + project.data.status))
            ]}`,
        })),
        customData: `<atom:link href="https://aritraroy.live/projects/programming/rss.xml" rel="self" type="application/rss+xml" />`,
        stylesheet: '/rss/coding-project-rss-styles.xsl',
    });
}