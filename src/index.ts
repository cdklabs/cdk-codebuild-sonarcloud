// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export interface CDKCodeBuildSonarcloudProps {
  readonly sourceOutput: codepipeline.Artifact;
  readonly sonarOrganizationName: string;
  readonly sonarProjectName: string;
}

export class CDKCodeBuildSonarcloud extends Construct {
  //Build action to include in your pipeline
  public readonly buildAction: codepipeline_actions.CodeBuildAction;

  constructor(scope: Construct, id: string, props: CDKCodeBuildSonarcloudProps) {
    super(scope, id);

    // Create an IAM policy statement granting access to the secret
    const secretAccessPolicy = new iam.PolicyStatement({
      actions: ['secretsmanager:GetSecretValue'],
      resources: [`arn:aws:secretsmanager:${cdk.Stack.of(this).region}:${cdk.Stack.of(this).account}:secret:sonar-token-*`],
    });

    const projectSonarScan = new codebuild.PipelineProject(this, 'SonarScannerProject', {
      // Configure CodeBuild project for sonarcloud scan
      environment: {
        buildImage: codebuild.LinuxBuildImage.STANDARD_7_0,
      },
      buildSpec: codebuild.BuildSpec.fromObject({
        version: '0.2',
        phases: {
          install: {
            commands: [
              'npm install -g sonar-scanner',
            ],
          },
          build: {
            commands: [
              'SONAR_TOKEN=$(aws secretsmanager get-secret-value --secret-id sonar-token --query SecretString --output text | jq -r .SONAR_TOKEN)',
              `sonar-scanner -Dsonar.organization=${props.sonarOrganizationName} -Dsonar.projectKey=${props.sonarProjectName} -Dsonar.sources=. -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=$SONAR_TOKEN`,
            ],
          },
        },
      }),
    });

    projectSonarScan.addToRolePolicy(secretAccessPolicy);

    // Define build action for CodePipeline
    this.buildAction = new codepipeline_actions.CodeBuildAction({
      actionName: 'SonarScanner_Build',
      project: projectSonarScan,
      input: props.sourceOutput,
    });
  }
}
