export class Validator {
  errors = [];
  validatedFieldsCount = 0;

  check(value, fieldName) {
    this.validatedFieldsCount++;
    return new Validate(value, fieldName, this);
  }

  addError(message) {
    this.errors.push(message);
  }

  isValid() {
    return this.errors.length === 0;
  }

  getErrors() {
    return this.errors;
  }
}

class Validate {
  value;
  messageBase;
  validator;
  constructor(value, fieldName, validator) {
    this.validator = validator;
    this.value = value;
    this.messageBase = `FIELD: ${fieldName}`;
  }

  isString() {
    if (typeof this.value !== "string") {
      this.validator.addError(
        `${this.messageBase}, must be string, provided -> ${typeof this.value}`
      );
    }
    return this;
  }

  isNumber() {
    if (typeof this.value !== "number") {
      this.validator.addError(
        `${this.messageBase}, must be number, provided -> ${typeof this.value}`
      );
    }
    return this;
  }

  lengthMin(min) {
    const length = this.value.toString().length;

    if (length < min) {
      this.validator.addError(
        `${this.messageBase}, must have min length ${min}, provided -> ${length}`
      );
    }

    return this;
  }

  lengthMax(max) {
    const length = this.value.toString().length;

    if (length > max) {
      this.validator.addError(
        `${this.messageBase}, must have max length ${max}, provided -> ${length}`
      );
    }

    return this;
  }
}
