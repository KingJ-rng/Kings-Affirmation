function submitForm() {
    const lead = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        time: new Date().toLocaleTimeString()
    };
    let leads = JSON.parse(localStorage.getItem('kings_affirmation_data')) || [];
    leads.push(lead);
    localStorage.setItem('kings_affirmation_data', JSON.stringify(leads));
    
    document.getElementById('enquiryForm').classList.add('hidden');
    document.getElementById('contact-btns').classList.remove('hidden');
}

function adminLogin() {
    if (prompt("Enter Authentication Key:") === "TASPUSSY") {
        document.getElementById('admin-panel').classList.remove('hidden');
        let leads = JSON.parse(localStorage.getItem('kings_affirmation_data')) || [];
        document.getElementById('leads-list').innerHTML = leads.map(l => 
            `<div style="border-bottom:1px solid #333; padding:10px;">
                <strong>${l.name} ${l.surname}</strong><br>
                ${l.phone} | ${l.email} | ${l.time}
            </div>`).join('');
    }
}
