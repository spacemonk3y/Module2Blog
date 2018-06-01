module.exports = {
  getComments(req, res) {
	let comments = [{"text":"No comments yet"}]
	let post = global.store.posts[req.params.postId]
	if(post) comments = post.comments
	res.send(comments)
  }, 
  addComment(req, res) {
	let post = global.store.posts[req.params.postId]
	let id = 0;
	if(post) {
		if(!post.comments) post.comments = []
		id = post.comments.length
		post.comments.push(req.body)
	}
	res.status(201).send({id: id})
  },
  updateComment(req, res) {
    let editedComment = req.body
    global.store.posts[req.params.postId].comments[req.params.commentId] = editedComment
    res.status(200).send(global.store.posts[req.params.postId].comments[req.params.commentId])
  },
  removeComment(req, res) {
	let post = global.store.posts[req.params.postId]
	if(post && post.comments[req.params.commentId])
		global.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
    res.status(204).send()
  }  
}
