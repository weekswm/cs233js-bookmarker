/* 
Setup your development environment
    -   clone the repository with the starting files from github
    -   run npm init from the command line to create your package.json file
    -   run npm install ... and include the tools that you want to use in your application
    -   edit the scripts block in package.json to include npm commands you want to use
 
Create the look and feel of your page
    Use html 5 input attributes to make sure that the url and description are provided.
        The url should be a valid url too.
    -   At this point the user enters the url and the description.  After we talk about
        making an ajax call in chapter 3, we'll get the image and the title from an api.
    Add one or more sample bookmarks to the html page.
    -   Each bookmark is a link that contains: an image, 
        and the text that the user sees.  It also has a description and an icon for deleting.
    -   Don't forget the event handler on the control that deletes the bookmark
    Style the list of bookmarks and the page as a whole so it is reasonably attractive
    -   I have provided a screen shot of my page as well as 
        a screen shot of what my page looks like when I'm adding a new bookmark.

Create a class called Bookmarker
    PART 1 - Show the bookmarks
    -   Add a constructor
        -   Create an instance variable called bookmarks.
        -   Try to load the bookmarks from local storage.  If there's nothing in local storage 
            set it equal to an object literal that contains at least 2 bookmarks
            [
                {
                    description: "Really cool site for open source photos", 
                    image: "",
                    link: "https://www.pexels.com/", 
                    title: "https://www.pexels.com/"
                },
            ]
        -   call the method fillBookmarksList and pass in the bookmarks

    -   Add the generateBookmarkHtml method
        -   This method returns a template literal containing the html for ONE bookmark in the array.
            It gets called in fillBookMarksList.  It has 2 parameters a bookmark and an index.
        -   CUT the html for ONE bookmark from your html page into the body of your method.
        -   Enclose the html in ``.
        -   Replace the hardcoded description, image, link and title (of the sample bookmark) 
            with template strings that use the properties of the bookmark object
        -   Return the template literal

    -   Add the fillBookmarksList method.  It has bookmarks as its parameter.
        -   Save the bookmarks to local storage
        -   Create a variable bookmarkHtml and set it equal to the
            the return value for each of the individual tasks combined
            You can do this by calling the reduce method on the array
            It manipulates each element of an array to produce ONE result.  From the ToDoList:
                let tasksHtml = this.tasks.reduce(
                    (html, task, index) => html += this.generateTaskHtml(task, index), 
                    '');
        -   Set contents of the bookmarks-list element on the page to the bookmarkHtml variable
        );
    END OF PART 1 - TEST AND DEBUG YOUR CODE - YOU SHOULD SEE HARDCODED BOOKMARKS YOUR ON PAGE

    PART 2 - Delete a bookmark
    -   Add the deleteBookmark method.  It has 2 parameters, event and index
        -   prevent the default action of the anchor tag using the event parameter
        -   delete the bookmark from the list based on the index
        -   call fillBookmarksList
    -   Add an onclick handler to the delete icon
        The handler should call the deleteBookmark method with event 
        and index (template string) as its parameters
    END OF PART 2 - TEST AND DEBUG YOUR CODE

    PART 3 - Add a bookmark
    -   Add the function addBookmark.  It has event as its parameter.
        -   Because the textboxes for entering bookmark info are in a form, you will
            need to prevent the form from being submitted (which is the default behavior)
            like you prevented the delete link in ToDoList from going to a new page.  
        -   get the url and the description from the form and create a bookmark object. 
            Use the url for both the link and the title.  Leave the image blank.
        -   add the new bookmark to the list
        -   call fillBookmarksList
        -   clear the form on the UI
    -   Add a onsubmit handler to the form in the constructor.  
        It should call addBookmark.  You must bind this to the class because this will be the form
        when the submit handler is called if you don't.
    END OF PART 3 - TEST AND DEBUG YOUR CODE

    EXTRA CREDIT: 
    -   Do something on the page to draw attention to the form when you enter and leave 
        the form.  See my screen shot and the styles in the css file to an idea.

*/

/*  THIS IS NECESSARY FOR TESTING ANY OF YOUR CODE
    declare a variable bookmarker
    Add a window on load event handler that instantiates a Bookmarker object.  
    Use and arrow or anonymous function
*/

