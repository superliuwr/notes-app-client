export default {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-serverless-stack-marvin"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://mfj9gjkaw7.execute-api.ap-southeast-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_Xo81uYMjG",
    APP_CLIENT_ID: "4ovdurdiqfscmiveiiqoum1gdc",
    IDENTITY_POOL_ID: "ap-southeast-2:927624c3-f6d3-460e-8ab4-af0f29c81d1d"
  },
  MAX_ATTACHMENT_SIZE: 5000000
};