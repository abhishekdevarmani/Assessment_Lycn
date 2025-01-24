function handleRedirection() {
    const feedback = document.querySelector('input[name="feedback"]:checked').value;
    if (feedback === "yes") {
        // Redirect to Google Review page (replace with actual URL)
        window.location.href = "https://maps.app.goo.gl/YvJZNE5ermhRxMdY7";
    } else if (feedback === "no") {
        // Redirect to a Google Form (replace with your Google Form URL)
        window.location.href = "https://forms.gle/EdMrX1Us5TVmCz1u8";
    }
}
