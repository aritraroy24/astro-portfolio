// Helpers for turning `start` / `end` month strings ("YYYY-MM") into the labels
// the timeline renders. Keeping the raw months in the data and deriving display
// text here means entries can be sorted and emitted as structured data without
// re-parsing prose like "Sep, 2023 - Present".

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "YYYY-MM" -> absolute month count, so ranges can be compared. */
export const toMonths = (ym) => {
    const [year, month] = ym.split('-').map(Number);
    return year * 12 + (month - 1);
};

/** "2023-09" -> "Sep 2023". */
export const monthLabel = (ym) => {
    const [year, month] = ym.split('-').map(Number);
    return `${MONTH_NAMES[month - 1]} ${year}`;
};

/** The two ends of a range as separate labels. An absent `end` means ongoing. */
export const rangeParts = ({ start, end }) => ({
    from: monthLabel(start),
    to: end ? monthLabel(end) : 'Present'
});

/** Most recent first, matching the order the sections were previously hand-ordered in. */
export const byRecency = (a, b) =>
    (b.end ? toMonths(b.end) : Infinity) - (a.end ? toMonths(a.end) : Infinity) ||
    toMonths(b.start) - toMonths(a.start);
