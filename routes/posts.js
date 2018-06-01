module.exports = {
  getPosts(req, res) {
	res.send(global.store)
  },
  addPost(req, res) {
    let newPost = req.body
    let id = global.store.posts.length
    global.store.posts.push(newPost)
    res.status(201).send({id: id})
  },
  updatePost(req, res) {
    let editedPost = req.body
    global.store.posts[req.params.postId] = editedPost
    res.status(200).send(global.store.posts[req.params.postId])
  },
  removePost(req, res) {
    global.store.posts.splice(req.params.postId, 1)
    res.status(204).send()
  }
}
