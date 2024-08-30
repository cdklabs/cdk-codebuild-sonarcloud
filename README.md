This CDK construct creates an [AWS Codebuild](https://www.sonarsource.com/products/sonarcloud/) action to perform static code analysis using [Sonarcloud](https://www.sonarsource.com/products/sonarcloud/).

# Getting started
Here is how to include the construct in your CDK code :
```javascript
const sonarcloudScan = new CDKCodeBuildSonarcloud(this, 'SonarcloudBuildAction', {
      sourceOutput: sourceOutput,
      sonarOrganizationName: 'my-sonarcloud-organization-name',
      sonarProjectName: 'my-sonarcloud-project-name',
});
```
Check [Here](/examples/codepipeline-example.ts) for an example on how to use the construct.

# Security
A Sonarcloud account is required to use this construct. Create a Sonarcloud [token](https://docs.sonarsource.com/sonarcloud/advanced-setup/user-accounts/#user-tokens) to connect securely to Sonarcloud from AWS CodeBuild. Store this token in your AWS account in AWS Secret Manager, name the secret "sonar-token" and use "SONAR_TOKEN" as the secret key.

Please review the [AWS Secret Manager security best practices](https://docs.aws.amazon.com/prescriptive-guidance/latest/secure-sensitive-data-secrets-manager-terraform/best-practices.html) in order to securely create and manage your secret. 