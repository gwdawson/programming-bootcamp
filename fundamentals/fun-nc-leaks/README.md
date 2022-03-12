# Instructions

Northcoders have set up an api to serve data about past and present employees here: https://nc-leaks.herokuapp.com. A northcoders whistleblower has left you some instructions on how to obtain this data.

Your first task is to retrieve the instructions left for you by your mole on the inside...

- Make a request using node's `https` module to the following endpoint to get the instructions left for you: `/api/confidential`

- Once you have your instructions, save them in a markdown file (a file with a `.md` extension)

- That is all...

> Some tips to guide you:
>
> - Once you've finished building up the `body` from each of the packets you receive, this `body` of your response will be a _stringified_ JSON object. How can you turn this into a useable object?
> - You should now have an object with a key of `instructions` holding the value of a long string (with markdown formatting embedded in it). Only save this string containing your instructions to a markdown file - you don't need to save the whole response object.
