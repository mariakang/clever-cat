let apiInvokeUrl = 'https://mv0qnh22i7.execute-api.us-east-1.amazonaws.com/prod';

let userPoolData = {
  UserPoolId: "us-east-1_628HLgkPV",
  ClientId: "5ciuhpl5vt3im105tngdjg08ma"
};

let cognitoUserPool = new AmazonCognitoIdentity.CognitoUserPool(userPoolData);

ReactDOM.render(<Home userPool={cognitoUserPool} apiUrl={apiInvokeUrl} />, document.getElementById('app'));

