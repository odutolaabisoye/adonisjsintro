'use strict'

class PostController {
    async index({ view }) {
        const posts = [
            {title: 'Post One', body: 'This is post one'},
            {title: 'Post One', body: 'This is post two'},
            {title: 'Post two', body: 'This is post three'},
        ]
        return view.render('posts.index', {
            title: 'Latest Posts',
            posts
        })
    }

}

module.exports = PostController
