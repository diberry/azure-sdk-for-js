/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

/** Request parameter to train a new custom model. */
export interface TrainRequest {
  /** Source path containing the training documents. */
  source: string;
  /** Filter to apply to the documents in the source path for training. */
  sourceFilter?: TrainSourceFilter;
  /** Use label file for training a model. */
  useLabelFile?: boolean;
  /** Optional user defined model name (max length: 1024). */
  modelName?: string;
}

/** Filter to apply to the documents in the source path for training. */
export interface TrainSourceFilter {
  /** A case-sensitive prefix string to filter documents in the source path for training. For example, when using a Azure storage blob Uri, use the prefix to restrict sub folders for training. */
  prefix?: string;
  /** A flag to indicate if sub folders within the set of prefix folders will also need to be included when searching for content to be preprocessed. */
  includeSubfolders?: boolean;
}

export interface ErrorResponse {
  error: ErrorInformation;
}

export interface ErrorInformation {
  code: string;
  message: string;
}

/** Response to the get custom model operation. */
export interface Model {
  /** Basic custom model information. */
  modelInfo: ModelInfo;
  /** Keys extracted by the custom model. */
  keys?: KeysResult;
  /** Training result for custom model. */
  trainResult?: TrainResult;
  /** Training result for composed model. */
  composedTrainResults?: TrainResult[];
}

/** Basic custom model information. */
export interface ModelInfo {
  /** Model identifier. */
  modelId: string;
  /** Status of the model. */
  status: ModelStatus;
  /** Date and time (UTC) when the model was created. */
  trainingStartedOn: Date;
  /** Date and time (UTC) when the status was last updated. */
  trainingCompletedOn: Date;
  /** Optional user defined model name (max length: 1024). */
  modelName?: string;
  /** Optional model attributes. */
  attributes?: Attributes;
}

/** Optional model attributes. */
export interface Attributes {
  /** Is this model composed? (default: false). */
  isComposed?: boolean;
}

/** Keys extracted by the custom model. */
export interface KeysResult {
  /** Object mapping clusterIds to a list of keys. */
  clusters: { [propertyName: string]: string[] };
}

/** Custom model training result. */
export interface TrainResult {
  /** List of the documents used to train the model and any errors reported in each document. */
  trainingDocuments: TrainingDocumentInfo[];
  /** List of fields used to train the model and the train operation error reported by each. */
  fields?: FormFieldsReport[];
  /** Average accuracy. */
  averageModelAccuracy?: number;
  /** Model identifier. */
  modelId?: string;
  /** Errors returned during the training operation. */
  errors?: ErrorInformation[];
}

/** Report for a custom model training document. */
export interface TrainingDocumentInfo {
  /** Training document name. */
  name: string;
  /** Total number of pages trained. */
  pageCount: number;
  /** List of errors. */
  errors: ErrorInformation[];
  /** Status of the training operation. */
  status: TrainStatus;
}

/** Report for a custom model training field. */
export interface FormFieldsReport {
  /** Training field name. */
  fieldName: string;
  /** Estimated extraction accuracy for this field. */
  accuracy: number;
}

/** Uri or local path to source data. */
export interface SourcePath {
  /** File source path. */
  source?: string;
}

/** Status and result of the queued analyze operation. */
export interface AnalyzeOperationResult {
  /** Operation status. */
  status: OperationStatus;
  /** Date and time (UTC) when the analyze operation was submitted. */
  createdOn: Date;
  /** Date and time (UTC) when the status was last updated. */
  lastModified: Date;
  /** Results of the analyze operation. */
  analyzeResult?: AnalyzeResult;
}

/** Analyze operation result. */
export interface AnalyzeResult {
  /** Version of schema used for this result. */
  version: string;
  /** Text extracted from the input. */
  readResults: ReadResult[];
  /** Page-level information extracted from the input. */
  pageResults?: PageResult[];
  /** Document-level information extracted from the input. */
  documentResults?: DocumentResult[];
  /** List of errors reported during the analyze operation. */
  errors?: ErrorInformation[];
}

/** Text extracted from a page in the input document. */
export interface ReadResult {
  /** The 1-based page number in the input document. */
  pageNumber: number;
  /** The general orientation of the text in clockwise direction, measured in degrees between (-180, 180]. */
  angle: number;
  /** The width of the image/PDF in pixels/inches, respectively. */
  width: number;
  /** The height of the image/PDF in pixels/inches, respectively. */
  height: number;
  /** The unit used by the width, height and boundingBox properties. For images, the unit is "pixel". For PDF, the unit is "inch". */
  unit: LengthUnit;
  /** The detected language on the page overall. */
  language?: Language;
  /** When includeTextDetails is set to true, a list of recognized text lines. The maximum number of lines returned is 300 per page. The lines are sorted top to bottom, left to right, although in certain cases proximity is treated with higher priority. As the sorting order depends on the detected text, it may change across images and OCR version updates. Thus, business logic should be built upon the actual line location instead of order. */
  lines?: TextLine[];
  /** List of selection marks extracted from the page. */
  selectionMarks?: SelectionMark[];
}

/** An object representing an extracted text line. */
export interface TextLine {
  /** The text content of the line. */
  text: string;
  /** Bounding box of an extracted line. */
  boundingBox: number[];
  /** The detected language of this line, if different from the overall page language. */
  language?: Language;
  /** List of words in the text line. */
  words: TextWord[];
  /** Text appearance properties. */
  appearance?: Appearance;
}

/** An object representing a word. */
export interface TextWord {
  /** The text content of the word. */
  text: string;
  /** Bounding box of an extracted word. */
  boundingBox: number[];
  /** Confidence value. */
  confidence?: number;
}

/** An object representing the appearance of the text line. */
export interface Appearance {
  /** An object representing the style of the text line. */
  style: Style;
}

/** An object representing the style of the text line. */
export interface Style {
  /** The text line style name, including handwriting and other. */
  name: TextStyle;
  /** The confidence of text line style. */
  confidence: number;
}

/** Information about the extracted selection mark. */
export interface SelectionMark {
  /** Bounding box of the selection mark. */
  boundingBox: number[];
  /** Confidence value. */
  confidence: number;
  /** State of the selection mark. */
  state: SelectionMarkState;
}

/** Extracted information from a single page. */
export interface PageResult {
  /** Page number. */
  pageNumber: number;
  /** Cluster identifier. */
  clusterId?: number;
  /** List of key-value pairs extracted from the page. */
  keyValuePairs?: KeyValuePair[];
  /** List of data tables extracted from the page. */
  tables?: DataTable[];
}

/** Information about the extracted key-value pair. */
export interface KeyValuePair {
  /** A user defined label for the key/value pair entry. */
  label?: string;
  /** Information about the extracted key in a key-value pair. */
  key: KeyValueElement;
  /** Information about the extracted value in a key-value pair. */
  value: KeyValueElement;
  /** Confidence value. */
  confidence: number;
}

/** Information about the extracted key or value in a key-value pair. */
export interface KeyValueElement {
  /** Semantic data type of the key value element. */
  type?: KeyValueType;
  /** The text content of the key or value. */
  text: string;
  /** Bounding box of the key or value. */
  boundingBox?: number[];
  /** When includeTextDetails is set to true, a list of references to the text elements constituting this key or value. */
  elements?: string[];
}

/** Information about the extracted table contained in a page. */
export interface DataTable {
  /** Number of rows. */
  rows: number;
  /** Number of columns. */
  columns: number;
  /** List of cells contained in the table. */
  cells: DataTableCell[];
  /** Bounding box of the table. */
  boundingBox: number[];
}

/** Information about the extracted cell in a table. */
export interface DataTableCell {
  /** Row index of the cell. */
  rowIndex: number;
  /** Column index of the cell. */
  columnIndex: number;
  /** Number of rows spanned by this cell. */
  rowSpan?: number;
  /** Number of columns spanned by this cell. */
  columnSpan?: number;
  /** Text content of the cell. */
  text: string;
  /** Bounding box of the cell. */
  boundingBox: number[];
  /** Confidence value. */
  confidence: number;
  /** When includeTextDetails is set to true, a list of references to the text elements constituting this table cell. */
  elements?: string[];
  /** Is the current cell a header cell? */
  isHeader?: boolean;
  /** Is the current cell a footer cell? */
  isFooter?: boolean;
}

/** A set of extracted fields corresponding to the input document. */
export interface DocumentResult {
  /** Document type. */
  docType: string;
  /** Model identifier. */
  modelId?: string;
  /** First and last page number where the document is found. */
  pageRange: number[];
  /** Predicted document type confidence. */
  docTypeConfidence?: number;
  /** Dictionary of named field values. */
  fields: { [propertyName: string]: FieldValue };
}

/** Recognized field value. */
export interface FieldValue {
  /** Type of field value. */
  type: FieldValueType;
  /** String value. */
  valueString?: string;
  /** Date value. */
  valueDate?: Date;
  /**
   * Time value.
   * This value should be an ISO-8601 formatted string representing time. E.g. "HH:MM:SS" or "HH:MM:SS.mm".
   */
  valueTime?: string;
  /** Phone number value. */
  valuePhoneNumber?: string;
  /** Floating point value. */
  valueNumber?: number;
  /** Integer value. */
  valueInteger?: number;
  /** Array of field values. */
  valueArray?: FieldValue[];
  /** Dictionary of named field values. */
  valueObject?: { [propertyName: string]: FieldValue };
  /** Selection mark value. */
  valueSelectionMark?: FieldValueSelectionMark;
  /** Text content of the extracted field. */
  text?: string;
  /** Bounding box of the field value, if appropriate. */
  boundingBox?: number[];
  /** Confidence score. */
  confidence?: number;
  /** When includeTextDetails is set to true, a list of references to the text elements constituting this field. */
  elements?: string[];
  /** The 1-based page number in the input document. */
  pageNumber?: number;
}

/** Request parameter to copy an existing custom model from the source resource to a target resource referenced by the resource ID. */
export interface CopyRequest {
  /** Azure Resource Id of the target Form Recognizer resource where the model is copied to. */
  targetResourceId: string;
  /** Location of the target Azure resource. A valid Azure region name supported by Cognitive Services. */
  targetResourceRegion: string;
  /** Entity that encodes claims to authorize the copy request. */
  copyAuthorization: CopyAuthorizationResult;
}

/** Request parameter that contains authorization claims for copy operation. */
export interface CopyAuthorizationResult {
  /** Model identifier. */
  modelId: string;
  /** Token claim used to authorize the request. */
  accessToken: string;
  /** The time when the access token expires. The date is represented as the number of seconds from 1970-01-01T0:0:0Z UTC until the expiration time. */
  expirationDateTimeTicks: number;
}

/** Status and result of the queued copy operation. */
export interface CopyOperationResult {
  /** Operation status. */
  status: OperationStatus;
  /** Date and time (UTC) when the copy operation was submitted. */
  createdOn: Date;
  /** Date and time (UTC) when the status was last updated. */
  lastModified: Date;
  /** Results of the copy operation. */
  copyResult?: CopyResult;
}

/** Custom model copy result. */
export interface CopyResult {
  /** Identifier of the target model. */
  modelId: string;
  /** Errors returned during the copy operation. */
  errors?: ErrorInformation[];
}

/** Request contract for compose operation. */
export interface ComposeRequest {
  /** List of model ids to compose. */
  modelIds: string[];
  /** Optional user defined model name (max length: 1024). */
  modelName?: string;
}

/** Response to the list custom models operation. */
export interface Models {
  /** Summary of all trained custom models. */
  summary?: ModelsSummary;
  /** Collection of trained custom models. */
  modelList?: ModelInfo[];
  /** Link to the next page of custom models. */
  nextLink?: string;
}

/** Summary of all trained custom models. */
export interface ModelsSummary {
  /** Current count of trained custom models. */
  count: number;
  /** Max number of models that can be trained for this account. */
  limit: number;
  /** Date and time (UTC) when the summary was last updated. */
  lastModified: Date;
}

/** Defines headers for GeneratedClient_trainCustomModelAsync operation. */
export interface GeneratedClientTrainCustomModelAsyncHeaders {
  /** Location and ID of the model being trained. The status of model training is specified in the status property at the model location. */
  location?: string;
}

/** Defines headers for GeneratedClient_analyzeWithCustomModel operation. */
export interface GeneratedClientAnalyzeWithCustomModelHeaders {
  /** URL containing the resultId used to track the progress and obtain the result of the analyze operation. */
  operationLocation?: string;
}

/** Defines headers for GeneratedClient_copyCustomModel operation. */
export interface GeneratedClientCopyCustomModelHeaders {
  /** URL containing the resultId used to track the progress and obtain the result of the copy operation. */
  operationLocation?: string;
}

/** Defines headers for GeneratedClient_generateModelCopyAuthorization operation. */
export interface GeneratedClientGenerateModelCopyAuthorizationHeaders {
  /** Location and ID of the model being copied. The status of model copy is specified in the status property at the model location. */
  location?: string;
}

/** Defines headers for GeneratedClient_composeCustomModelsAsync operation. */
export interface GeneratedClientComposeCustomModelsAsyncHeaders {
  /** Location and ID of the composed model. The status of composed model is specified in the status property at the model location. */
  location?: string;
}

/** Defines headers for GeneratedClient_analyzeBusinessCardAsync operation. */
export interface GeneratedClientAnalyzeBusinessCardAsyncHeaders {
  /** URL containing the resultId used to track the progress and obtain the result of the analyze operation. */
  operationLocation?: string;
}

/** Defines headers for GeneratedClient_analyzeInvoiceAsync operation. */
export interface GeneratedClientAnalyzeInvoiceAsyncHeaders {
  /** URL containing the resultId used to track the progress and obtain the result of the analyze operation. */
  operationLocation?: string;
}

/** Defines headers for GeneratedClient_analyzeReceiptAsync operation. */
export interface GeneratedClientAnalyzeReceiptAsyncHeaders {
  /** URL containing the resultId used to track the progress and obtain the result of the analyze operation. */
  operationLocation?: string;
}

/** Defines headers for GeneratedClient_analyzeLayoutAsync operation. */
export interface GeneratedClientAnalyzeLayoutAsyncHeaders {
  /** URL containing the resultId used to track the progress and obtain the result of the analyze operation. */
  operationLocation?: string;
}

/** Known values of {@link Language} that the service accepts. */
export const enum KnownLanguage {
  En = "en",
  Es = "es",
  De = "de",
  Fr = "fr",
  It = "it",
  Nl = "nl",
  Pt = "pt",
  ZhHans = "zh-Hans"
}

/**
 * Defines values for Language. \
 * {@link KnownLanguage} can be used interchangeably with Language,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **en** \
 * **es** \
 * **de** \
 * **fr** \
 * **it** \
 * **nl** \
 * **pt** \
 * **zh-Hans**
 */
export type Language = string;

/** Known values of {@link TextStyle} that the service accepts. */
export const enum KnownTextStyle {
  Other = "other",
  Handwriting = "handwriting"
}

/**
 * Defines values for TextStyle. \
 * {@link KnownTextStyle} can be used interchangeably with TextStyle,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **other** \
 * **handwriting**
 */
export type TextStyle = string;

/** Known values of {@link SelectionMarkState} that the service accepts. */
export const enum KnownSelectionMarkState {
  Selected = "selected",
  Unselected = "unselected"
}

/**
 * Defines values for SelectionMarkState. \
 * {@link KnownSelectionMarkState} can be used interchangeably with SelectionMarkState,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **selected** \
 * **unselected**
 */
export type SelectionMarkState = string;

/** Known values of {@link KeyValueType} that the service accepts. */
export const enum KnownKeyValueType {
  String = "string",
  SelectionMark = "selectionMark"
}

/**
 * Defines values for KeyValueType. \
 * {@link KnownKeyValueType} can be used interchangeably with KeyValueType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **string** \
 * **selectionMark**
 */
export type KeyValueType = string;

/** Known values of {@link FieldValueSelectionMark} that the service accepts. */
export const enum KnownFieldValueSelectionMark {
  Selected = "selected",
  Unselected = "unselected"
}

/**
 * Defines values for FieldValueSelectionMark. \
 * {@link KnownFieldValueSelectionMark} can be used interchangeably with FieldValueSelectionMark,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **selected** \
 * **unselected**
 */
export type FieldValueSelectionMark = string;

/** Known values of {@link Locale} that the service accepts. */
export const enum KnownLocale {
  EnAU = "en-AU",
  EnCA = "en-CA",
  EnGB = "en-GB",
  EnIN = "en-IN",
  EnUS = "en-US"
}

/**
 * Defines values for Locale. \
 * {@link KnownLocale} can be used interchangeably with Locale,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **en-AU** \
 * **en-CA** \
 * **en-GB** \
 * **en-IN** \
 * **en-US**
 */
export type Locale = string;
/** Defines values for ModelStatus. */
export type ModelStatus = "creating" | "ready" | "invalid";
/** Defines values for TrainStatus. */
export type TrainStatus = "succeeded" | "partiallySucceeded" | "failed";
/** Defines values for ContentType. */
export type ContentType =
  | "application/pdf"
  | "image/bmp"
  | "image/jpeg"
  | "image/png"
  | "image/tiff";
/** Defines values for OperationStatus. */
export type OperationStatus = "notStarted" | "running" | "succeeded" | "failed";
/** Defines values for LengthUnit. */
export type LengthUnit = "pixel" | "inch";
/** Defines values for FieldValueType. */
export type FieldValueType =
  | "string"
  | "date"
  | "time"
  | "phoneNumber"
  | "number"
  | "integer"
  | "array"
  | "object"
  | "selectionMark";

/** Contains response data for the trainCustomModelAsync operation. */
export type GeneratedClientTrainCustomModelAsyncResponse = GeneratedClientTrainCustomModelAsyncHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: GeneratedClientTrainCustomModelAsyncHeaders;
  };
};

/** Optional parameters. */
export interface GeneratedClientGetCustomModelOptionalParams
  extends coreHttp.OperationOptions {
  /** Include list of extracted keys in model information. */
  includeKeys?: boolean;
}

/** Contains response data for the getCustomModel operation. */
export type GeneratedClientGetCustomModelResponse = Model & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Model;
  };
};

/** Optional parameters. */
export interface GeneratedClientAnalyzeWithCustomModel$binaryOptionalParams
  extends coreHttp.OperationOptions {
  /** Include text lines and element references in the result. */
  includeTextDetails?: boolean;
}

/** Optional parameters. */
export interface GeneratedClientAnalyzeWithCustomModel$jsonOptionalParams
  extends coreHttp.OperationOptions {
  /** .json, .pdf, .jpg, .png or .tiff type file stream. */
  fileStream?: SourcePath;
  /** Include text lines and element references in the result. */
  includeTextDetails?: boolean;
}

/** Contains response data for the analyzeWithCustomModel operation. */
export type GeneratedClientAnalyzeWithCustomModelResponse = GeneratedClientAnalyzeWithCustomModelHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: GeneratedClientAnalyzeWithCustomModelHeaders;
  };
};

/** Contains response data for the getAnalyzeFormResult operation. */
export type GeneratedClientGetAnalyzeFormResultResponse = AnalyzeOperationResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AnalyzeOperationResult;
  };
};

/** Contains response data for the copyCustomModel operation. */
export type GeneratedClientCopyCustomModelResponse = GeneratedClientCopyCustomModelHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: GeneratedClientCopyCustomModelHeaders;
  };
};

/** Contains response data for the getCustomModelCopyResult operation. */
export type GeneratedClientGetCustomModelCopyResultResponse = CopyOperationResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CopyOperationResult;
  };
};

/** Contains response data for the generateModelCopyAuthorization operation. */
export type GeneratedClientGenerateModelCopyAuthorizationResponse = GeneratedClientGenerateModelCopyAuthorizationHeaders &
  CopyAuthorizationResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: CopyAuthorizationResult;
      /** The parsed HTTP response headers. */
      parsedHeaders: GeneratedClientGenerateModelCopyAuthorizationHeaders;
    };
  };

/** Contains response data for the composeCustomModelsAsync operation. */
export type GeneratedClientComposeCustomModelsAsyncResponse = GeneratedClientComposeCustomModelsAsyncHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: GeneratedClientComposeCustomModelsAsyncHeaders;
  };
};

/** Optional parameters. */
export interface GeneratedClientAnalyzeBusinessCardAsync$binaryOptionalParams
  extends coreHttp.OperationOptions {
  /** Include text lines and element references in the result. */
  includeTextDetails?: boolean;
  /** Locale of the input document. Supported locales include: en-AU, en-CA, en-GB, en-IN, en-US(default). */
  locale?: Locale;
}

/** Optional parameters. */
export interface GeneratedClientAnalyzeBusinessCardAsync$jsonOptionalParams
  extends coreHttp.OperationOptions {
  /** .json, .pdf, .jpg, .png or .tiff type file stream. */
  fileStream?: SourcePath;
  /** Include text lines and element references in the result. */
  includeTextDetails?: boolean;
  /** Locale of the input document. Supported locales include: en-AU, en-CA, en-GB, en-IN, en-US(default). */
  locale?: Locale;
}

/** Contains response data for the analyzeBusinessCardAsync operation. */
export type GeneratedClientAnalyzeBusinessCardAsyncResponse = GeneratedClientAnalyzeBusinessCardAsyncHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: GeneratedClientAnalyzeBusinessCardAsyncHeaders;
  };
};

/** Contains response data for the getAnalyzeBusinessCardResult operation. */
export type GeneratedClientGetAnalyzeBusinessCardResultResponse = AnalyzeOperationResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AnalyzeOperationResult;
  };
};

/** Optional parameters. */
export interface GeneratedClientAnalyzeInvoiceAsync$binaryOptionalParams
  extends coreHttp.OperationOptions {
  /** Include text lines and element references in the result. */
  includeTextDetails?: boolean;
  /** Locale of the input document. Supported locales include: en-AU, en-CA, en-GB, en-IN, en-US(default). */
  locale?: Locale;
}

/** Optional parameters. */
export interface GeneratedClientAnalyzeInvoiceAsync$jsonOptionalParams
  extends coreHttp.OperationOptions {
  /** .json, .pdf, .jpg, .png or .tiff type file stream. */
  fileStream?: SourcePath;
  /** Include text lines and element references in the result. */
  includeTextDetails?: boolean;
  /** Locale of the input document. Supported locales include: en-AU, en-CA, en-GB, en-IN, en-US(default). */
  locale?: Locale;
}

/** Contains response data for the analyzeInvoiceAsync operation. */
export type GeneratedClientAnalyzeInvoiceAsyncResponse = GeneratedClientAnalyzeInvoiceAsyncHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: GeneratedClientAnalyzeInvoiceAsyncHeaders;
  };
};

/** Contains response data for the getAnalyzeInvoiceResult operation. */
export type GeneratedClientGetAnalyzeInvoiceResultResponse = AnalyzeOperationResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AnalyzeOperationResult;
  };
};

/** Optional parameters. */
export interface GeneratedClientAnalyzeReceiptAsync$binaryOptionalParams
  extends coreHttp.OperationOptions {
  /** Include text lines and element references in the result. */
  includeTextDetails?: boolean;
  /** Locale of the input document. Supported locales include: en-AU, en-CA, en-GB, en-IN, en-US(default). */
  locale?: Locale;
}

/** Optional parameters. */
export interface GeneratedClientAnalyzeReceiptAsync$jsonOptionalParams
  extends coreHttp.OperationOptions {
  /** .json, .pdf, .jpg, .png or .tiff type file stream. */
  fileStream?: SourcePath;
  /** Include text lines and element references in the result. */
  includeTextDetails?: boolean;
  /** Locale of the input document. Supported locales include: en-AU, en-CA, en-GB, en-IN, en-US(default). */
  locale?: Locale;
}

/** Contains response data for the analyzeReceiptAsync operation. */
export type GeneratedClientAnalyzeReceiptAsyncResponse = GeneratedClientAnalyzeReceiptAsyncHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: GeneratedClientAnalyzeReceiptAsyncHeaders;
  };
};

/** Contains response data for the getAnalyzeReceiptResult operation. */
export type GeneratedClientGetAnalyzeReceiptResultResponse = AnalyzeOperationResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AnalyzeOperationResult;
  };
};

/** Optional parameters. */
export interface GeneratedClientAnalyzeLayoutAsync$binaryOptionalParams
  extends coreHttp.OperationOptions {
  /** The BCP-47 language code of the text in the document. Currently, only English ('en'), Dutch (‘nl’), French (‘fr’), German (‘de’), Italian (‘it’), Portuguese (‘pt'), simplified Chinese ('zh-Hans') and Spanish ('es') are supported (print – nine languages and handwritten – English only). Layout supports auto language identification and multi language documents, so only provide a language code if you would like to force the documented to be processed as that specific language. */
  language?: Language;
  /** Custom page numbers for multi-page documents(PDF/TIFF), input the number of the pages you want to get OCR result. For a range of pages, use a hyphen. Separate each page or range with a comma or space. */
  pages?: string[];
}

/** Optional parameters. */
export interface GeneratedClientAnalyzeLayoutAsync$jsonOptionalParams
  extends coreHttp.OperationOptions {
  /** .json, .pdf, .jpg, .png or .tiff type file stream. */
  fileStream?: SourcePath;
  /** The BCP-47 language code of the text in the document. Currently, only English ('en'), Dutch (‘nl’), French (‘fr’), German (‘de’), Italian (‘it’), Portuguese (‘pt'), simplified Chinese ('zh-Hans') and Spanish ('es') are supported (print – nine languages and handwritten – English only). Layout supports auto language identification and multi language documents, so only provide a language code if you would like to force the documented to be processed as that specific language. */
  language?: Language;
  /** Custom page numbers for multi-page documents(PDF/TIFF), input the number of the pages you want to get OCR result. For a range of pages, use a hyphen. Separate each page or range with a comma or space. */
  pages?: string[];
}

/** Contains response data for the analyzeLayoutAsync operation. */
export type GeneratedClientAnalyzeLayoutAsyncResponse = GeneratedClientAnalyzeLayoutAsyncHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: GeneratedClientAnalyzeLayoutAsyncHeaders;
  };
};

/** Contains response data for the getAnalyzeLayoutResult operation. */
export type GeneratedClientGetAnalyzeLayoutResultResponse = AnalyzeOperationResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AnalyzeOperationResult;
  };
};

/** Contains response data for the listCustomModels operation. */
export type GeneratedClientListCustomModelsResponse = Models & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Models;
  };
};

/** Contains response data for the getCustomModels operation. */
export type GeneratedClientGetCustomModelsResponse = Models & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Models;
  };
};

/** Contains response data for the listCustomModelsNext operation. */
export type GeneratedClientListCustomModelsNextResponse = Models & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Models;
  };
};

/** Optional parameters. */
export interface GeneratedClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
