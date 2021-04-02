export function createControl(config, validation) {
    console.log('ddd')
  return {
    ...config,
    value:'',
    validation,
    valid: !validation,
    touched: false,
    
  };
}
export function isValid(value, validation) {
  if (!validation) {
    return true;
  }
  let isValid = true;
  if (validation.required) {
    return (isValid = isValid && value.trim() !== '');
  }

  console.log('isValid', isValid);
  return isValid;
}
export function isFormValid(formControls) {
  let isFormValid = true;
  for (let control in formControls) {
    if (formControls.hasOwnProperty(control)) {
      isFormValid = formControls[control].valid && isFormValid;
    }
  }
  return isFormValid;
}
