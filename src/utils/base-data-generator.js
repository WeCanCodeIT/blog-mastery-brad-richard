const TagsTable = require('../models/Tag');
const GenresTable = require('../models/Genre');
const AuthorsTable = require('../models/Author')

// Tag Data
const baseTags = []
const baseTagsArr = [
     "silly", "sorrynotsorry", "serious", 
     "cartoons", "sportsball", "entertainment",
     "notmyproblem", "anicdotes" ]

baseTagsArr.forEach(tag => {
    baseTags.push({name: tag})
})

// Genre Data
const baseGenres = []
const baseGenresArr = [
    "Humor", "Philisophical", "Entertainment", "Sports", "Tech", "Science"
]
baseGenresArr.forEach(genre => {
    baseGenres.push({name: genre})
})

// Author Data
const baseAuthorData = {
    name: "Anonymous",
    avatarUrl: "/images/avatar_tina.jpeg",
    quote: "Can&apos;t see me!",
    token: "666"
}


const buildBaseData = async () => {
    await GenresTable.bulkCreate(baseGenres, {
        fields: ["name"],
        updateOnDuplicate: ["name"]
    });
    await TagsTable.bulkCreate(baseTags, {
        fields: ["name"],
        updateOnDuplicate: ["name"]
    });
    await AuthorsTable.create(baseAuthorData, {
        fields: ["name", "avatarUrl", "quote", "token"],
        updateOnDuplicate: ["name", "avatarUrl", "quote", "token"]
    });
}

module.exports = buildBaseData;