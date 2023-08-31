# GitHub Actions Continuous Integration/Continuous Deployment (CI/CD) Pipeline: An Overview

GitHub Actions is a CI/CD solution provided by GitHub. It allows you to automate, customize, and execute your software development workflows right in your GitHub repository. You can write individual tasks, called actions, and combine them to create a custom workflow.



## Why Use GitHub Actions?

1. **Automated workflows**: You can set up workflows to automatically build, test, package, release, or deploy your project. This reduces the manual effort required and ensures consistency.

2. **Customizable**: You can create your own actions or use and customize actions shared by the GitHub community.

3. **Integrated with GitHub**: Being a part of GitHub, it provides seamless integration with repositories. It can respond to various GitHub events like a push, pull request, or issue creation.

4. **Matrix Builds**: You can test your code against multiple versions of a runtime, operating system, or tool, all in parallel.

5. **Live logs**: You can see real-time logs of your workflows, which helps in debugging.

6. **Built-in secret store**: You can store sensitive data like API keys, passwords, or certificates securely.

---


# Quick Guide to Creating GitHub Actions

Creating a GitHub Action involves setting up a specific directory structure in your repository and creating a workflow file (YAML format) that defines the actions to be performed.

## Step 1: Set Up the Workflow Directory

In your GitHub repository, you need to create a directory named `.github/workflows`. GitHub looks for workflow files in this directory.

You can create the directory using the GitHub web interface or by cloning your repository and creating the directory locally.

## Step 2: Create a Workflow File

In the `.github/workflows` directory, create a new file with a `.yml` or `.yaml` extension. The name of the file will be the name of your workflow




# Workflow File Example
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

6. **Regulatory Compliance**: CodeQL can help in achieving compliance with coding standards and regulations, which is particularly useful in industries like healthcare or finance.



This job performs a CodeQL (Code Query Language) analysis to find potential vulnerabilities in the code. It runs on the latest version of Ubuntu and depends on the `unit-tests` job passing to fire off.

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

This workflow ensures that every pull request to the main branch is built successfully, passes unit tests, and does not introduce any new potential security vulnerabilities as detected by CodeQL. It helps maintain the code quality and security of the project.



# Here is a visual example of how our workflow would run if a pull request was to be made:

- create pull request
- check to see if all actions pass
- merge pull request

https://github.com/a-hagi613/easy-bank/assets/92589940/4048e80c-24db-4407-9490-425741eedd4e

# Deploying Our Project

By closing the pull request and merging the valid code into our main branch we have completed the first part of the CICD pipeline, which is continuous intergration. Now we can continue with the second part, which is continuous delpoyment. To demonstrate  we will create a new workflow that will deploy our updated code to Micosoft Azure's Static Web App service.  Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers. It provides a range of cloud services, including those for computing, analytics, storage, and networking.

## Azure Static Web Apps

Azure Static Web Apps is a service that automatically builds and deploys full-stack web apps to Azure from a GitHub repository. This service is ideal for apps with static frontends and optional dynamic backends powered by serverless APIs.

### Why Use Azure Static Web Apps?

1. **Automated CI/CD**: Azure Static Web Apps automatically builds and deploys your app on every push to your repository.

2. **Integrated with GitHub**: The service is directly integrated with GitHub, making it easy to set up deployment workflows.

3. **Serverless APIs**: You can create serverless APIs in your preferred language that are automatically versioned and deployed alongside your static content.

4. **Free SSL Certificates**: Azure Static Web Apps automatically creates a free SSL certificate for your app and takes care of renewing it as well.

---

# Deployment Workflow File

```yaml
name: Azure Static Web Apps Deployment

on:
  push:
    branches:
      - main
```

The provided workflow is named "Azure Static Web Apps Deployment". It is triggered on push events to the main branch. The workflow consists of a single job: `build_and_deploy_job`.

## Job: Build and Deploy Job

This job runs on the latest version of Ubuntu. It is designed to build and deploy your app to Azure Static Web Apps.

```yaml
jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v2
        with:
          submodules: true
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_ }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/" # App source code path
          api_location: "" # Api source code path - optional
          output_location: "/dist" # Built app content directory - optional
```

### Steps:

1. **Checkout**: The `actions/checkout@v2` action checks out your repository onto the runner, so the workflow can access it. The `submodules: true` option ensures that all Git submodules are also checked out.

2. **Build And Deploy**: The `Azure/static-web-apps-deploy@v1` action builds and deploys your app to Azure Static Web Apps. It uses the `AZURE_STATIC_WEB_APPS_API_TOKEN_` secret for authentication with Azure. The `GITHUB_TOKEN` secret is used for authentication with GitHub. The `action: "upload"` option specifies that the action should upload the built app to Azure. The `app_location: "/"` option specifies the location of the app's source code. The `output_location: "/dist"` option specifies the location of the built app content.
3. **Deployment Successful**: Once the deployment is succesful a link will be provided to the url of your deployed project.

![image](https://github.com/a-hagi613/easy-bank/assets/92589940/567a6763-cb7a-4f2c-9d22-cb204d744f3a)
![image](https://github.com/a-hagi613/easy-bank/assets/92589940/8d6546e0-de88-4af0-b5da-6214d9a39916)

