## Patient Data Filter

This is a react and python based web application which reveals patient data and can be filtered by their event codes and code categories.

I built and deployed the react app to AWS Amplify for CI/CD. <br />
The url for the app:  https://master.d3d9eg977f1f5m.amplifyapp.com/

The backend is also deployed to: https://xwyir2jma1.execute-api.us-east-1.amazonaws.com/prod/healthreveal

1. The frontend is created using react. You can search the patients based on their event codes and code categories. 
### To run frontend react app locally:
```
npm install
npm start
```

2. The backend is a simple python application which sends dummy data and is deployed to a AWS Lambda function which is behind an API Gateway.
### To run backend locally:

checkout out `backend` branch of the repo.
run `python lambda_handler.py`
