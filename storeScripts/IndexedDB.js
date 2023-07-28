// The following example uses the API to access a "library" database. It has a "books" object
// store that holds books records stored by their "isbn" property as the primary key.
// console.log("This is indexedDb experiment");

const idbRequest = indexedDB.open("testLibrary");
let db;

// idbRequest.onupgradeneeded = function() {
    // The database did not previously exist, so create object stores and indexes.
    // const db = idbRequest.result;
    // const store = db.createObjectStore("books", {keyPath: "isbn"});
    // const titleIndex = store.createIndex("by_title", "title", {unique: true});
    // const authorIndex = store.createIndex("by_auther", "author");

    // Populate with initial data.
    // store.put({title: "Quarry Memories", author: "Fred", isbn: 1234});
    // store.put({title: "Water Buffaloes", author: "Fred", isbn: 234567});
    // store.put({title: "Bedrock Nights", author: "Barney", isbn: 345678});
// };

idbRequest.onupgradeneeded = function() {
    // The following example populates the database using a transaction.
    const db = idbRequest.result;
    const tx = db.transaction("books", "readwrite");
    const store = tx.objectStore("books");

    store.put({title: "Quarry Memories", author: "Fred", isbn: 823456});
    store.put({title: "Water Buffaloes", author: "Fred", isbn: 834567});
    store.put({title: "Bedrock Nights", author: "Barney", isbn: 845678});

    console.log("onupgradeneeded function run")
    tx.oncomplete = () => {
        // All idbRequests have succeeded and the transaction has committed.
        console.log("Transaction")
    }
};

idbRequest.onsuccess = function(){
    console.log("Database made look at IndexedDb Store");
    console.log({db});
};

idbRequest.onerror = function () {
    console.error("Db failed error");
}
