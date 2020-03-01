## Patient Data Filter

This is a react and python based web application which reveals patient data and can be filtered by their event code and code category.

I built and deployed the front end to AWS Amplify for CI/CD. 
The url for the app:  https://master.d3d9eg977f1f5m.amplifyapp.com/

The backend is also deployed to: https://xwyir2jma1.execute-api.us-east-1.amazonaws.com/prod/healthreveal

1. The front end is create using react. You can search the patients event code and code category. 
### To run locally:
```
npm install
npm start
```

2. The back is simple python application which sends dummy data and is deployed to a AWS Lambda function which is behind an API Gateway.
### To run locally

checkout out `backend` branch of the repo.
run `python lambda_handler.py`
