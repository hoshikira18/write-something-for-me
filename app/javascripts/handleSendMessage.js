// Function to create an asset
async function handleSendMessage(content) {
  const { request, GraphQLClient } = require("graphql-request");
  const endpoint =
    "https://api-eu-west-2.hygraph.com/v2/cljhcjich0fx001ume05m1i44/master";

  const mutaionMessage = `
    mutation MyMutation($message: String!) {
    createMessage(data: {message: $message}) {
        id,
        message
    }
    }

`;
  try {
    // Create a new GraphQL client
    const graphQLClient = new GraphQLClient(endpoint);

    const variables = { message: content };
    // Send the mutation request
    const response = await graphQLClient.request(mutaionMessage, variables);

    // Return the created asset
    return response.createMessage;
  } catch (error) {
    console.error("Error creating asset:", error);
    throw error;
  }
}

export default handleSendMessage;
