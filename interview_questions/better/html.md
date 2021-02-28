HTML
    <a href="#example" title="Example" target="_blank">example</a>
What do the title and target attributes do in the snippet above? What happens when you click on or hover over the link?
    title = appears as a pop up if hovered over
    target = _blank = opens it up in a new tab

<em>Click <b>here</b></em><br></br>
What does the em tag above do? What are some issues with this code?
    <em> tag = italicizes, puts emphasis
    <b> = bold the text
    issue with the code, possibly the BOLD should wrap over the Click as well?


<form action="example.com"></form>
What does the action attribute mean in the snippet above? What request is sent when submitting this form?
    action will send a GET request to the server


CSS
    p {
        font-size: 1.5em;
    }
What does em mean in the snippet above? What is the font size for p tags in this document?
    - em means the font-size will change relative to it's parent element's size
    - if it was inside a div of 8px, then the font-size will be 12px, if no parent, then it will be relative to HTML which is defaulted to 16
    
    WHEN EM is used on margin/padding, it will be relative to the element's font-size, not parent's
div {
width: 200px;
margin: 0 auto;
}