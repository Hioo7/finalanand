function sendWhatsAppMessage(event) {
    event.preventDefault(); // Prevent form submission, so the page doesn't reload
    
    const phoneNumberInput = document.getElementById("whatsappNumber");
    const phoneNumber = phoneNumberInput.value.trim(); // Get the number and remove any extra spaces

    if (phoneNumber) {
        const message = encodeURIComponent(`
        Hello,

Pleasure connecting with you!! Below are my details:

Digital Business Card/Profile:
https://bizvizcard.com/AnandKumar

*Note: If this is our first chat, reply hi and then click the links above. (Wapp Policy)* 

Regards, 
Anand Kumar
Owner
World Of Jewellers

Powered by: digicarda.com  
        `);

        // Redirect to WhatsApp with the entered phone number and the message
        window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
    } else {
        alert("Please enter a valid WhatsApp number.");
    }
}
