// import express from 'express'
// import Post from '../models/post.js'
// const portRouter = express.Router()

// portRouter.get('/posts', async (req, res) => {
//     try {
//         const posts = await Post
//             .find()
//             .populate('userId')
//         res.json(posts)
//     } catch (error) {
//         console.log(error);
//     }
// })

// portRouter.post('/posts', async (req, res) => {
//     try {
//         const posts = await Post
//             .create(req.body)
//             .populate('userId')
//         res.json(posts)
//     } catch (error) {
//         console.log(error);
//     }
// })

// export default portRouter