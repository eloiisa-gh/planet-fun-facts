# Planet fun Facts 🪐

This [website](https://planet-fun-facts-496672542175.europe-west1.run.app/) shows 10 fun facts about a planet. 

This parameter can also be provided in this way: `URL`/?planet=`PLANET_NAME`

Eg: [Jupiter](https://planet-fun-facts-496672542175.europe-west1.run.app?planet=Jupiter). Try it with [other planets](https://science.nasa.gov/solar-system/planets/)

Model used: `gemini-2.5-flash`


<details>
  <summary>Instructions</summary>

Continuous Deployment: [Cloud Run](https://cloud.google.com/run) is configured to automatically deploy the web application when a change is made to its source code.

Based on: [Automatically Deploy Generative AI Node.js Genkit Web Application from Version Control to Cloud Run](https://codelabs.developers.google.com/codelabs/deploy-from-github/genkit-nodejs)


<details open>
  <summary>Project setup</summary>

Check the active authenticated gcloud account: 
```
gcloud auth list                                                     
```

Set your project: 
```
gcloud config set project PROJECT_ID
gcloud config get-value project
```

Enable APIs:
```
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  aiplatform.googleapis.com
```

List the services the project has enabled for consumption:
```
gcloud services list --enabled --project=PROJECT_ID
gcloud services list --enabled --project=${GOOGLE_CLOUD_PROJECT}
```
</details>


### Set up automatic deployments
To build and deploy this gen AI application on Google Cloud with Genkit and Node.js: 

In the [Cloud Run page](https://console.cloud.google.com/run), click 'Connect repo' and 'Set up with Cloud Build'. 

Step #1: Select the 'Source repository'. 
Step #2: 'Build Configuration' -> 'Build Type': `Go, Node.js, Python, Java, .NET Core, Ruby or PHP via Google Cloud's buildpacks`. 

In the 'Configure' section, set the 'Service name' eg: `planet-fun-facts`, and 'Region'. 
In 'Authentication', select `Allow unauthenticated invocations`. 

Click 'Create'.


To get the resulting URL to view the running application: 
```
gcloud run services list
```

</details>

https://planet-fun-facts-496672542175.europe-west1.run.app/
