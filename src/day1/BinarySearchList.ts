export default function bs_lists(haystack: number[], needle: number): boolean { 
    // Start with the "lords loop" - The Primagean 😂

    let lo = 0; 
    let hi = haystack.length;
    do {
        // Find the mid point
        // Math.floor() rounds down to the nearest integer less than or equal to another number.
        // const m equation prevents the integer overflow problem.
        const m = Math.floor(lo + (hi - lo) / 2)
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo < hi) ;
    return false;
}