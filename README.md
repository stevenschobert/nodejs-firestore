[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Firestore: Node.js Client](https://github.com/googleapis/nodejs-firestore)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/firestore.svg)](https://www.npmjs.org/package/@google-cloud/firestore)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-firestore/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-firestore)




This is the Node.js Server SDK for [Google Cloud Firestore](https://firebase.google.com/docs/firestore/). Google Cloud Firestore is a NoSQL document database built for automatic scaling, high performance, and ease of application development.

This Cloud Firestore Server SDK uses Google’s Cloud Identity and Access Management for authentication and should only be used in trusted environments. Your Cloud Identity credentials allow you bypass all access restrictions and provide read and write access to all data in your Cloud Firestore project.

The Cloud Firestore Server SDKs are designed to manage the full set of data in your Cloud Firestore project and work best with reliable network connectivity. Data operations performed via these SDKs directly access the Cloud Firestore backend and all document reads and writes are optimized for high throughput.

Applications that use Google&#x27;s Server SDKs should not be used in end-user environments, such as on phones or on publicly hosted websites. If you are developing a Web or Node.js application that accesses Cloud Firestore on behalf of end users, use the firebase Client SDK.

**Note:** This Cloud Firestore Server SDK does not support Firestore databases created in [Datastore mode](https://cloud.google.com/datastore/docs/firestore-or-datastore#in_datastore_mode). To access these databases, use the [Datastore SDK](https://www.npmjs.com/package/@google-cloud/datastore).


* [Cloud Firestore Node.js Client API Reference][client-docs]
* [Cloud Firestore Documentation][product-docs]
* [github.com/googleapis/nodejs-firestore](https://github.com/googleapis/nodejs-firestore)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable the Cloud Firestore API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/firestore
```


### Using the client library

```javascript
const {Firestore} = require('@google-cloud/firestore');

// Create a new client
const firestore = new Firestore();

async function quickstart() {
  // Obtain a document reference.
  const document = firestore.doc('posts/intro-to-firestore');

  // Enter new data into the document.
  await document.set({
    title: 'Welcome to Firestore',
    body: 'Hello World',
  });
  console.log('Entered new data into the document');

  // Update an existing document.
  await document.update({
    body: 'My first Firestore app',
  });
  console.log('Updated an existing document');

  // Read the document.
  let doc = await document.get();
  console.log('Read the document');

  // Delete the document.
  await document.delete();
  console.log('Deleted the document');
}
quickstart();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-firestore/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-firestore/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-firestore&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Cloud Firestore Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-firestore/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-firestore/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/firestore/latest#reference
[product-docs]: https://cloud.google.com/firestore
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=firestore.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started

<a name="reference"></a>
