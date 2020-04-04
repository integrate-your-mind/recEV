# Feature ReadMe

### Things to Make Sure Happen Before you Edit
First thing to do is to switch to the feature branch before making edits.
```sh
$ git checkout feature
$ git checkout -b feature_name feature
```

By default, when you make changes, do them off of the branch you create from the Feature Branch. Before you do a push, make sure you pull! 

### How to Use the Feature Branch
Go ahead and create a separate branch off of the feature branch of changes where you will push the changes to the aplication you have made. Then, merge that branch with the feature branch. 

### Command Line Process

Make sure to follow these steps in the command line

```sh
$ git add .
$ git commit -m "Message of the commit"
$ git checkout feature
$ git merge --no-ff feature_name
$ git branch -d feature_name
$ git push origin feature
<<<<<<< HEAD
=======
```
### Code Style Guidelines
#### Resources
[ESLint Rules Reference](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules)
[ESLint Plugin Recommended Settings Reference](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
[ESLint Plugin Recommended Require Type Checking](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.json)
[ESLint Plugin ESLint Recommended](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/eslint-recommended.ts)
<<<<<<< HEAD
=======
>>>>>>> Fixed master readme (#15) (#17)
=======
>>>>>>> feature
>>>>>>> Added ESLint and Configured ESLint config (#22)
