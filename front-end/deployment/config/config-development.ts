/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://main.daohmvy74x3vy.amplifyapp.com/';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'eu-west-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '6s9itta957qbqd7clgg1k11ntr',
  USER_POOL_ID: 'us-west-1_hJ9Ij8WGJ',
  IDENTITY_POOL_ID: 'us-west-1:36e6e327-abe2-4b7e-b2a7-a716ea74890d',
  GRAPHQL_ENDPOINT: 'https://jgltnj4jfjcjnn4q7kfziz2ybq.appsync-api.us-west-1.amazonaws.com/graphql',
};

export default configDevelopment;
