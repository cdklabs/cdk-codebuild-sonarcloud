# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CDKCodeBuildSonarcloud <a name="CDKCodeBuildSonarcloud" id="cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud"></a>

#### Initializers <a name="Initializers" id="cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud.Initializer"></a>

```typescript
import { CDKCodeBuildSonarcloud } from 'cdk-codebuild-sonarcloud'

new CDKCodeBuildSonarcloud(scope: Construct, id: string, props: CDKCodeBuildSonarcloudProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloudProps">CDKCodeBuildSonarcloudProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloudProps">CDKCodeBuildSonarcloudProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud.isConstruct"></a>

```typescript
import { CDKCodeBuildSonarcloud } from 'cdk-codebuild-sonarcloud'

CDKCodeBuildSonarcloud.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud.property.buildAction">buildAction</a></code> | <code>aws-cdk-lib.aws_codepipeline_actions.CodeBuildAction</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildAction`<sup>Required</sup> <a name="buildAction" id="cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloud.property.buildAction"></a>

```typescript
public readonly buildAction: CodeBuildAction;
```

- *Type:* aws-cdk-lib.aws_codepipeline_actions.CodeBuildAction

---


## Structs <a name="Structs" id="Structs"></a>

### CDKCodeBuildSonarcloudProps <a name="CDKCodeBuildSonarcloudProps" id="cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloudProps"></a>

#### Initializer <a name="Initializer" id="cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloudProps.Initializer"></a>

```typescript
import { CDKCodeBuildSonarcloudProps } from 'cdk-codebuild-sonarcloud'

const cDKCodeBuildSonarcloudProps: CDKCodeBuildSonarcloudProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloudProps.property.sonarOrganizationName">sonarOrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloudProps.property.sonarProjectName">sonarProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloudProps.property.sourceOutput">sourceOutput</a></code> | <code>aws-cdk-lib.aws_codepipeline.Artifact</code> | *No description.* |

---

##### `sonarOrganizationName`<sup>Required</sup> <a name="sonarOrganizationName" id="cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloudProps.property.sonarOrganizationName"></a>

```typescript
public readonly sonarOrganizationName: string;
```

- *Type:* string

---

##### `sonarProjectName`<sup>Required</sup> <a name="sonarProjectName" id="cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloudProps.property.sonarProjectName"></a>

```typescript
public readonly sonarProjectName: string;
```

- *Type:* string

---

##### `sourceOutput`<sup>Required</sup> <a name="sourceOutput" id="cdk-codebuild-sonarcloud.CDKCodeBuildSonarcloudProps.property.sourceOutput"></a>

```typescript
public readonly sourceOutput: Artifact;
```

- *Type:* aws-cdk-lib.aws_codepipeline.Artifact

---



