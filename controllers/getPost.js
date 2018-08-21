const Post = require('../database/models/Post')

module.exports = async (req, res) => {

    const post = await Post.findById(req.params.id)
    
    res.render('post', {
        post
    })
    // res.sendFile(path.resolve(__dirname, 'pages/post.html' ))
};