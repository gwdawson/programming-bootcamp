# Collaborating with Git

Your task is to work in a pair to practice using git.

## Setup

1. One of you will need to _fork_ this repo to their own account.
2. In the forked repo, go to 'Settings -> Manage Access -> Invite People' and add person 2's github account as a collaborator
3. Then you can both make a local copy of the repo by running `git clone <link-to-pair-1s-forked-repo-here>`. (Remember to `cd` into the repo!)

You are now ready to start the challenges.

## Challenges

### Person 1

1. Using the terminal create a new file called `git-terminology.txt` and add the snippet below to the file:

```txt
git clone <github-link-here> - makes a local copy of the remote repo at the specified link
git status - shows the state of files in our working directory and staging area
git add <file-name> - adds a file from the working directory to the staging area
git commit -m "<message-here>" - makes a commit including all changes in the staging area
```

_Hint: Think about what happens when you use double-quotes to wrap a string that contains double quotes!_

2. Make a new commit to include this change
3. Push this new change up to github

At this point, press refresh on the github page - you should be able to see the newly added file.

### Person 2

4. Pull your pair's changes down from github to your locally cloned repo
5. Now that you also have the `git-terminology.txt`, add the definitions below:

```txt
git log - shows the most recent commits
git push origin main - pushes any recent, locally made commits to the remote repo ('origin') on the main branch
git pull origin main - brings any recent changes to the remote repo's main branch into your local repo
```

6. Create another file called `fun-facts.txt` and add your favourite colour to it.
7. Make commits to include your new changes - _remember_ if you need to write 'and' in the commit message then they should be separate commits.
8. Push your new commits up to github.

Again, press refresh on the github page - you should be able to see the new changes.

### Person 1

9. Pull down the most recent commits.
10. Add your favourite colour to `fun-facts.txt` and commit this change
11. Push up your changes to github
