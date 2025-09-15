Supporting information

I set up the code in a Page Obejct Model framework. All actions executed on the page/container in one class.
Further, I created a sneltoetsAcceptatie.json file in the support/helpers/locators directory.
In this directory will add all the locators. Different types (i.e. labels, messages, location of elements) and other pages.

I focused on small single tests in the script so it is easy to select which component will be used or not.
When you enter a value in a specific text field, the label of that text field has to be checked once and not every test.

To be done:
- Finish the test, not all fields are filled in (functions are not working yet).
- A script to test all the error messages, these error messages can be put in a seperate locators file.
- Try to get better elements locators which are more robust (ask development to do so, e.g. [data-ta-id=""]).