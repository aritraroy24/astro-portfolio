// creating custom slug from the original text
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

// generating the original text from the slugified text
export function deslugify(slug) {
    return slug
        .replace(/-/g, ' ')
        .replace(/(?:^|\s)\S/g, function (match) {
            return match.toUpperCase();
        });
}

// formatting the date
export function formatDate(date) {
    return new Date(date).toLocaleString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
    })
}

// capitalizing first letters of each word of the text
export function capitalizeWords(text) {
    return text.replace(/(?:^|\s)\S/g, function (firstChar) {
        return firstChar.toUpperCase();
    });
}

// formatting blog posts w.r.t. date, draft, future-post and randomization
export function formatBlogPosts(blogs, {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
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

    return filteredPosts;

}