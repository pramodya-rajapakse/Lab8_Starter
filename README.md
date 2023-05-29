# Lab 8 - Starter
Pramodya Rajapakse

1. The automated tests should be in a Github action because that way they can be run automatically, without needing to spend time running it locally on the developer's end, and it can be at every push, so the code can be tested at every stage of development from the beginning. This will allow you to catch errors and changes you want to make early in development.
2. No, testing if a function is returning the correct output is more a unit test.
3. No, you would not use unit testing for this, at it involves checking multiple part of your code. You have to check if the message is written up properly, sent accordingly, and then recieved by the other user, so this is more like end-to-end testing.
4. Yes, you would use unit testing for this feature, since it involves testing a single part of your code. You only need to check whether a given message is sent, depending on its length, which you can test in isolation without involving other parts of your code.  
