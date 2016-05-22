/**
 * Created by exialym on 16/5/22.
 */
var book = {
    title: "Professional JavaScript",
    authors: [
        "Nicholas C. Zakas"
    ],
    edition: 3,
    year: 2011
};
var jsonText = JSON.stringify(book);
alert(jsonText);
var bookData = JSON.parse(jsonText);
alert(bookData.title);