export function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

export function deslugify(slug) {
    return slug
        .replace(/-/g, ' ')
        .replace(/(?:^|\s)\S/g, function (match) {
            return match.toUpperCase();
        });
}
export function formatDate(date) {
    return new Date(date).toLocaleString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
    })
}

export function formatBlogPosts(blogs, {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
} = {}) {

    const filteredPosts = blogs.reduce((acc, blog) => {
        const { pubDate, isDraft } = blog.data;

        // filterOutDrafts if true
        if (filterOutDrafts && isDraft) {
            return acc;
        }

        // filterOutFuturePosts if true
        if (filterOutFuturePosts && new Date(pubDate) > new Date()) {
            return acc;
        }

        // add blog to acc
        acc.push(blog)

        return acc;
    }, [])

    // sortByDate or randomize
    if (sortByDate) {
        filteredPosts.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate))
    } else {
        filteredPosts.sort(() => Math.random() - 0.5)
    }

    // limit if number is passed
    if (typeof limit === "number") {
        return filteredPosts.slice(0, limit);
    }
    return filteredPosts;

}