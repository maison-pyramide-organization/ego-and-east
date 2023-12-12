import emailjs from "@emailjs/browser";

const sendEmail = async (formData: any) => {
    const serviceID = "service_ir9o86g";
    const templateID = "template_qy8143o";
    const publicKey = "aBVivZYO5hbsX3iow";
    const templateParams = {
        requestType: formData.requestType,
        message: formData.message,
        name: formData.name,
        country: formData.country,
        email: formData.email,
        subject: formData.subject || "-",
        company: formData.company || "-",
        surname: formData.surname || "-",
        talent: formData.talent || "-",
    };
    console.log(templateParams);

    await emailjs.send(serviceID, templateID, templateParams, publicKey);
};

export default sendEmail;
