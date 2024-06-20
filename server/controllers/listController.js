const List = require('../models/listModel');

exports.getAllLists = async (req, res) => {
  try {
    const userId = req.params.userId;

    const lists = await List.find({ clerkUserId: userId });
    
    res.status(200).json({
      status: 'success',
      result: lists.length,
      data: {
        lists,
      },
    });
  } catch (err) {
    res.staus(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getListById = async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    res.status(200).json({
      status: 'sucess'
    })
  }
}

// CREATE LIST
exports.createList = async (req, res) => {
  try {
    const {name, titles} = req.body;
    const userId = req.body.userId;

    const newList = await List.create({
      name,
      titles,
      userId
    });
    res.status(201).json({
      status: 'success',
      data: {
        list: newList,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
    console.log('Error creating list', err);
  }
};
