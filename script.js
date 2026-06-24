function submitForm() {
    const lead = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        timestamp: new Date().toLocaleString()
    };

    let leads = JSON.parse(localStorage.getItem('kings_leads')) || [];
    leads.push(lead);
    localStorage.setItem('kings_leads', JSON.stringify(leads));

    alert("Form submitted successfully.");
    document.getElementById('enquiryForm').classList.add('hidden');
    document.getElementById('contact-btns').classList.remove('hidden');
}

function adminLogin() {
    if (prompt("Enter Admin Password:") === "TASPUSSY") {
        document.getElementById('admin-panel').classList.remove('hidden');
        let leads = JSON.parse(localStorage.getItem('kings_leads')) || [];
        document.getElementById('leads-list').innerHTML = leads.map(l => 
            `<div style="border:1px solid gold; margin:10px; padding:10px;">
                ${l.timestamp} - ${l.name} ${l.surname} <br> ${l.email} | ${l.phone}
            </div>`).join('');
    } else {
        alert("Access Denied");
    }
}
