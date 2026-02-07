Update readme.md to building.md

README.md (file changed in the PR)
Edit location: the single hunk added in the PR is shown as @@ -24,3 +24,1048 @@. All new content added by this PR is the block of lines inserted after line 24 (roughly “+24 .. +1048” in the patch).
Action I recommend (pick one):
Option A (recommended): Remove the large insertion entirely and replace it with a short README summary + a link to a new BUILDING.md / EXAMPLES directory. This will fix the PR being huge and unrelated to the repo.
Exact edit: delete all added lines in the hunk (the whole +24..+1048 range) and add a concise README stub (2–10 lines) pointing to examples/ and BUILDING.md.
Option B: If you want to keep parts, move the Node BUILD instructions into a new file BUILDING.md and remove them from README.md.
Exact edit: remove lines from the start of the insertion (the first added line: “GitHub Codespaces ♥️ React”) through the end of the Node BUILDING content (end of the patch). Add a one-line pointer in README.md: “See BUILDING.md for Node build instructions.”
If you want the exact replacement text I can prepare the new README.md and BUILDING.md contents and produce a patch.

PR description (the PR body contains a Java snippet)
Location: the PR body includes this Java snippet (present in the PR metadata you uploaded):
try {
URL url = new URL("https://{authenticationurl}/services/cso-logout");
HttpURLConnection conn = (HttpURLConnection) url.openConnection();
conn.setDoOutput(true);
conn.setRequestMethod("POST");
conn.setRequestProperty("Content-Type", "application/json");
conn.setRequestProperty("Accept", "application/xml"); // can also return json
String authJson = "{"nextGenCSO": "\r\nyour128characterauthenticationtokentobeuseduntilexpiration..." }";
OutputStream os = conn.getOutputStream();
os.write(authJson.getBytes());
os.flush();
BufferedReader reader = new BufferedReader(new InputStreamReader((conn.getInputStream())));
String responseLine;
String responseBody = "";
while ((responseLine = reader.readLine()) != null) {
responseBody += responseLine;
}
}
catch (IOException e) {
e.printStackTrace();
System.exit(-1);
}

Problems to fix (exact lines to change):

The authJson literal with a long token — remove token and use an env var / placeholder.
OutputStream/BufferedReader are not closed — use try-with-resources.
No response code handling — check conn.getResponseCode() and use getErrorStream() on non-2xx.
Do not call System.exit(-1) in example code — log or rethrow.
Exact replacement (replace the whole try/catch block above in the PR description with one of these):

a) Preferred (Java 11+ HttpClient example — succinct, safer):

Replace the whole block with this (use in PR description; it uses an env var placeholder CSO_TOKEN):
// Java 11+ HttpClient example. Set CSO_TOKEN environment variable to your token.
String authToken = System.getenv("CSO_TOKEN");
if (authToken == null || authToken.isBlank()) {
  System.err.println("Please set CSO_TOKEN env var");
} else {
  HttpClient client = HttpClient.newBuilder().build();
  String url = "https://your-authentication-url/services/cso-logout";
  String jsonPayload = "{\"nextGenCSO\":\"" + authToken + "\"}";
  HttpRequest request = HttpRequest.newBuilder()
      .uri(URI.create(url))
      .header("Content-Type", "application/json")
      .header("Accept", "application/json")
      .timeout(Duration.ofSeconds(15))
      .POST(HttpRequest.BodyPublishers.ofString(jsonPayload))
      .build();
  HttpResponse<String> resp = client.send(request, HttpResponse.BodyHandlers.ofString());
  int status = resp.statusCode();
  if (status >= 200 && status < 300) {
    System.out.println("Logout successful: " + resp.body());
  } else {
    System.err.printf("Logout failed (status %d): %s%n", status, resp.body());
  }
}
b) If you must keep HttpURLConnection, replace with this try-with-resources safe pattern:

String authToken = System.getenv("CSO_TOKEN");
if (authToken == null || authToken.isBlank()) {
  System.err.println("Please set CSO_TOKEN env var");
} else {
  URL url = new URL("https://your-authentication-url/services/cso-logout");
  HttpURLConnection conn = (HttpURLConnection) url.openConnection();
  conn.setDoOutput(true);
  conn.setRequestMethod("POST");
  conn.setRequestProperty("Content-Type", "application/json");
  conn.setRequestProperty("Accept", "application/json");
  String authJson = "{\"nextGenCSO\":\"" + authToken + "\"}";
  conn.setConnectTimeout(15000);
  conn.setReadTimeout(15000);

  try (OutputStream os = conn.getOutputStream()) {
    os.write(authJson.getBytes(StandardCharsets.UTF_8));
    os.flush();
  }

  int code = conn.getResponseCode();
  try (InputStream in = code >= 200 && code < 300 ? conn.getInputStream() : conn.getErrorStream();
       BufferedReader reader = new BufferedReader(new InputStreamReader(in, StandardCharsets.UTF_8))) {
    StringBuilder responseBody = new StringBuilder();
    String line;
    while ((line = reader.readLine()) != null) {
      responseBody.append(line);
    }
    if (code >= 200 && code < 300) {
      System.out.println("Logout successful: " + responseBody);
    } else {
      System.err.println("Logout failed (status " + code + "): " + responseBody);
    }
  }
}
Other exact edits to do in the PR/branch
Remove any hard-coded tokens from both the README.md file and the PR body. Search for strings like "your128characterauthenticationtoken..." and replace them with ${CSO_TOKEN} or similar placeholder.
Add CONTRIBUTING or README note: “Do not commit real tokens; use environment variables.”
Add BUILDING.md or examples/ if you keep Node BUILD content. Exact action: create BUILDING.md containing the Node build material and delete that large block from README.md.
Branch / mergeability
The PR shows mergeable_state: dirty. After you make file edits, rebase the branch on main or merge main into your branch and resolve conflicts. Exact action: on branch revert-1-Madib036-patch-1 run:
git fetch origin
git rebase origin/main
fix conflicts, git add, git rebase --continue
git push --force-with-lease
Next step

Do you want me to prepare the exact patch contents for:
(A) updating README.md (deleting the large insertion and adding a short stub),
(B) creating BUILDING.md with the moved Node content,
(C) updating the PR description Java snippet (and removing any token literals)?
If yes, I will produce the exact new file contents / diff you can paste or I can push (if you want me to push, confirm repository/branch and commit message).