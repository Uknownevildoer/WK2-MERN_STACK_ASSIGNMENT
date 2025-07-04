var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon jovi",
        "tracks": [
            "Let it shine",
            "rock and fall"
        ]
    },
    "2468": {
        "album": "1992",
        "artist": "Bubba",
        "tracks": [
            "1992",
            "awaken"
        ]
    }, 
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

//keep a copy of the collection
var collectioncopy = JSON.parse(JSON.stringify(collection))

function updateRecords(id, prop, value){
    if(value === ""){
        delete collection[id][prop]
    }else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || []
        collection[id][prop].push(value)
    }else{
        collection[id][prop] = value;
    }


    return collection;

}

console.log(updateRecords("2548", "artist", ""))