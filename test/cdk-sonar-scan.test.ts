// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as CDKCodeBuildSonarcloud from '../src/index';

test('construct contains a build project', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestSonarcloudConstructStack');

  // Define source action for CodePipeline
  const sourceOutput = new codepipeline.Artifact();

  //deploy the construct
  new CDKCodeBuildSonarcloud.CDKCodeBuildSonarcloud(stack, 'TestSonarcloudConstruct', {
    sourceOutput: sourceOutput,
    sonarOrganizationName: 'MySonarOrganization',
    sonarProjectName: 'MySonarProject',
  });

  // Prepare the stack for assertions.
  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::CodeBuild::Project', {
    Environment: {
      Image: 'aws/codebuild/standard:7.0',
    },
    Source: {
      Type: 'CODEPIPELINE',
    },
  });
});
