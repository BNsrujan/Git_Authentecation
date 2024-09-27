'use strict';
const OsModel = require('../models/osmodel');
const { Docker } = require('node-docker-api');
const docker = new Docker({ socketPath: '/var/run/docker.sock' });

exports.storeTerminalName = async (req, res) => {
    const { name } = req.body; // OS name from request body
    console.log(name);

    // Validate if the OS name is provided
    if (!name) {
        return res.status(400).json({ error: 'OS name is required' });
    }

    try {
        // Check if the OS already exists, if not, save it
        const existingOs = await OsModel.findOne({ name });
        if (!existingOs) {
            const newOs = new OsModel({ name });
            await newOs.save();
            console.log(`OS name ${name} saved successfully`);
        } else {
            console.log(`OS name ${name} already exists`);
        }

        // Docker container creation logic
        const containerName = `container-${name}`;
        const container = await docker.container.create({
            Image: `${name}:latest`, // Use the OS name as the Docker image
            name: containerName // Container name based on OS name for uniqueness
        });

        console.log(`Container created with name: ${containerName}`);
        await container.start();
        console.log(`Container for OS ${name} started successfully`);

        // Stream the container logs
        const stream = await container.logs({
            follow: true,
            stdout: true,
            stderr: true
        });

        stream.on('data', info => console.log(info.toString()));
        stream.on('error', err => console.log(err));

        // Return success response
        return res.json({ message: `OS name ${name} saved. Docker container ${containerName} started.` });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'An error occurred while saving data or starting the Docker container' });
    }
};
