const Customer = require('../models/Customer');

exports.createCustomer = async (req, res) => {
  const { name, contactInfo } = req.body;
  const newCustomer = new Customer({ name, contactInfo });
  await newCustomer.save();
  res.send('Customer created');
};

exports.getCustomers = async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
};
