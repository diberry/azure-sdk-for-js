/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  LinkedServiceImpl,
  DatasetImpl,
  PipelineImpl,
  PipelineRunImpl,
  TriggerImpl,
  TriggerRunImpl,
  DataFlowImpl,
  DataFlowDebugSessionImpl,
  SqlScriptImpl,
  SparkJobDefinitionImpl,
  NotebookImpl,
  WorkspaceImpl,
  SqlPoolsImpl,
  BigDataPoolsImpl,
  IntegrationRuntimesImpl,
  LibraryImpl,
  WorkspaceGitRepoManagementImpl
} from "./operations";
import {
  LinkedService,
  Dataset,
  Pipeline,
  PipelineRun,
  Trigger,
  TriggerRun,
  DataFlow,
  DataFlowDebugSession,
  SqlScript,
  SparkJobDefinition,
  Notebook,
  Workspace,
  SqlPools,
  BigDataPools,
  IntegrationRuntimes,
  Library,
  WorkspaceGitRepoManagement
} from "./operationsInterfaces";
import { ArtifactsClientContext } from "./artifactsClientContext";
import { ArtifactsClientOptionalParams } from "./models";

export class ArtifactsClient extends ArtifactsClientContext {
  /**
   * Initializes a new instance of the ArtifactsClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param endpoint The workspace development endpoint, for example
   *                 https://myworkspace.dev.azuresynapse.net.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    endpoint: string,
    options?: ArtifactsClientOptionalParams
  ) {
    super(credentials, endpoint, options);
    this.linkedService = new LinkedServiceImpl(this);
    this.dataset = new DatasetImpl(this);
    this.pipeline = new PipelineImpl(this);
    this.pipelineRun = new PipelineRunImpl(this);
    this.trigger = new TriggerImpl(this);
    this.triggerRun = new TriggerRunImpl(this);
    this.dataFlow = new DataFlowImpl(this);
    this.dataFlowDebugSession = new DataFlowDebugSessionImpl(this);
    this.sqlScript = new SqlScriptImpl(this);
    this.sparkJobDefinition = new SparkJobDefinitionImpl(this);
    this.notebook = new NotebookImpl(this);
    this.workspace = new WorkspaceImpl(this);
    this.sqlPools = new SqlPoolsImpl(this);
    this.bigDataPools = new BigDataPoolsImpl(this);
    this.integrationRuntimes = new IntegrationRuntimesImpl(this);
    this.library = new LibraryImpl(this);
    this.workspaceGitRepoManagement = new WorkspaceGitRepoManagementImpl(this);
  }

  linkedService: LinkedService;
  dataset: Dataset;
  pipeline: Pipeline;
  pipelineRun: PipelineRun;
  trigger: Trigger;
  triggerRun: TriggerRun;
  dataFlow: DataFlow;
  dataFlowDebugSession: DataFlowDebugSession;
  sqlScript: SqlScript;
  sparkJobDefinition: SparkJobDefinition;
  notebook: Notebook;
  workspace: Workspace;
  sqlPools: SqlPools;
  bigDataPools: BigDataPools;
  integrationRuntimes: IntegrationRuntimes;
  library: Library;
  workspaceGitRepoManagement: WorkspaceGitRepoManagement;
}
