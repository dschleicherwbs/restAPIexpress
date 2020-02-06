// const express = require('express');
const router = require('express').Router();
const PostModel = require('../models/PostModel');

// Get all Posts
router.get('/', async (req, res) => {
  try {
    const posts = await PostModel.find();
    return res.json(posts);
  } catch (error) {
    return res.json(error);
  }
});

// Get a specific Posts by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    return res.json(post);
  } catch (error) {
    return res.json(error);
  }
});

// Add a Post
router.post('/', async (req, res) => {
  const post = new PostModel({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save();
    return res.json(savedPost);
  } catch (error) {
    return res.status(400).send(error);
  }
});

// Delete a Post
router.delete('/:id', async (req, res) => {
  try {
    const respone = await PostModel.deleteOne({ _id: req.params.id });
    return res.json(respone);
  } catch (error) {
    return res.json(error);
  }
});

// Update a Post
router.patch('/:id', async (req, res) => {
  try {
    const respone = await PostModel.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    return res.json(respone);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
