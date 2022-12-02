const Prescription = require('../models/prescriptions.model');
const User = require('../models/users.model');
const ObjectId = require('mongoose').Types.ObjectId;

exports.postPrescription = async (req, res, next) => {
  try {
    const prescription = await Prescription.create({
      name: req.body.name,
      dosage: req.body.dosage,
      frequency: req.body.frequency,
      firstPromptTime: req.body.firstPromptTime,
      notes: req.body.notes,
      userId: req.body.userId,
      amount: req.body.amount,
    });
    res.status(201).json({ prescription });
  } catch (err) {
    next(err);
  }
};

exports.getPrescriptionsByUserId = async (req, res, next) => {
  try {
    const { userId } = req.params;

    function isValidObjectId(id) {
      if (ObjectId.isValid(id)) {
        if (String(new ObjectId(id)) === id) return true;
        return false;
      }
      return false;
    }

    if (!isValidObjectId(userId)) {
      throw {
        status: 400,
        msg: `Invalid request`,
      };
    }
    const userExists = await User.exists({ _id: userId });

    if (userExists) {
      const prescriptions = await Prescription.find({ userId: userId });

      res.status(200).json({ prescriptions });
    } else {
      throw {
        status: 404,
        msg: `No user with userId ${userId} found in the database`,
      };
    }
  } catch (err) {
    next(err);
  }
};

exports.deletePrescriptionById = async (req, res, next) => {
  try {
    const { id } = req.params;

    function isValidObjectId(id) {
      if (ObjectId.isValid(id)) {
        if (String(new ObjectId(id)) === id) return true;
        return false;
      }
      return false;
    }

    if (!isValidObjectId(id)) {
      throw {
        status: 400,
        msg: `Invalid request`,
      };
    }

    const prescriptionExists = await Prescription.exists({ _id: id });

    if (prescriptionExists) {
      const deletedPrescription = await Prescription.deleteOne({ _id: id });
      res.status(204).json(deletedPrescription);
    } else {
      throw {
        status: 404,
        msg: `No prescription with id ${id} found in the database`,
      };
    }
  } catch (err) {
    next(err);
  }
};

exports.getPrescriptionById = async (req, res, next) => {
  try {
    const { id } = req.params;

    function isValidObjectId(id) {
      if (ObjectId.isValid(id)) {
        if (String(new ObjectId(id)) === id) return true;
        return false;
      }
      return false;
    }

    if (!isValidObjectId(id)) {
      throw {
        status: 400,
        msg: `Invalid request`,
      };
    }

    const prescriptionExists = await Prescription.exists({ _id: id });

    if (prescriptionExists) {
      const prescription = await Prescription.findOne({ _id: id });
      res.status(200).json({ prescription });
    } else {
      throw {
        status: 404,
        msg: `No prescription with id ${id} found in the database`,
      };
    }
  } catch (err) {
    next(err);
  }
};

exports.patchPrescriptionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, dosage, frequency, firstPromptTime, notes, userId, amount } =
      req.body;

    function isValidObjectId(id) {
      if (ObjectId.isValid(id)) {
        if (String(new ObjectId(id)) === id) return true;
        return false;
      }
      return false;
    }

    if (!isValidObjectId(id)) {
      throw {
        status: 400,
        msg: `Invalid request`,
      };
    }

    const prescriptionExists = await Prescription.exists({ _id: id });

    if (prescriptionExists) {
      const prescription = await Prescription.findById({ _id: id });
      const updatedPrescription = await Prescription.findByIdAndUpdate(
        { _id: id },
        {
          name: name || prescription.name,
          dosage: dosage || prescription.dosage,
          frequency: frequency || prescription.frequency,
          firstPromptTime: firstPromptTime || prescription.firstPromptTime,
          notes: notes || prescription.notes,
          amount: amount || prescription.amount,
        },
        { new: true, runValidators: true }
      );

      res.status(200).json({ updatedPrescription });
    } else {
      throw {
        status: 404,
        msg: `No prescription with id ${id} found in the database`,
      };
    }
  } catch (err) {
    next(err);
  }
};
