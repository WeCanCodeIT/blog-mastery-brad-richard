const tagParser = (tags) => {
    let tagList = (tags === undefined) ? [] :
        (typeof tags === "string") ? parseTagString(tags) : tags;
}

const parseTagString = (tagStr) => {
    const tagsArray = [];
    let newStrToArr = tagStr.split(",");
    newStrToArr.forEach(tag => {
        tagsArray.push(tag.trim().toLower())
    });
    return tagsArray;
}

const tagArrayToLowercase = (tagArr) => {
    const tagsArray = [];
    const tagLowerArr = tagArr.forEach(tag => {
        tagsArray.push(tag.toLower);
    });
}

module.exports = tagParser;