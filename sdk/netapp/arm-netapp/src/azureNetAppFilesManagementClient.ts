/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AzureNetAppFilesManagementClientContext } from "./azureNetAppFilesManagementClientContext";


class AzureNetAppFilesManagementClient extends AzureNetAppFilesManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  netAppResource: operations.NetAppResource;
  accounts: operations.Accounts;
  pools: operations.Pools;
  volumes: operations.Volumes;
  snapshots: operations.Snapshots;
  snapshotPolicies: operations.SnapshotPolicies;
  accountBackups: operations.AccountBackups;
  backups: operations.Backups;
  backupPolicies: operations.BackupPolicies;
  vaults: operations.Vaults;

  /**
   * Initializes a new instance of the AzureNetAppFilesManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.AzureNetAppFilesManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.netAppResource = new operations.NetAppResource(this);
    this.accounts = new operations.Accounts(this);
    this.pools = new operations.Pools(this);
    this.volumes = new operations.Volumes(this);
    this.snapshots = new operations.Snapshots(this);
    this.snapshotPolicies = new operations.SnapshotPolicies(this);
    this.accountBackups = new operations.AccountBackups(this);
    this.backups = new operations.Backups(this);
    this.backupPolicies = new operations.BackupPolicies(this);
    this.vaults = new operations.Vaults(this);
  }
}

// Operation Specifications

export {
  AzureNetAppFilesManagementClient,
  AzureNetAppFilesManagementClientContext,
  Models as AzureNetAppFilesManagementModels,
  Mappers as AzureNetAppFilesManagementMappers
};
export * from "./operations";
