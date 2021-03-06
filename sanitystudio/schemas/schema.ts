// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// Import the singleton schemas
import siteSettings from "./singletons/siteSettings"

// Import the document schemas
import bio from "./documents/bio"
import event from "./documents/event"
import boardYear from "./documents/boardYear"

// Import the object schemas
import bioPortableText from "./objects/bioPortableText"
import eventPortableText from "./objects/eventPortableText"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        siteSettings,
        bio,
        event,
        boardYear,
        bioPortableText,
        eventPortableText,
    ]),
})
