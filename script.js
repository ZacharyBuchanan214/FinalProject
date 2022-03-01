$('#submitButton').on('click', function(){
$('#commentSection').append(
    `<div id="commentContainer">
        <div id="image"></div>
        <div id="userNameDisplay">${$('#displayName').val()}</div>
        <div id="commentContent">${$('#comment').val()}</div>
    </div>`
)
.val(

);
});