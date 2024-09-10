// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//To use the example below, create a CDK app, copy the code in your app's lib directory and replace the parameters in <>.

//variables
const pathToConstruct = '';
const sonarOrganizationName = '';
const sonarProjectName = '';

import * as cdk from 'aws-cdk-lib';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions';
import { Construct } from 'constructs';
const CDKCodeBuildSonarcloud = require(pathToConstruct);

export class TestExamplesStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
      // Define source action for CodePipeline
      const sourceOutput = new codepipeline.Artifact();
  
      // Create a GitHub source action
      const githubSource = new codepipeline_actions.GitHubSourceAction({
        actionName: 'GitHub_Source',
        owner: '<OWNER>',
        repo: '<REPO>',
        branch: 'main',
        oauthToken: cdk.SecretValue.secretsManager('github-token'),
        output: sourceOutput,
      });
  
      const sonarcloudScan = new CDKCodeBuildSonarcloud(this, 'SonarcloudBuildAction', {
        sourceOutput: sourceOutput,
        sonarOrganizationName: sonarOrganizationName,
        sonarProjectName: sonarProjectName,
      });
  
      //declare S3 bucket with S3 native encryption
      const artifactBucket = new cdk.aws_s3.Bucket(this, 'bucketArtifact', {
        encryption: cdk.aws_s3.BucketEncryption.S3_MANAGED,
      });
  
  
      // Create CodePipeline with source and build stages
      new codepipeline.Pipeline(this, 'SonarCloudPipeline', {
        stages: [
          {
            stageName: 'Source',
            actions: [githubSource],
          },
          {
            stageName: 'Review',
            actions: [sonarcloudScan.buildAction],
          },
        ],
        artifactBucket: artifactBucket,
      });
    }
  }