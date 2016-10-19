/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".


//Listing 11-15. Assigning and deassigning subordinates
myapp.AddEditEngineer.AssignSubordinate_execute = function (screen) {

    screen.EngineerToAdd.Manager = screen.Engineer;

};
myapp.AddEditEngineer.DeassignSubordinate_execute = function (screen) {

    if (screen.Subordinates.selectedItem) {
        screen.Subordinates.selectedItem.Manager = null;
    }

};
