/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/azureFirewallsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a AzureFirewalls. */
export class AzureFirewalls {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a AzureFirewalls.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified Azure Firewall.
   * @param resourceGroupName The name of the resource group.
   * @param azureFirewallName The name of the Azure Firewall.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, azureFirewallName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,azureFirewallName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified Azure Firewall.
   * @param resourceGroupName The name of the resource group.
   * @param azureFirewallName The name of the Azure Firewall.
   * @param [options] The optional parameters
   * @returns Promise<Models.AzureFirewallsGetResponse>
   */
  get(resourceGroupName: string, azureFirewallName: string, options?: msRest.RequestOptionsBase): Promise<Models.AzureFirewallsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param azureFirewallName The name of the Azure Firewall.
   * @param callback The callback
   */
  get(resourceGroupName: string, azureFirewallName: string, callback: msRest.ServiceCallback<Models.AzureFirewall>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param azureFirewallName The name of the Azure Firewall.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, azureFirewallName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureFirewall>): void;
  get(resourceGroupName: string, azureFirewallName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AzureFirewall>, callback?: msRest.ServiceCallback<Models.AzureFirewall>): Promise<Models.AzureFirewallsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        azureFirewallName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AzureFirewallsGetResponse>;
  }

  /**
   * Creates or updates the specified Azure Firewall.
   * @param resourceGroupName The name of the resource group.
   * @param azureFirewallName The name of the Azure Firewall.
   * @param parameters Parameters supplied to the create or update Azure Firewall operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AzureFirewallsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, azureFirewallName: string, parameters: Models.AzureFirewall, options?: msRest.RequestOptionsBase): Promise<Models.AzureFirewallsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,azureFirewallName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AzureFirewallsCreateOrUpdateResponse>;
  }

  /**
   * Lists all Azure Firewalls in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.AzureFirewallsListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AzureFirewallsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AzureFirewallListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureFirewallListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AzureFirewallListResult>, callback?: msRest.ServiceCallback<Models.AzureFirewallListResult>): Promise<Models.AzureFirewallsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AzureFirewallsListResponse>;
  }

  /**
   * Gets all the Azure Firewalls in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.AzureFirewallsListAllResponse>
   */
  listAll(options?: msRest.RequestOptionsBase): Promise<Models.AzureFirewallsListAllResponse>;
  /**
   * @param callback The callback
   */
  listAll(callback: msRest.ServiceCallback<Models.AzureFirewallListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureFirewallListResult>): void;
  listAll(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AzureFirewallListResult>, callback?: msRest.ServiceCallback<Models.AzureFirewallListResult>): Promise<Models.AzureFirewallsListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.AzureFirewallsListAllResponse>;
  }

  /**
   * Deletes the specified Azure Firewall.
   * @param resourceGroupName The name of the resource group.
   * @param azureFirewallName The name of the Azure Firewall.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, azureFirewallName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        azureFirewallName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates the specified Azure Firewall.
   * @param resourceGroupName The name of the resource group.
   * @param azureFirewallName The name of the Azure Firewall.
   * @param parameters Parameters supplied to the create or update Azure Firewall operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, azureFirewallName: string, parameters: Models.AzureFirewall, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        azureFirewallName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Lists all Azure Firewalls in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AzureFirewallsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AzureFirewallsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AzureFirewallListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureFirewallListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AzureFirewallListResult>, callback?: msRest.ServiceCallback<Models.AzureFirewallListResult>): Promise<Models.AzureFirewallsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AzureFirewallsListNextResponse>;
  }

  /**
   * Gets all the Azure Firewalls in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AzureFirewallsListAllNextResponse>
   */
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AzureFirewallsListAllNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AzureFirewallListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureFirewallListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AzureFirewallListResult>, callback?: msRest.ServiceCallback<Models.AzureFirewallListResult>): Promise<Models.AzureFirewallsListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.AzureFirewallsListAllNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls/{azureFirewallName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.azureFirewallName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AzureFirewall
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AzureFirewallListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/azureFirewalls",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AzureFirewallListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls/{azureFirewallName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.azureFirewallName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls/{azureFirewallName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.azureFirewallName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.AzureFirewall,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AzureFirewall
    },
    201: {
      bodyMapper: Mappers.AzureFirewall
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AzureFirewallListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AzureFirewallListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
