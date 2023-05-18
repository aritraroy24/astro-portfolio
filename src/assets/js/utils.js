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

    // sortByDate
    if (sortByDate) {
        filteredPosts.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate))
    }

    // limit if number is passed
    if (typeof limit === "number") {
        return filteredPosts.slice(0, limit);
    }
    return filteredPosts;

}