import emailjs from "@emailjs/browser";

const sendEmail = async (formData: any) => {
  const serviceID = "service_16jakep";
  const templateID = "template_ibco3ry";
  const publicKey = "Fwf6G573I7spnDXoA";
  const templateParams = {
    requestType: formData.requestType,
    message: formData.message,
    name: formData.name,
    country: formData.country,
    email: formData.email,
    subject: formData.subject || formData.requestType,
    company: formData.company || "-",
    igUsername: formData.igUsername || "-",
    talent: formData.talent || "-",
  };
  
  console.log(templateParams);

  // await emailjs.send(serviceID, templateID, templateParams, publicKey);
};

export default sendEmail;
