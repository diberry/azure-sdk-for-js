let nock = require('nock');

module.exports.testInfo = {"container":"container156404687088602914","blob":"blob156404687114708124"}

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156404687088602914')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:12 GMT',
  'ETag',
  '"0x8D710E1DB4EE50F"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'b3570563-d01e-0121-32ca-4215f2000000',
  'x-ms-version',
  '2018-11-09',
  'Date',
  'Thu, 25 Jul 2019 09:24:11 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156404687088602914/blob156404687114708124', "aaaabbbb")
  .reply(201, "", [ 'Content-Length',
  '0',
  'Content-MD5',
  'xiIFTZ5vF7Q4FK1dYcqyOQ==',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:13 GMT',
  'ETag',
  '"0x8D710E1DB789996"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '73846508-901e-0088-71ca-42864f000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Thu, 25 Jul 2019 09:24:13 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .get('/container156404687088602914/blob156404687114708124')
  .reply(206, "bbbb", [ 'Content-Length',
  '4',
  'Content-Type',
  'application/octet-stream',
  'Content-Range',
  'bytes 4-7/8',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:13 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D710E1DB789996"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '63f227df-601e-001e-1fca-42e47b000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-tag-count',
  '0',
  'x-ms-creation-time',
  'Thu, 25 Jul 2019 09:24:13 GMT',
  'x-ms-blob-content-md5',
  'xiIFTZ5vF7Q4FK1dYcqyOQ==',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'BlockBlob',
  'x-ms-server-encrypted',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,x-ms-tag-count,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-blob-content-md5,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-server-encrypted,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 25 Jul 2019 09:24:13 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .get('/container156404687088602914/blob156404687114708124')
  .reply(206, "abbb", [ 'Content-Length',
  '4',
  'Content-Type',
  'application/octet-stream',
  'Content-Range',
  'bytes 3-6/8',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:13 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D710E1DB789996"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'd24f5012-b01e-0035-12ca-4290c3000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-tag-count',
  '0',
  'x-ms-creation-time',
  'Thu, 25 Jul 2019 09:24:13 GMT',
  'x-ms-blob-content-md5',
  'xiIFTZ5vF7Q4FK1dYcqyOQ==',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'BlockBlob',
  'x-ms-server-encrypted',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,x-ms-tag-count,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-blob-content-md5,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-server-encrypted,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 25 Jul 2019 09:24:13 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .get('/container156404687088602914/blob156404687114708124')
  .reply(206, "aabb", [ 'Content-Length',
  '4',
  'Content-Type',
  'application/octet-stream',
  'Content-Range',
  'bytes 2-5/8',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:13 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D710E1DB789996"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '0c24a853-701e-012c-52ca-42fafe000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-tag-count',
  '0',
  'x-ms-creation-time',
  'Thu, 25 Jul 2019 09:24:13 GMT',
  'x-ms-blob-content-md5',
  'xiIFTZ5vF7Q4FK1dYcqyOQ==',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'BlockBlob',
  'x-ms-server-encrypted',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,x-ms-tag-count,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-blob-content-md5,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-server-encrypted,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 25 Jul 2019 09:24:13 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .get('/container156404687088602914/blob156404687114708124')
  .reply(206, "aaab", [ 'Content-Length',
  '4',
  'Content-Type',
  'application/octet-stream',
  'Content-Range',
  'bytes 1-4/8',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:13 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D710E1DB789996"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '73079b89-001e-0101-1aca-42793e000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-tag-count',
  '0',
  'x-ms-creation-time',
  'Thu, 25 Jul 2019 09:24:13 GMT',
  'x-ms-blob-content-md5',
  'xiIFTZ5vF7Q4FK1dYcqyOQ==',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'BlockBlob',
  'x-ms-server-encrypted',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,x-ms-tag-count,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-blob-content-md5,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-server-encrypted,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 25 Jul 2019 09:24:13 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/container156404687088602914')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '55429027-001e-008d-48ca-427230000000',
  'x-ms-version',
  '2018-11-09',
  'Date',
  'Thu, 25 Jul 2019 09:24:14 GMT',
  'Connection',
  'close' ]);

