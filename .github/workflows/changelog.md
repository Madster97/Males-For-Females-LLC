2025-02-22T22:38:15.2777330Z ##[debug]Starting: Set up job
2025-02-22T22:38:15.2778500Z Current runner version: '2.322.0'
2025-02-22T22:38:15.2798758Z ##[group]Operating System
2025-02-22T22:38:15.2799473Z Microsoft Windows Server 2022
2025-02-22T22:38:15.2800012Z 10.0.20348
2025-02-22T22:38:15.2800431Z Datacenter
2025-02-22T22:38:15.2800851Z ##[endgroup]
2025-02-22T22:38:15.2801322Z ##[group]Runner Image
2025-02-22T22:38:15.2801842Z Image: windows-2022
2025-02-22T22:38:15.2802334Z Version: 20250209.1.0
2025-02-22T22:38:15.2803330Z Included Software: https://github.com/actions/runner-images/blob/win22/20250209.1/images/windows/Windows2022-Readme.md
2025-02-22T22:38:15.2804692Z Image Release: https://github.com/actions/runner-images/releases/tag/win22%2F20250209.1
2025-02-22T22:38:15.2805531Z ##[endgroup]
2025-02-22T22:38:15.2806001Z ##[group]Runner Image Provisioner
2025-02-22T22:38:15.2806887Z 2.0.422.1
2025-02-22T22:38:15.2807314Z ##[endgroup]
2025-02-22T22:38:15.2808524Z ##[group]GITHUB_TOKEN Permissions
2025-02-22T22:38:15.2810337Z Actions: read
2025-02-22T22:38:15.2810874Z Contents: read
2025-02-22T22:38:15.2811331Z Metadata: read
2025-02-22T22:38:15.2811794Z SecurityEvents: write
2025-02-22T22:38:15.2812309Z ##[endgroup]
2025-02-22T22:38:15.2815029Z Secret source: Actions
2025-02-22T22:38:15.2815927Z ##[debug]Primary repository: Madib036/gh-repo-clone-github-CopilotForXcode
2025-02-22T22:38:15.2816763Z Prepare workflow directory
2025-02-22T22:38:15.2874291Z ##[debug]Creating pipeline directory: 'D:\a\gh-repo-clone-github-CopilotForXcode'
2025-02-22T22:38:15.2878167Z ##[debug]Creating workspace directory: 'D:\a\gh-repo-clone-github-CopilotForXcode\gh-repo-clone-github-CopilotForXcode'
2025-02-22T22:38:15.2880225Z ##[debug]Update context data
2025-02-22T22:38:15.2883462Z ##[debug]Evaluating job-level environment variables
2025-02-22T22:38:15.3084606Z ##[debug]Evaluating job container
2025-02-22T22:38:15.3087643Z ##[debug]Evaluating job service containers
2025-02-22T22:38:15.3090074Z ##[debug]Evaluating job defaults
2025-02-22T22:38:15.3113001Z Prepare all required actions
2025-02-22T22:38:15.3149270Z Getting action download info
2025-02-22T22:38:15.4860686Z ##[group]Download immutable action package 'actions/checkout@v4'
2025-02-22T22:38:15.4861795Z Version: 4.2.2
2025-02-22T22:38:15.4862738Z Digest: sha256:ccb2698953eaebd21c7bf6268a94f9c26518a7e38e27e0b83c1fe1ad049819b1
2025-02-22T22:38:15.4863924Z Source commit SHA: 11bd71901bbe5b1630ceea73d27597364c9af683
2025-02-22T22:38:15.4864650Z ##[endgroup]
2025-02-22T22:38:15.5686944Z ##[debug]Copied action archive 'C:\actionarchivecache\actions_checkout\11bd71901bbe5b1630ceea73d27597364c9af683.zip' to 'D:\a\_actions\_temp_52adac8c-cd0a-4d7d-8c06-3ff2609d39a9\4748cf52-c92f-409f-b0ab-257bee4bc09e.zip'
2025-02-22T22:38:15.6238616Z ##[debug]Unwrap 'actions-checkout-11bd719' to 'D:\a\_actions\actions\checkout\v4'
2025-02-22T22:38:15.6513844Z ##[debug]Archive 'D:\a\_actions\_temp_52adac8c-cd0a-4d7d-8c06-3ff2609d39a9\4748cf52-c92f-409f-b0ab-257bee4bc09e.zip' has been unzipped into 'D:\a\_actions\actions\checkout\v4'.
2025-02-22T22:38:15.7119136Z Download action repository 'github/ossar-action@v1' (SHA:786a16a90ba92b4ae6228fe7382fb16ef5c51000)
2025-02-22T22:38:15.9301721Z ##[debug]Download 'https://api.github.com/repos/github/ossar-action/zipball/786a16a90ba92b4ae6228fe7382fb16ef5c51000' to 'D:\a\_actions\_temp_e246b7fe-0662-4592-b062-10b9f5fdfdf2\37a26646-5eee-4016-919c-bfb6d3b42937.zip'
2025-02-22T22:38:15.9446964Z ##[debug]Unwrap 'github-ossar-action-786a16a' to 'D:\a\_actions\github\ossar-action\v1'
2025-02-22T22:38:15.9589143Z ##[debug]Archive 'D:\a\_actions\_temp_e246b7fe-0662-4592-b062-10b9f5fdfdf2\37a26646-5eee-4016-919c-bfb6d3b42937.zip' has been unzipped into 'D:\a\_actions\github\ossar-action\v1'.
2025-02-22T22:38:15.9632950Z ##[group]Download immutable action package 'github/codeql-action@v3'
2025-02-22T22:38:15.9635607Z Version: 3.28.10
2025-02-22T22:38:15.9636393Z Digest: sha256:358a6fc6641452db1d9bfe3f94c1339afd4939b7150aa9d3f61790aabb142098
2025-02-22T22:38:15.9638779Z Source commit SHA: b56ba49b26e50535fa1e7f7db0f4f7b4bf65d80d
2025-02-22T22:38:15.9639505Z ##[endgroup]
2025-02-22T22:38:16.4296916Z ##[debug]Download 'https://api.github.com/internal/immutable-actions/github/codeql-action/download/sha256:8269b137f627d536f8f28d1b38ce24641b437c07af40759b8fc8e133d66fda58?x-ghcr-actor-id=930873162&x-ghcr-actor-type=repository&x-ghcr-alg=hmac-sha256&x-ghcr-date=2025-02-22T22:38:15Z&x-ghcr-expires=10m0s&x-ghcr-host=ghcr.io&***
2025-02-22T22:38:21.5853785Z ##[debug]Unwrap 'action' to 'D:\a\_actions\github\codeql-action\v3'
2025-02-22T22:38:27.3669152Z ##[debug]Archive 'D:\a\_actions\_temp_e4b2f8cb-06b9-4d15-8122-b905095601fc\e363c414-0b54-4328-8c8b-02760b68c2b6.zip' has been unzipped into 'D:\a\_actions\github\codeql-action\v3'.
2025-02-22T22:38:28.6272617Z ##[debug]action.yml for action: 'D:\a\_actions\actions\checkout\v4\action.yml'.
2025-02-22T22:38:28.7612234Z ##[debug]action.yml for action: 'D:\a\_actions\github\ossar-action\v1\action.yml'.
2025-02-22T22:38:28.7631390Z ##[debug]action.yml for action: 'D:\a\_actions\github\codeql-action\v3\upload-sarif\action.yml'.
2025-02-22T22:38:28.7738710Z ##[debug]Set step '__actions_checkout' display name to: 'Checkout repository'
2025-02-22T22:38:28.7740808Z ##[debug]Set step 'ossar' display name to: 'Run OSSAR'
2025-02-22T22:38:28.7741968Z ##[debug]Set step '__github_codeql-action' display name to: 'Upload OSSAR results'
2025-02-22T22:38:28.7742525Z Complete job name: OSSAR-Scan
2025-02-22T22:38:28.7761841Z ##[debug]Collect running processes for tracking orphan processes.
2025-02-22T22:38:28.7863263Z ##[debug]Finishing: Set up job
