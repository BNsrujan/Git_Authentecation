'use strict';
const OsModel = require('../models/osmodel');
const { Docker } = require('node-docker-api');
const docker = new Docker({ socketPath: '/var/run/docker.sock' });

exports.storeOsName = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'OS name is required' });
    }

    try {
        const newOs = new OsModel({ name });
        await newOs.save();
        res.json({ message: `OS name ${name} stored successfully` });
    } catch (error) {
        console.error('Error saving OS name:', error);
        return res.status(500).json({ error: 'Failed to store OS name' });
    }


    try {
        const container = await docker.container.create({
            Image: `${name}:latest`,
            name: `${name}`
        });

        console.log("Container created");

        await container.start();
        console.log(`Container for ${name} started successfully`);

        const stream = await container.logs({
            follow: true,
            stdout: true,
            stderr: true
        });

        stream.on('data', info => console.log(info.toString()));
        stream.on('error', err => console.log(err));

    } catch (error) {
        console.error('Error with Docker container:', error);
    }
};
