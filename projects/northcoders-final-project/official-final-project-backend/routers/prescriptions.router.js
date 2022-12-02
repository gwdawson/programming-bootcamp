const controller = require('../controllers');
const prescriptionsRouter = require('express').Router();

prescriptionsRouter.get(
  '/user/:userId',
  controller.prescriptions.getPrescriptionsByUserId
);

prescriptionsRouter.post('/', controller.prescriptions.postPrescription);

prescriptionsRouter.delete(
  '/:id',
  controller.prescriptions.deletePrescriptionById
);

prescriptionsRouter.get('/:id', controller.prescriptions.getPrescriptionById);

prescriptionsRouter.patch(
  '/:id',
  controller.prescriptions.patchPrescriptionById
);

module.exports = prescriptionsRouter;
