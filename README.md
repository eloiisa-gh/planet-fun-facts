# Build and deploy gen AI applications on Google Cloud with Genkit and Node.js

[Google Developers Codelabs - Automatically Deploy Generative AI Node.js Genkit Web Application from Version Control to Cloud Run](https://codelabs.developers.google.com/codelabs/deploy-from-github/genkit-nodejs)

In this lab, you configure [Cloud Run](https://cloud.google.com/run) to automatically deploy your web application when a change is made to its source code.

This [website](https://codelab-genai-649048930651.us-central1.run.app) shows  10 fun facts about an animal. Eg: [flamingo](https://codelab-genai-649048930651.us-central1.run.app?animal=flamingo)


<details>
  <summary>Instructions</summary>

Google Cloud CLI: 
```
gcloud auth list                                                     
```

Create a Cloud project
```
gcloud projects create PROJECT_ID
gcloud projects list
```

### Enable billing for your Cloud project
List available billing accounts: 
```
gcloud billing accounts list
```

Link a billing account with a Google Cloud project: 
```
gcloud billing projects link PROJECT_ID --billing-account=BILLING_ACCOUNT_ID
```

### Set your project
```
gcloud config set project PROJECT_ID
```

Enable APIs:
```
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  aiplatform.googleapis.com
```

List the services for project my-project has enabled for consumption:
```
gcloud services list --enabled --project=PROJECT_ID
```

To get the resulting URL to view the running application: 
```
gcloud run services list
```
</details>
