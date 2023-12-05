import slugify from "slugify";

/**
 * Generate slugs from a given name.
 * 
 * @param name The name to generate slugs from.
 * @returns The generated slugs.
 */
export async function generateSlugs(name: string): Promise<string> {
    return slugify(name, {
        replacement: '_',
        remove: /[*+~.,()'"!#?:@/-]/g,
        lower: true,
    })
}

/**
 * Calculate the release decade for a given release year.
 * @param releaseYear - The release year.
 * @returns An array of strings indicating whether the release year falls within each decade from the 1950s to the 2020s.
 */
export async function calculateReleaseDecade(releaseYear: number): Promise<string[]> {
    const is1950s = (releaseYear >= 1950 && releaseYear < 1960) ? 'true' : 'false';
    const is1960s = (releaseYear >= 1960 && releaseYear < 1970) ? 'true' : 'false';
    const is1970s = (releaseYear >= 1970 && releaseYear < 1980) ? 'true' : 'false';
    const is1980s = (releaseYear >= 1980 && releaseYear < 1990) ? 'true' : 'false';
    const is1990s = (releaseYear >= 1990 && releaseYear < 2000) ? 'true' : 'false';
    const is2000s = (releaseYear >= 2000 && releaseYear < 2010) ? 'true' : 'false';
    const is2010s = (releaseYear >= 2010 && releaseYear < 2020) ? 'true' : 'false';
    const is2020s = (releaseYear >= 2020 && releaseYear < 2030) ? 'true' : 'false';

    return [is1950s, is1960s, is1970s, is1980s, is1990s, is2000s, is2010s, is2020s];
}

/**
 * Sanitize names and titles for sorting.
 * 
 * @param nameTitle The name or title to sanitize.
 * @returns An array containing the sanitized name or title, and the capitalized first letter.
 */
export async function sanitizeNamesTitles(nameTitle: string): Promise<[string, string]> {
    nameTitle = nameTitle.trimStart().replace(/[.\s]+/g, "");

    const words: string[] = nameTitle.split(/\s+/);

    if (process.env.IGNORE_WORDS) {
        if (!process.env.IGNORE_WORDS.includes(words[0])) {
            return [nameTitle, nameTitle.charAt(0).toUpperCase()];
        }
    }
    const firstName: string = nameTitle.substring(nameTitle.indexOf(" ") + 1);
    return [firstName, firstName.charAt(0).toUpperCase()];
}

/**
 * Calculates whether the added date and release date are within a certain time frame.
 *
 * @param {string} addedDate - The date the item was added.
 * @param {string} releaseDate - The date the item was released.
 * @return {string[]} An array containing two elements. The first element is a boolean indicating if the added date is within the specified time frame. The second element is a boolean indicating if the release date is within the specified time frame.
 */
export async function calculateDate(addedDate: string, releaseDate: string) {
    const today = new Date();
    const newAddition = process.env.IS_NEW_ADDITION && (new Date().getTime() - new Date(addedDate).getTime()) / (3600 * 24) <= parseInt(process.env.IS_NEW_ADDITION);
    const newRelease = process.env.IS_NEW_RELEASE && (new Date().getTime() - new Date(releaseDate).getTime()) / (3600 * 24) <= parseInt(process.env.IS_NEW_RELEASE);

    return [newAddition ? 'true' : 'false', newRelease ? 'true' : 'false'];
}