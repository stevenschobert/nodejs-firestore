// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

console.log(`${new Date().toISOString()} [Firestore V1 require] start`);

const FirestoreClient = require('./firestore_client');

console.log(`${new Date().toISOString()} [Firestore V1 require] after client require`);

const FirestoreAdminClient = require('./firestore_admin_client');

console.log(`${new Date().toISOString()} [Firestore V1 require] after admin require`);

FirestoreClient.FirestoreClient = FirestoreClient;
FirestoreClient.FirestoreAdminClient = FirestoreAdminClient;
module.exports = FirestoreClient;
