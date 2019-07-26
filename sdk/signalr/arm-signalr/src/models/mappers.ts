/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/core-arm";
import * as coreHttp from "@azure/core-http";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const OperationDisplay: coreHttp.CompositeMapper = {
  serializedName: "OperationDisplay",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Dimension: coreHttp.CompositeMapper = {
  serializedName: "Dimension",
  type: {
    name: "Composite",
    className: "Dimension",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      internalName: {
        serializedName: "internalName",
        type: {
          name: "String"
        }
      },
      toBeExportedForShoebox: {
        serializedName: "toBeExportedForShoebox",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const MetricSpecification: coreHttp.CompositeMapper = {
  serializedName: "MetricSpecification",
  type: {
    name: "Composite",
    className: "MetricSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      displayDescription: {
        serializedName: "displayDescription",
        type: {
          name: "String"
        }
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      aggregationType: {
        serializedName: "aggregationType",
        type: {
          name: "String"
        }
      },
      fillGapWithZero: {
        serializedName: "fillGapWithZero",
        type: {
          name: "String"
        }
      },
      category: {
        serializedName: "category",
        type: {
          name: "String"
        }
      },
      dimensions: {
        serializedName: "dimensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Dimension"
            }
          }
        }
      }
    }
  }
};

export const ServiceSpecification: coreHttp.CompositeMapper = {
  serializedName: "ServiceSpecification",
  type: {
    name: "Composite",
    className: "ServiceSpecification",
    modelProperties: {
      metricSpecifications: {
        serializedName: "metricSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetricSpecification"
            }
          }
        }
      }
    }
  }
};

export const OperationProperties: coreHttp.CompositeMapper = {
  serializedName: "OperationProperties",
  type: {
    name: "Composite",
    className: "OperationProperties",
    modelProperties: {
      serviceSpecification: {
        serializedName: "serviceSpecification",
        type: {
          name: "Composite",
          className: "ServiceSpecification"
        }
      }
    }
  }
};

export const Operation: coreHttp.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "OperationProperties"
        }
      }
    }
  }
};

export const NameAvailabilityParameters: coreHttp.CompositeMapper = {
  serializedName: "NameAvailabilityParameters",
  type: {
    name: "Composite",
    className: "NameAvailabilityParameters",
    modelProperties: {
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NameAvailability: coreHttp.CompositeMapper = {
  serializedName: "NameAvailability",
  type: {
    name: "Composite",
    className: "NameAvailability",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceSku: coreHttp.CompositeMapper = {
  serializedName: "ResourceSku",
  type: {
    name: "Composite",
    className: "ResourceSku",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "String"
        }
      },
      family: {
        serializedName: "family",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Resource: coreHttp.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: coreHttp.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const SignalRResource: coreHttp.CompositeMapper = {
  serializedName: "SignalRResource",
  type: {
    name: "Composite",
    className: "SignalRResource",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceSku"
        }
      },
      hostNamePrefix: {
        serializedName: "properties.hostNamePrefix",
        type: {
          name: "String"
        }
      },
      features: {
        serializedName: "properties.features",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SignalRFeature"
            }
          }
        }
      },
      cors: {
        serializedName: "properties.cors",
        type: {
          name: "Composite",
          className: "SignalRCorsSettings"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      externalIP: {
        readOnly: true,
        serializedName: "properties.externalIP",
        type: {
          name: "String"
        }
      },
      hostName: {
        readOnly: true,
        serializedName: "properties.hostName",
        type: {
          name: "String"
        }
      },
      publicPort: {
        readOnly: true,
        serializedName: "properties.publicPort",
        type: {
          name: "Number"
        }
      },
      serverPort: {
        readOnly: true,
        serializedName: "properties.serverPort",
        type: {
          name: "Number"
        }
      },
      version: {
        serializedName: "properties.version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SignalRFeature: coreHttp.CompositeMapper = {
  serializedName: "SignalRFeature",
  type: {
    name: "Composite",
    className: "SignalRFeature",
    modelProperties: {
      flag: {
        required: true,
        isConstant: true,
        serializedName: "flag",
        defaultValue: 'ServiceMode',
        type: {
          name: "String"
        }
      },
      value: {
        required: true,
        serializedName: "value",
        constraints: {
          MaxLength: 128,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const SignalRCorsSettings: coreHttp.CompositeMapper = {
  serializedName: "SignalRCorsSettings",
  type: {
    name: "Composite",
    className: "SignalRCorsSettings",
    modelProperties: {
      allowedOrigins: {
        serializedName: "allowedOrigins",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const SignalRCreateOrUpdateProperties: coreHttp.CompositeMapper = {
  serializedName: "SignalRCreateOrUpdateProperties",
  type: {
    name: "Composite",
    className: "SignalRCreateOrUpdateProperties",
    modelProperties: {
      hostNamePrefix: {
        serializedName: "hostNamePrefix",
        type: {
          name: "String"
        }
      },
      features: {
        serializedName: "features",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SignalRFeature"
            }
          }
        }
      },
      cors: {
        serializedName: "cors",
        type: {
          name: "Composite",
          className: "SignalRCorsSettings"
        }
      }
    }
  }
};

export const SignalRKeys: coreHttp.CompositeMapper = {
  serializedName: "SignalRKeys",
  type: {
    name: "Composite",
    className: "SignalRKeys",
    modelProperties: {
      primaryKey: {
        serializedName: "primaryKey",
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        serializedName: "secondaryKey",
        type: {
          name: "String"
        }
      },
      primaryConnectionString: {
        serializedName: "primaryConnectionString",
        type: {
          name: "String"
        }
      },
      secondaryConnectionString: {
        serializedName: "secondaryConnectionString",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RegenerateKeyParameters: coreHttp.CompositeMapper = {
  serializedName: "RegenerateKeyParameters",
  type: {
    name: "Composite",
    className: "RegenerateKeyParameters",
    modelProperties: {
      keyType: {
        serializedName: "keyType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SignalRUpdateParameters: coreHttp.CompositeMapper = {
  serializedName: "SignalRUpdateParameters",
  type: {
    name: "Composite",
    className: "SignalRUpdateParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceSku"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "SignalRCreateOrUpdateProperties"
        }
      }
    }
  }
};

export const SignalRCreateParameters: coreHttp.CompositeMapper = {
  serializedName: "SignalRCreateParameters",
  type: {
    name: "Composite",
    className: "SignalRCreateParameters",
    modelProperties: {
      ...SignalRUpdateParameters.type.modelProperties,
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SignalRUsageName: coreHttp.CompositeMapper = {
  serializedName: "SignalRUsageName",
  type: {
    name: "Composite",
    className: "SignalRUsageName",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      localizedValue: {
        serializedName: "localizedValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SignalRUsage: coreHttp.CompositeMapper = {
  serializedName: "SignalRUsage",
  type: {
    name: "Composite",
    className: "SignalRUsage",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      currentValue: {
        serializedName: "currentValue",
        type: {
          name: "Number"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "Composite",
          className: "SignalRUsageName"
        }
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationList: coreHttp.CompositeMapper = {
  serializedName: "OperationList",
  type: {
    name: "Composite",
    className: "OperationList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SignalRResourceList: coreHttp.CompositeMapper = {
  serializedName: "SignalRResourceList",
  type: {
    name: "Composite",
    className: "SignalRResourceList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SignalRResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SignalRUsageList: coreHttp.CompositeMapper = {
  serializedName: "SignalRUsageList",
  type: {
    name: "Composite",
    className: "SignalRUsageList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SignalRUsage"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
