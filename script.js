$('#submitButton').on('click', function(){
$('#commentSection').append(
    `<div id="commentContainer">
        <div id="image"></div>
        <div id="userNameDisplay">
            <div id="nameButtons">
                <div id="seperatedDisplayName">
                    ${$('#displayName').val()}
                </div>
                
                <div id="displayButtons">
                    <button type="button" id="editButton" class="button">Edit</button>
                    <button type="button" id="deleteButton" class="button">Delete</button>
                </div>
            </div>
            <div>
                <div id="commentContent">${$('#comment').val()}</div>
                <div id="formComment" class="formCommentClass">
                    <input type="text" id="changeComment">
                    <button type="button" id="formSubmit">Submit</button>
                </div>
            </div>
        </div>
        
    </div>`
)});

$('#mainContent').on('click', '#editButton', function() {

    // Move from #editButton - #displayButtons
    let ove1 = $(this).parent();

    // Move from #displayButtons - #nameButtons
    let ove2namebuttons = $(ove1).parent();

    // Move from #nameButtons - #userNameDisplay
    let ove3userNameDisplay = $(ove2namebuttons).parent();

    // Move from #userNameDisplay - children
    let ove4 = $(ove3userNameDisplay).children();

    // Move from #userNameDisplay - to 2nd div wrap
    let ove5 = $(ove4[1]).children();

    // Move from 2nd Div wrap - formComment
    $(ove5).children();

    $(ove5[1]).toggleClass('formCommentClass');

});

$('#mainContent').on('click', '#formSubmit', function() {

    // Store val of input in a var
    let valInput = $(this).prev().val();

    // Move from  #formSubmit to the #formComment <div>
    let ve1 = $(this).parent();

    // Move from the #formComment <div> to #commentContent
    let ve2 = $(ve1).prev();

    $(ve2[0]).text(valInput);

});

$('#mainContent').on('click', '#deleteButton', function() {

    let move1 = $(this).parent();

    let move2 = $(move1[0]).parent();

    let move3 = $(move2[0]).parent();

    let move4 = $(move3[0]).parent();

    let parent = $(move4[0]).remove();

});


//First make a click event for the submit button

//Start at $(this) and move to the input and store the value of the input in a variable

//Start at $(this) again! And move to the original comment

//Use .text() to change the text to the value of what was in the input (the variable)