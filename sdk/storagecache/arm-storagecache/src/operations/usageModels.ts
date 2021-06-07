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
import * as Mappers from "../models/usageModelsMappers";
import * as Parameters from "../models/parameters";
import { StorageCacheManagementClientContext } from "../storageCacheManagementClientContext";

/** Class representing a UsageModels. */
export class UsageModels {
  private readonly client: StorageCacheManagementClientContext;

  /**
   * Create a UsageModels.
   * @param {StorageCacheManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageCacheManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the list of Cache Usage Models available to this subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsageModelsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.UsageModelsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.UsageModelsResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UsageModelsResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UsageModelsResult>, callback?: msRest.ServiceCallback<Models.UsageModelsResult>): Promise<Models.UsageModelsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.UsageModelsListResponse>;
  }

  /**
   * Get the list of Cache Usage Models available to this subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsageModelsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.UsageModelsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.UsageModelsResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UsageModelsResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UsageModelsResult>, callback?: msRest.ServiceCallback<Models.UsageModelsResult>): Promise<Models.UsageModelsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.UsageModelsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.StorageCache/usageModels",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UsageModelsResult
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
      bodyMapper: Mappers.UsageModelsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
