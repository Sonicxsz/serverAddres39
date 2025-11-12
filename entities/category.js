import { Validator } from "../pkg/utils/validator.js";

export class Category {
  constructor(code, name, is_mini) {
    this.code = code || "";
    this.name = name || "";
    this.is_mini = is_mini || false;
  }

  isValid() {
    const errors = [];
    if (this.code.length < 3 || this.code.length > 100) {
      errors.push({
        message:
          "FIELD: code - must be greater than 3 and less than 100, got: " +
          this.code.length,
        field: "code",
      });
    }
    if (this.name.length < 5 || this.name.length > 255) {
      errors.push({
        message:
          "FIELD: name - must be greater than 5 and less than 255, got: " +
          this.name.length,
        field: "name",
      });
    }
    return [errors.length > 0, errors];
  }
}

export const categoryUpdateValidator = (category) => {
  const v = new Validator();
  if (category.name) {
    v.check(category.name, "Name").isString().lengthMin(5).lengthMax(255);
  }
  if (category.code) {
    v.check(category.code, "Code").isString().lengthMin(3).lengthMax(100);
  }

  if (v.validatedFieldsCount === 0) {
    v.addError("Please specify at least one field");
  }

  return {
    isValid: v.isValid(),
    errors: v.getErrors(),
  };
};
