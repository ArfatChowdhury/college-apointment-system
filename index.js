
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// midlewere
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

async function run() {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

run().catch(console.dir);