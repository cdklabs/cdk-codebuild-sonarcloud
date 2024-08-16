// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as cdk from 'aws-cdk-lib';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions';
import { Construct } from 'constructs';
import { CDKCodeBuildSonarcloud } from './index';

export class TestSonarcloudConstructStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //create a codecommit repository
    const TestRepository = new cdk.aws_codecommit.Repository(this, 'TestRepository', {
      repositoryName: 'TestRepository',
    });

    // Define source action for CodePipeline
    const sourceOutput = new codepipeline.Artifact();
    const sourceAction = new codepipeline_actions.CodeCommitSourceAction({
      actionName: 'CodeCommit_Source',
      repository: TestRepository,
      branch: 'main',
      output: sourceOutput,
    });

    const sonarcloudScan = new CDKCodeBuildSonarcloud(this, 'SonarcloudBuildAction', {
      sourceOutput: sourceOutput,
      sonarOrganizationName: '<SONAR Organization>',
      sonarProjectName: '<SONAR Project Name>',
    });

    //declare S3 bucket with S3 native encryption
    const artifactBucket = new cdk.aws_s3.Bucket(this, 'bucketArtifact', {
      encryption: cdk.aws_s3.BucketEncryption.S3_MANAGED,
    });


    // Create CodePipeline with source and build stages
    new codepipeline.Pipeline(this, 'SonarCloudPipeline', {
      pipelineName: 'SonarCloudPipeline',
      stages: [
        {
          stageName: 'Source',
          actions: [sourceAction],
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

const app = new cdk.App();
new TestSonarcloudConstructStack(app, 'TestSonarcloudConstructStack', {});
