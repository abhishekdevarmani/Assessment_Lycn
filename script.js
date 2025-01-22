function handleRedirection() {
    const feedback = document.querySelector('input[name="feedback"]:checked').value;
    if (feedback === "yes") {
        // Redirect to Google Review page (replace with actual URL)
        window.location.href = "https://www.glassdoor.co.in/mz-survey/employer/collectReview_input.htm?i=3266107&j=true&y=&c=PAGE_INFOSITE_TOP";
    } else if (feedback === "no") {
        // Redirect to a Google Form (replace with your Google Form URL)
        window.location.href = "https://forms.gle/EdMrX1Us5TVmCz1u8";
    }
}
