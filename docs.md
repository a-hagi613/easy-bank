# GitHub Actions: An Overview

GitHub Actions is a CI/CD (Continuous Integration/Continuous Deployment) solution provided by GitHub. It allows you to automate, customize, and execute your software development workflows right in your GitHub repository. You can write individual tasks, called actions, and combine them to create a custom workflow.



## Why Use GitHub Actions?

1. **Automated workflows**: You can set up workflows to automatically build, test, package, release, or deploy your project. This reduces the manual effort required and ensures consistency.

2. **Customizable**: You can create your own actions or use and customize actions shared by the GitHub community.

3. **Integrated with GitHub**: Being a part of GitHub, it provides seamless integration with repositories. It can respond to various GitHub events like a push, pull request, or issue creation.

4. **Matrix Builds**: You can test your code against multiple versions of a runtime, operating system, or tool, all in parallel.

5. **Live logs**: You can see real-time logs of your workflows, which helps in debugging.

6. **Built-in secret store**: You can store sensitive data like API keys, passwords, or certificates securely.

---


# Workflow Documentation Example
```yaml
name: Final Build-Unit Tests-CodeQL Analysis

on:
  pull_request:
    types: [opened, synchronize, reopened]
    branches:
      - main
```
The provided workflow is named "Final Build-Unit Tests-CodeQL Analysis". It is triggered on pull request events such as when a pull request is opened, synchronized, or reopened against the main branch. The workflow consists of three jobs: `build`, `unit-tests`, and `codeql-analysis`.



## Job 1: Build

This job runs on the latest version of Ubuntu. It uses a matrix strategy to test against Node.js version 18.x.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x]
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}
          cache: "npm"
      - run: npm i
      - run: npm run build
```



### Steps:

1. **Checkout**: The `actions/checkout@v2` action checks out your repository onto the runner, so the workflow can access it.

2. **Setup Node.js**: The `actions/setup-node@v2` action sets up a Node.js environment using the version specified in the matrix. It also caches npm dependencies to speed up subsequent runs.

3. **Install Dependencies**: `npm i` installs the project dependencies.

4. **Build**: `npm run build` builds the project.

   

## Job 2: Unit Tests

This job also runs on the latest version of Ubuntu and uses Node.js version 18.x. It depends on the `build` job, meaning it will only run if the `build` job completes successfully.

```yaml
unit-tests:
  runs-on: ubuntu-latest
  needs: build
  strategy:
    matrix:
      node-version: [18.x]
  steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
        cache: "npm"
    - run: npm i
    - run: npm run test
```



### Steps:

The steps are similar to the `build` job, but the final step runs the unit tests using `npm run test`.



## Job 3: CodeQL Analysis
The final part of the workflow is the CoddeQL analysis. 


## CodeQL: An Overview
CodeQL is a semantic code analysis engine and language developed by GitHub. It treats code as data allowing you to query your codebase in the same way you query a database. CodeQL is designed to analyze the source code of programs and find potential vulnerabilities, bugs, or violations of coding standards.


## How CodeQL Works

CodeQL converts your codebase into a relational database, or a 'codebase-as-a-database'. This database can then be queried using CodeQL query language, which is an object-oriented variant of SQL. The queries help you explore your code to find bugs and security vulnerabilities.

## Benefits of CodeQL

1. **Security**: CodeQL can identify complex security vulnerabilities in the codebase that traditional static analysis tools might miss.

2. **Precision**: CodeQL queries are designed to be precise and reduce the number of false positives.

3. **Customizability**: You can write your own CodeQL queries to enforce specific coding standards or to find specific code patterns in your codebase.

4. **Language Agnostic**: CodeQL supports a wide range of programming languages including C/C++, C#, Java, JavaScript/TypeScript, Python, and Go.

5. **Integration with GitHub**: CodeQL is deeply integrated with GitHub. The results of the CodeQL analysis are available in the GitHub Security tab of the repository.

## Why Use CodeQL?

1. **Proactive Security**: CodeQL helps in identifying the vulnerabilities during the development phase itself, even before the code is deployed. This proactive approach helps in reducing the potential damage.

2. **Code Quality**: By identifying bugs and non-standard code patterns, CodeQL helps in improving the overall quality of the code.

3. **Regulatory Compliance**: CodeQL can help in achieving compliance with coding standards and regulations, which is particularly useful in industries like healthcare or finance.

4. **Knowledge Sharing**: CodeQL queries can be shared and reused, allowing teams to benefit from the security expertise of others.


This job performs a CodeQL (Code Query Language) analysis to find potential vulnerabilities in the code. It runs on the latest version of Ubuntu and depends on the `unit-tests` job.

```yaml
codeql-analysis:
  runs-on: ubuntu-latest
  needs: unit-tests
  strategy:
    fail-fast: false
    matrix:
      language: ["javascript"]
  steps:
    - name: Checkout repository
      uses: actions/checkout@v2
      with:
        token: ${{ secrets.CODE_QL_PAT }}
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v2
      with:
        languages: ${{ matrix.language }}
    - name: Autobuild
      uses: github/codeql-action/autobuild@v2
    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v2
      with:
        category: "/language:${{matrix.language}}"
```

### Steps:

1. **Checkout**: The repository is checked out using a Personal Access Token (PAT) stored in the `CODE_QL_PAT` secret.

2. **Initialize CodeQL**: The `github/codeql-action/init@v2` action initializes the CodeQL tools and config

3. **Autobuild**: The `github/codeql-action/autobuild@v2` action compiles the code using the correct build system for the language used, which is necessary for CodeQL analysis.

4. **Perform CodeQL Analysis**: The `github/codeql-action/analyze@v2` action performs the actual CodeQL analysis. The results are then uploaded to GitHub, and can be viewed in the security tab of the repository.

This workflow ensures that every pull request is built successfully, passes unit tests, and does not introduce any new potential security vulnerabilities as detected by CodeQL. It helps maintain the code quality and security of the project.



# Here is a visual example of how our workflow would run if a pull request was to be made:

- create pull request
- checck to see if all actions pass
- merge pull request

https://github.com/a-hagi613/easy-bank/assets/92589940/4048e80c-24db-4407-9490-425741eedd4e

