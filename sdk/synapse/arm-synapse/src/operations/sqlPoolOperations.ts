/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/sqlPoolOperationsMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a SqlPoolOperations. */
export class SqlPoolOperations {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a SqlPoolOperations.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of operations performed on the SQL pool.
   * @summary Gets a list of operations performed on the SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolOperationsListResponse>
   */
  list(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolOperationsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, sqlPoolName: string, callback: msRest.ServiceCallback<Models.SqlPoolBlobAuditingPolicySqlPoolOperationListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SqlPoolBlobAuditingPolicySqlPoolOperationListResult>): void;
  list(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SqlPoolBlobAuditingPolicySqlPoolOperationListResult>, callback?: msRest.ServiceCallback<Models.SqlPoolBlobAuditingPolicySqlPoolOperationListResult>): Promise<Models.SqlPoolOperationsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SqlPoolOperationsListResponse>;
  }

  /**
   * Gets a list of operations performed on the SQL pool.
   * @summary Gets a list of operations performed on the SQL pool
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolOperationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolOperationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SqlPoolBlobAuditingPolicySqlPoolOperationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SqlPoolBlobAuditingPolicySqlPoolOperationListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SqlPoolBlobAuditingPolicySqlPoolOperationListResult>, callback?: msRest.ServiceCallback<Models.SqlPoolBlobAuditingPolicySqlPoolOperationListResult>): Promise<Models.SqlPoolOperationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SqlPoolOperationsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/operations",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SqlPoolBlobAuditingPolicySqlPoolOperationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SqlPoolBlobAuditingPolicySqlPoolOperationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
