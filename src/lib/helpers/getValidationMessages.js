export default function getValidateMessages(inputName = "label") {
  const validateMessages = {
    required: `\${${inputName}} is required!`,
    types: {
      email: `\${${inputName}} is not valid!`,
    },
  };

  return validateMessages;
}
