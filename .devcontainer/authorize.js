+const authorizeUrl = new URL('https://app.netlify.com/authorize');
+authorizeUrl.searchParams.set('client_id', NTL_AUTH_CLIENT_ID);
+authorizeUrl.searchParams.set('response_type', 'token');
+authorizeUrl.searchParams.set('state', paramsState);
+authorizeUrl.searchParams.set('redirect_uri', netlifyRedirectUri);
+
 return {
   statusCode: 302,
   headers: {
-    'Location': `https://app.netlify.com/authorize?client_id=${NTL_AUTH_CLIENT_ID}&response_type=token&state=${paramsState}&redirect_uri=${netlifyRedirectUri}`
+    'Location': authorizeUrl.toString()
   },
   body: ''
 };