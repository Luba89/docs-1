---
title: Data Modification Queries
---

C8QL supports the following data-modification operations:

- **INSERT**: insert new documents into a collection
- **UPDATE**: partially update existing documents in a collection
- **REPLACE**: completely replace existing documents in a collection
- **REMOVE**: remove existing documents from a collection
- **UPSERT**: conditionally insert or update documents in a collection

Below you find some simple example queries that use these operations. The operations are detailed in [C8QL Operations](../c8ql/operations/index.md).

## Modifying a single document

Let's start with the basics: `INSERT`, `UPDATE` and `REMOVE` operations on single documents. Here is an example that insert a document in an existing collection _users_:

```js
INSERT {
    firstName: "Anna",
    name: "Pavlova",
    profession: "artist"
} IN users
```

You may provide a key for the new document; if not provided, C8 will create one for you.  

```js
INSERT {
    _key: "GilbertoGil",
    firstName: "Gilberto",
    name: "Gil",
    city: "Fortalezza"
} IN users
```

As C8 is schema-free, attributes of the documents may vary:

```js
INSERT {
    _key: "PhilCarpenter",
    firstName: "Phil",
    name: "Carpenter",
    middleName: "G.",
    status: "inactive"
} IN users
```

```js
INSERT {
    _key: "NatachaDeclerck",
    firstName: "Natacha",
    name: "Declerck",
    location: "Antwerp"
} IN users 
```

Update is quite simple. The following C8QL statement will add or change the attributes status and location

```js
UPDATE "PhilCarpenter" WITH {
    status: "active",
    location: "Beijing"
} IN users
```

Replace is an alternative to update where all attributes of the document are replaced.

```js
REPLACE {
    _key: "NatachaDeclerck",
    firstName: "Natacha",
    name: "Leclerc",
    status: "active",
    level: "premium"
} IN users
```

Removing a document if you know its key is simple as well :

```js
REMOVE "GilbertoGil" IN users
```

or

```js
REMOVE { _key: "GilbertoGil" } IN users
```

## Modifying multiple documents

Data-modification operations are normally combined with `FOR` loops to iterate over a given list of documents. They can optionally be combined with `FILTER` statements and the like.

Let's start with an example that modifies existing documents in a collection `users` that match some condition:

```js
FOR u IN users
    FILTER u.status == "not active"
    UPDATE u WITH { status: "inactive" } IN users
```

Now, let's copy the contents of the collection `users` into the collection `backup`:

```js
FOR u IN users
    INSERT u IN backup
```

As a final example, let's find some documents in collection `users` and remove them from collection `backup`. The link between the documents in both collections is established via the documents' keys:

```js
FOR u IN users
    FILTER u.status == "deleted"
    REMOVE u IN backup
```

## Returning documents

Data-modification queries can optionally return documents. In order to reference the inserted, removed or modified documents in a `RETURN` statement, data-modification statements introduce the `OLD` and/or `NEW` pseudo-values:

```js
FOR i IN 1..100
    INSERT { value: i } IN test 
    RETURN NEW
```

```js
FOR u IN users
    FILTER u.status == "deleted"
    REMOVE u IN users 
    RETURN OLD
```

```js
FOR u IN users
    FILTER u.status == "not active"
    UPDATE u WITH { status: "inactive" } IN users 
    RETURN NEW
```

`NEW` refers to the inserted or modified document revision, and `OLD` refers to the document revision before update or removal.

`INSERT` statements can only refer to the `NEW` pseudo-value, and `REMOVE` operations only to `OLD`. `UPDATE`, `REPLACE` and `UPSERT` can refer to either.

In all cases the full documents will be returned with all their attributes, including the potentially auto-generated attributes such as `_id`, `_key`, or `_rev` and the attributes not specified in the update expression of a partial update.
