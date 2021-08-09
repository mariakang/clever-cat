let apiInvokeUrl = 'https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod';

let userPoolData = {
  UserPoolId: "us-east-1_628HLgkPV",
  ClientId: "5ciuhpl5vt3im105tngdjg08ma"
};

let cognitoUserPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

ReactDOM.render(<Home userPool={cognitoUserPool} apiUrl={apiInvokeUrl} />, document.getElementById('app'));

