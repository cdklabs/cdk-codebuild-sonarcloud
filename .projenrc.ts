import { CdklabsConstructLibrary } from 'cdklabs-projen-project-types';
const project = new CdklabsConstructLibrary({
  author: 'AWS',
  authorAddress: 'aws-cdk-dev@amazon.com',
  cdkVersion: '2.147.1',
  defaultReleaseBranch: 'main',
  jsiiVersion: '5.5.x',
  devDeps: [
    'aws-cdk-lib',
    'cdklabs-projen-project-types',
  ],
  name: 'cdk-codebuild-sonarcloud',
  projenrcTs: true,
  private: false,
  repositoryUrl: 'https://github.com/cdklabs/cdk-codebuild-sonarcloud.git',
  releaseToNpm: true,
  publishToNuget: {
    dotNetNamespace: 'Cdklabs.CdkCodebuildSonarcloud',
    packageId: 'Cdklabs.CdkCodebuildSonarcloud',
  },
  publishToMaven: {
    mavenGroupId: 'io.github.cdklabs',
    mavenServerId: 'central-ossrh',
    javaPackage: 'io.github.cdklabs.codebuildsonarcloud',
    mavenArtifactId: 'cdk-codebuild-sonarcloud',
  },
  publishToPypi: {
    distName: 'cdk-codebuild-sonarcloud',
    module: 'cdk_codebuild_sonarcloud',
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();