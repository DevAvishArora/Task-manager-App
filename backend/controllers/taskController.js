const Task = require('../models/Task');

const getAllTasks = (req, res) => {
    Task.getAll((error, tasks) => {
        if (error) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(200).json(tasks);
        }
    });
};

const addTask = (req, res) => {
    const { title, description, completed } = req.body;
    if (!title) {
        res.status(400).json({ error: 'Title is required' });
        return;
    }
    Task.add(title, description, completed, (error, taskId) => {
        if (error) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(201).json({ id: taskId, title, description, completed });
        }
    });
};

const updateTaskStatus = (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    Task.updateStatus(id, completed, (error, updated) => {
        if (error) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (updated) {
                res.status(200).json({ message: 'Task status updated successfully' });
            } else {
                res.status(404).json({ error: 'Task not found' });
            }
        }
    });
};

const deleteTask = (req, res) => {
    const { id } = req.params;
    Task.delete(id, (error, deleted) => {
        if (error) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (deleted) {
                res.status(200).json({ message: 'Task deleted successfully' });
            } else {
                res.status(404).json({ error: 'Task not found' });
            }
        }
    });
};

module.exports = {
    getAllTasks,
    addTask,
    updateTaskStatus,
    deleteTask
};
