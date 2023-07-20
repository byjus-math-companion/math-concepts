function fetchData() {
    // Replace 'data.json' with the path to your JSON file if it's in a different location
    fetch('./data.json')
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            console.log(data);
            createPageData(data.classes);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

fetchData();


function createPageData(classes){
    let classesContainer = document.getElementById("class-list");

    classes.forEach(_class => {
        let thisClassHTML = createClassCard(_class);
        classesContainer.append(thisClassHTML);
    });
}

function createClassCard(_class){
    let classContainerHTML = document.createElement('div');
    classContainerHTML.classList.add("class-card");

    let headingHTML = document.createElement('h2');
    headingHTML.innerText = _class['class-title'];
    classContainerHTML.appendChild(headingHTML);

    _class.pages.forEach(page  => {
        let thisButton = createLinkButton(page);
        classContainerHTML.appendChild(thisButton);
    });
    
    return classContainerHTML;
}

function createLinkButton(buttonData){
    let button = document.createElement('a');
    button.href = buttonData.url;
    button.innerText = buttonData.name;
    button.target = "_blank";
    button.classList.add("link-button");
    return button;
}