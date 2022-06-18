jQuery(document).ready(function () {
    jQuery("#customer").on('click', loadPost);

    function loadPost(e) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', "./customer.json", true);
        xhr.onload = function () {
            if (this.status === 200) {
                const response = JSON.parse(this.responseText);
                const output = `
           <ul>
                <li>Name : ${customer.name}</li>
                <li>ID : ${customer.id}</li>
                <li>Gender : ${customer.gender}</li>
                <li>Married : ${customer.married}</li>
           </ul>
           `
                console.log(response);
                jQuery('#customer').html(output)
            }
        }

        xhr.send();
    }
})
