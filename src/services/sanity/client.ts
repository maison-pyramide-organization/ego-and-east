import { ClientConfig, createClient } from "@sanity/client";

const config: ClientConfig = {
    projectId: "mjmhi8wx",
    dataset: "production",
    apiVersion: "v2022-03-07",
};

const sanityClient = createClient(config);

export default sanityClient;
