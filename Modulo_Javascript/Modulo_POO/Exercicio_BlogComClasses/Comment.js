class Comment {
    constructor(...comments) {
        this.comments = comments
        this.addComment = () => this.comments.unshift(comments)
    }

    // addComment(...comm) {
    //     this.comments.unshift(comm)
    // }
}   

module.exports = Comment