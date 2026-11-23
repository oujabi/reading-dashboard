'use server'

export async function createBook(formData: FormData) {
    const title = formData.get("title");
    const author = formData.get("author");
    const genre = formData.get("genre");
    const pages = formData.get("pages");
    const isbn = formData.get("isbn");
    const publicationAt = formData.get("publicationAt");
    const startedAt = formData.get("startedAt");
    const endedAt = formData.get("endedAt");

    console.log(title, author, genre, pages, isbn, publicationAt, startedAt, endedAt);

}