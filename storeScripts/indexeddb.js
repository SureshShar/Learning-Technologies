if (!('indexedDB' in window)) {
    console.log("1 This browser doesn't support IndexedDB");
}

console.log("2 This browser support IndexedDB");

const idbRequest = indexedDB.open("Indexed DB data base", 2);
let dataBase;

idbRequest.onupgradeneeded = function() {
    console.log("3 on upgrade needed event fired");

    dataBase = idbRequest.result;
    dataBase.createObjectStore("Prince team");
    dataBase.createObjectStore("Himansu Team");
    // The following example populates the database using a transaction.
    // const db = idbRequest.result;
    // const tx = db.transaction("books", "readwrite");
    // const store = tx.objectStore("books");
    // console.log("onupgradeneeded", {db});

    // store.put({title: "Quarry Memories", author: "Fred", isbn: 823456});
    // store.put({title: "Water Buffaloes", author: "Fred", isbn: 834567});
    // store.put({title: "Bedrock Nights", author: "Barney", isbn: 845678});

    // console.log("onupgradeneeded function run");
    // tx.oncomplete = () => {
    // // All idbRequests have succeeded and the transaction has committed.
    //     console.log("Transaction");
    // }
};

idbRequest.onsuccess = function(){
    console.log("4 Database made look at IndexedDb Store");

    dataBase = idbRequest.result;
    const princeTeam = dataBase.transaction("Prince team", "readwrite");
    const objectStore1 = princeTeam.objectStore("Prince team");
    const himansuTeam = dataBase.transaction("Himansu Team", "readwrite");
    const objectStore2 = himansuTeam.objectStore("Himansu Team");

    // const omJi = {
    //     name: "Om ji",
    //     rollNo: 1,
    //     expertise: "Nuxt 3",
    //     age: "25"
    // }
    // const nagesh = {
    //     name: "nagesh",
    //     rollNo: 2,
    //     expertise: "Nuxt 3",
    //     age: "22"
    // }
    const palash = {
        name: "nagesh",
        rollNo: 3,
        expertise: "Nuxt 3",
        age: "21"
    }
    const vinod = {
        name: "vinod",
        rollNo: 1,
        expertise: "Nuxt 3",
        age: "22"
    }
    const sandeep = {
        name: "sandeep",
        rollNo: 2,
        expertise: "Nuxt 3",
        age: "25"
    }

    objectStore1.put(palash, palash.rollNo);
    objectStore2.put(vinod, vinod.rollNo);
    objectStore2.put(sandeep, sandeep.rollNo);
    

    // const objectStoreGetRequest = objectStore.get(1);

    // console.log("onsuccess", { dataBase, princeTeam, data: objectStoreGetRequest.result });
    // console.log("onsuccess", dataBase.transaction(dataBase.objectStoreNames));
};

idbRequest.onerror = function () {
    console.error("5 Db failed error");
}