var Content = require("../../models/content");

async function getAll() {
    try {
        const LIMIT = 8;
        const page = 1;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await Content.countDocuments();
        const contents = await Content.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
        return {
            error: false,
            message: `Lấy contents trang ${page} thành công`,
            contents,
        }
    }
    catch(err) {
        return {
            error: true,
            message: err.message
        }
    }
}

async function get(body) {
    const {id} = body;
    console.log(id)
    const newContent = await Content.find({postTitle: "Singly LinkedList"}).remove().exec();
    try {
        const content = await Content.find({ _id: id })
        return {
            error: false,
            message: `Lấy content thành công`,
            content: content[0],
        }
    }
    catch(err) {
        return {
            error: true,
            message: err.message
        }
    }
}

async function add(body) {
    console.log(body)
    const {postTitle, category, thumb, postContent} = body;

    const newContent = new Content({
        postTitle,
        category,
        thumb,
        postContent,
        isDeleted: true
    });

    console.log(newContent)

    try {
        await newContent.save();
        return {
            error: false,
            message: "Tạo content thành công"
        } 
    }
    catch(err) {
        return {
            error: true,
            message: err.message
        }
    }
}

module.exports= {
    getAll,
    get,
    add
}