function check_c_Code()
{
    const c_ans = `Sorted array: 
11 12 22 25 34 64 90`
    const opt = document.getElementById("c_output").value;
    if(opt === c_ans)
    {
        const timestamp = Date.now();
        const start = document.createElement("p")
        start.innerHTML = `Completed at: ${new Date(timestamp)}`;
        const cont_id = document.getElementById("textarea-container_c")
        cont_id.appendChild(start);
        start.style.color = 'white'; // Change the text color to red

        // Add or modify an HTML attribute
        start.setAttribute('data-custom-attribute', 'custom-value');

        // Add or remove a CSS class
        start.classList.add('highlight'); 
        
        var textareadiv = document.getElementById("c_output");
        textareadiv.value = "";
        textareadiv.disabled = true;

    }
    else{
        window.alert("Sorry wrong Output!!!")
        console.log("Incorreect !!")
    }
}

function check_python_Code()
{
    const p_ans = "Minimum Window Substring : BANC"
    const opt = document.getElementById("p_output").value;
    if(opt === p_ans)
    {
        const timestamp = Date.now();
        const start = document.createElement("p")
        start.innerHTML = `Completed at: ${new Date(timestamp)}`;
        const cont_id = document.getElementById("textarea-container_p")
        cont_id.appendChild(start);
        start.style.color = 'white'; // Change the text color to red

        // Add or modify an HTML attribute
        start.setAttribute('data-custom-attribute', 'custom-value');

        // Add or remove a CSS class
        start.classList.add('highlight'); 
        var textareadiv = document.getElementById("p_output");
        textareadiv.value = "";
        textareadiv.disabled = true;

    }
    else{
        window.alert("Sorry wrong Output!!!")
        console.log("Incorreect !!")
    }
}

// Get the <a> element by its ID
const linkElement = document.getElementById('start');

// Add a click event listener to the <a> tag
linkElement.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior (e.g., navigating to a new page)
    
    // Get the current timestamp
    const timestamp = Date.now();

    // Log the timestamp to the console or perform any other action
    console.log(`Clicked at: ${new Date(timestamp)}`);
});

function timestmp()
{
    const timestamp = Date.now();

    // Log the timestamp to the console or perform any other action
    console.log(`Clicked at: ${new Date(timestamp)}`);

    const start = document.createElement("p")
    start.innerHTML = `Started at: ${new Date(timestamp)}`;
    const cont_id = document.getElementById("download_code")
    cont_id.appendChild(start);
    start.style.color = 'white'; // Change the text color to red

    // Add or modify an HTML attribute
    start.setAttribute('data-custom-attribute', 'custom-value');

    // Add or remove a CSS class
    start.classList.add('highlight'); 
    window.location = "https://github.com/Ultimateudhaya/Spotn-sort-round-2-qns/archive/refs/heads/main.zip";
}
