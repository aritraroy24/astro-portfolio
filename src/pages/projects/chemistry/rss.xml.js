// package import
import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import { marked } from 'marked';

// function import
import { getCollection } from 'astro:content';
import { formatPosts } from '@js/utils'

export async function get(context) {
    const allChemistryProjects = await getCollection("chemistry");
    const formattedChemistryProjects = formatPosts(allChemistryProjects, {
        filterOutFuturePosts: false,
    });
    return rss({
        xmlns: { atom: "http://www.w3.org/2005/Atom" },
        title: 'Aritra Roy | Chemistry Projects',
        description: 'I\'m a Theoretical Computational Chemist & Algorithm Enthusiast from India. If you subscribe to this RSS feed you will receive updates and summaries of my new projects and publications on computational chemistry.',
        site: context.site,
        author: "Aritra Roy",
        commentsUrl: "https://github.com/aritraroy24/astro-portfolio-comments/discussions",
        source: {
            title: "Aritra Roy | Chemistry Project RSS Feed",
            url: "https://aritraroy.live/projects/chemistry/rss.xml"
        },
        items: formattedChemistryProjects.map((project) => ({
            title: project.data.title,
            description: project.data.description,
            pubDate: project.data.pubDate,
            link: `/projects/chemistry/${project.slug}`,
            categories: ["Computational", "Chemistry", "Research", "PhD", "Post-doc", "CompChem", "Publication", "News", "Update"],
            content: `${[
                sanitizeHtml(marked.parse(project.body))
                + sanitizeHtml(marked.parse("Duration: " + project.data.duration))
                + sanitizeHtml(marked.parse("Tags: " + project.data.tags))
                + sanitizeHtml(marked.parse("Status: " + project.data.status))
            ]}`,
        })),
        customData: `<atom:link href="https://aritraroy.live/projects/chemistry/rss.xml" rel="self" type="application/rss+xml" />`,
        stylesheet: '/rss/chemistry-project-rss-styles.xsl',
    });
}