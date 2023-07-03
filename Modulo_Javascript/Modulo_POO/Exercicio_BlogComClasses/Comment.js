class Comment {
    constructor(username, content) {
        this.username = username;
        this.comment = content;
        this.createdAt = new Date();
    }
}

module.exports = Comment