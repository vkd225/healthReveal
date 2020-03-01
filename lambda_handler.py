import json
import logging

logger = logging.getLogger()
logging.basicConfig()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):

    patient_data = [
        {
          "name": "Tomas Walters",
          "age": 64,
          "event_code": "D234",
          "event_date": "7/13/2019",
          "code_category": "D"
        },
        {
          "name": "Dora Lloyd",
          "age": 33,
          "event_code": "D456",
          "event_date": "1/1/2019",
          "code_category": "C"
        },
        {
          "name": "Jerome Burton",
          "age": 48,
          "event_code": "D456",
          "event_date": "3/27/2019",
          "code_category": "C"
        },
        {
          "name": "Dora Lloyd",
          "age": 33,
          "event_code": "L123",
          "event_date": "1/1/2019",
          "code_category": "A"
        },
        {
          "name": "Jerome Burton",
          "age": 48,
          "event_code": "L123",
          "event_date": "3/7/2019",
          "code_category": "A"
        },
        {
          "name": "Tomas Walters",
          "age": 64,
          "event_code": "L222",
          "event_date": "7/13/2019",
          "code_category": "B"
        },
        {
          "name": "Jerome Burton",
          "age": 48,
          "event_code": "M222",
          "event_date": "3/7/2019",
          "code_category": "C"
        },
        {
          "name": "Tomas Walters",
          "age": 64,
          "event_code": "M222",
          "event_date": "7/13/2019",
          "code_category": "C"
        },
         {
          "name": "Margo Delgado",
          "age": 55,
          "event_code": "M333",
          "event_date": "7/13/2019",
          "code_category": "B"
        }
    ]

    return {
        'patient_data': patient_data
    }

# Entry point for testing
if __name__ == '__main__':
    with open('test_event.json', 'r') as f_in:
        test_event = json.load(f_in)

    response = lambda_handler(test_event,'')
    logger.info(response)
