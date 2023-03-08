import os
import pymongo

from dotenv import load_dotenv

load_dotenv()  # read environment variables from .env

#MONGO_URL = os.environ.get("MONGO_URL")
#MONGO_NAME = os.environ.get("MONGO_NAME")

MONGO_URL="mongodb://mongodb:27017/"
MONGO_NAME="todo"

client = pymongo.MongoClient(MONGO_URL, maxPoolSize = None)
db = client[MONGO_NAME]

if MONGO_URL is not None:
    print("Database URL found, using it")
else:
    print("No database URL found in environment variables")

def get_todo_collection():
    return db["todo"]