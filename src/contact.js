let contactData = {
    address: `1024 Cedar Avenue, San Fransokyo`,
    phone: `555-235-2795`,
    email: `contact@baymaxco.com`,
}

export function contactLoad() {
    // Create contact card div
    let contactDiv = document.createElement("div");
    contactDiv.id = "contact-div";

    // Info
    Object.keys(contactData).forEach((key) => {
        let contactMethod = document.createElement("p");
        contactMethod.textContent = `${key}`;
        contactMethod.classList.add("contact-method");
        contactDiv.appendChild(contactMethod);

        let contactInfo = document.createElement("p");
        contactInfo.textContent = `${contactData[key]}`;
        contactInfo.classList.add("contact-info");
        contactDiv.appendChild(contactInfo);
    })

    return contactDiv;
    
}

