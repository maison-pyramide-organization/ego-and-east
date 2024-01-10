const checkFormData = (formData: any) => {
  let isValid = true;
  const data = Object.values(formData);
  data.forEach((value: any) => {
    if (!value.trim()) isValid = false;
  });
  return isValid;
};
export default checkFormData;
