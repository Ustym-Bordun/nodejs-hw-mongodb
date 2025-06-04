import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    // const error = createHttpError(400, 'Bad Request', {
    //   errors: err.details,
    // });

    const error = createHttpError(400, 'Body validation error', {
      errors: err.details,
    });

    // const errors = err.details.map((detail) => ({
    //   detail,
    //   field: detail.path.join('.'),
    //   message: detail.message, // <-- тут буде кастомне повідомлення
    //   type: detail.type,
    // }));

    // const error = createHttpError(400, 'Validation error', {
    //   errors, // передаємо деталі
    // });

    next(error);
  }
};
