# Prerequisites:
- Node.js and NPM: You should have Node.js and NPM installed.
- AWS CLI: Install and configure the AWS CLI. Ensure you've set up your AWS credentials.
- Serverless Framework: Install the Serverless Framework globally using npm.


## Setting Up a New Serverless Service:
Create a new directory for your serverless service:

```
mkdir my-serverless-service
cd my-serverless-service
npm init -y
```

## Install the Serverless Framework globally using npm
```python
npm install --save-dev serverless | yarn add -D serverless
```

## Create a new Serverless service using a template. 

```serverless create --template aws-nodejs --path . | npx serverless create --template aws-nodejs --path .
```

Navigate to the service directory:
`cd my-serverless-service`


Configuring serverless.yml:
Open the serverless.yml file. This is the configuration file for your service.

Provider: Set the runtime and the AWS region:
`
provider:
  name: aws
  runtime: nodejs14.x
  region: us-east-1
`

Functions: Configure the Lambda function. You'll be referencing the function you saw in handler.js:
`
functions:
  hello:
    handler: handler.hello
`

Deploying Your Service:
`serverless deploy | sls deploy --file serverless-1.yml`

This command packages and deploys your Serverless service to AWS. The first deployment might take a little while. Once it's done, you'll see details about the service in your terminal, including the ARN for your new Lambda function.

Invoking the Lambda Function:
You can invoke the Lambda function from the command line:
`serverless invoke -f hello`

This will return the result of the function execution.

Cleanup:
Once you're done testing, it's a good idea to remove the deployed resources to avoid any AWS charges:

`serverless remove`