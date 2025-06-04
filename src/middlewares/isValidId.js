import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    // throw createHttpError(400, 'Bad Request', {
    //   message: `Requested contact id: '${contactId}' is not a mongoose ObjectId`,
    // });

    const error = createHttpError(
      400,
      `Requested contact id: '${contactId}' is not a mongoose ObjectId`,
    );

    next(error);
  }

  next();
};
