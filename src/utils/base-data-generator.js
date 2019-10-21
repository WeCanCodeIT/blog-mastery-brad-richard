const TagsTable = require('../models/Tag');
const GenresTable = require('../models/Genre');

const baseTags = []
const baseTagsArr = [
     "silly", "sorrynotsorry", "serious", 
     "cartoons", "sportsball", "entertainment",
     "notmyproblem", "anicdotes" ]

baseTagsArr.forEach(tag => {
    baseTags.push({name: tag})
})

const baseGenres = []
const baseGenresArr = [
    "Humor", "Philisophical", "Entertainment", "Sports", "Tech", "Science"
]
baseGenresArr.forEach(genre => {
    baseGenres.push({name: genre})
})

const buildBaseData = async () => {
    await GenresTable.bulkCreate(baseGenres, {
        fields: ["name"],
        updateOnDuplicate: ["name"]
    });
    await TagsTable.bulkCreate(baseTags, {
        fields: ["name"],
        updateOnDuplicate: ["name"]
    })
}

module.exports = buildBaseData;